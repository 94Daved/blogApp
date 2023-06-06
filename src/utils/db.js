import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connect to DB");
  } catch (error) {
    throw new Error("Couldn't connect to Mongo DB");
  }
};
