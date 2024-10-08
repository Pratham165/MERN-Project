const mongoose = require('mongoose')
const mongoURI = "mongodb+srv://23010101170:Pratham!65@cluster0.2rk8j.mongodb.net/IMS"

const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(mongoURI);
    console.log("Connected to Mongo Successfully!");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectToMongo;
