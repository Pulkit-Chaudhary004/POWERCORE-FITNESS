const express = require("express");
const router = express.Router();
const { getDB } = require("../db");


// ✅ GET all branches
router.get("/branches", async (req, res) => {
    try {
        const db = getDB();
        const branches = await db.collection("gyms").find().toArray();

        if (!branches.length) {
            return res.status(404).json({ message: "No branches found" });
        }

        res.json(branches);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// ✅ Haversine distance (accurate)
function getDistance(lat1, lon1, lat2, lon2) {
    const R = 6371;

    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;

    const a =
        Math.sin(dLat / 2) ** 2 +
        Math.cos(lat1 * Math.PI / 180) *
        Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) ** 2;

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    return R * c;
}


// ✅ POST nearest branch
router.post("/nearest-branch", async (req, res) => {
    try {
        const { lat, lng } = req.body;

        // validation
        if (lat === undefined || lng === undefined) {
            return res.status(400).json({ error: "Latitude and Longitude required" });
        }

        const userLat = Number(lat);
        const userLng = Number(lng);

        if (isNaN(userLat) || isNaN(userLng)) {
            return res.status(400).json({ error: "Invalid coordinates" });
        }

        const db = getDB();
        const branches = await db.collection("gyms").find().toArray();

        if (!branches.length) {
            return res.status(404).json({ message: "No branches found" });
        }

        let nearest = null;
        let minDist = Infinity;

        branches.forEach((branch) => {
            const dist = getDistance(userLat, userLng, branch.lat, branch.lng);

            if (dist < minDist) {
                minDist = dist;
                nearest = { ...branch, distance: dist.toFixed(2) }; // 👈 bonus
            }
        });

        res.json(nearest);

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;