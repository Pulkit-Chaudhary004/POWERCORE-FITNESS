const express = require("express");
const cors = require("cors");
const { connectDB } = require("./db");

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
const branchRoutes = require("./routes/branchRoutes");
app.use("/api", branchRoutes);

// start server after DB connection
async function startServer() {
  try {
    await connectDB();

    app.listen(5000, () => {
      console.log("Server running on port 5000");
    });

  } catch (err) {
    console.error(err);
  }
}

startServer();