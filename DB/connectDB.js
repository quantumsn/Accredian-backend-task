const mongoose = require("mongoose");

const dbUrl = process.env.ATLASDB_URL;

async function connectDB() {
  try {
    await mongoose.connect(dbUrl);
    console.log("Connected to DB");
  } catch (err) {
    console.error("Error connecting to DB", err);
  }
}

module.exports = connectDB;
