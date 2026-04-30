const { MongoClient } = require("mongodb");

const url = "mongodb+srv://pulkitc009_db_user:yQvTz0jydvcx5shR@cluster0.vpevs2w.mongodb.net/gymDB";

const client = new MongoClient(url);

let db;

async function connectDB() {
    try {
        await client.connect();
        db = client.db("gymDB");
        console.log("MongoDB connected");
    } catch (err) {
        console.error(err);
    }
}

function getDB() {
    return db;
}

module.exports = { connectDB, getDB };