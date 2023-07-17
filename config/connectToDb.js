const mongoose = require("mongoose");

if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

async function connectToDb() {
  try {
    await mongoose.connect(process.env.MONGO_URI) 
    console.log("You are connected to your database.")
  } catch (err) {
    console.log(err);
  }
}

module.exports = connectToDb;
