// config/db.js
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/shop", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(" MongoDB connected successfully");
  } catch (err) {
    console.error(" DB connection error:", err);
    process.exit(1);
  }
};

// ✅ Export as a function
module.exports = connectDB;
