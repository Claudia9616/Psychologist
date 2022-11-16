require("dotenv").config();

const config = {
  env: process.env.NODE_ENV || "dev",
  MONGODB_CNN: process.env.MONGODB_CNN,
  TOP_SECRET: process.env.TOP_SECRET,
};

module.exports = { config };
