import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const Connection = () => {
  const DB_URL = process.env.DB_URL;
  try {
    mongoose.connect(DB_URL);
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("Error while connecting with the database", error.message);
  }
};
export default Connection;
