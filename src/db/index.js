import mongoose from "mongoose";
import { DB } from "../constants.js";

const connectDB = async () => {
  try {
    const connectInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB}`
    );

    console.log(
      `\n mongo connected !! db host :${connectInstance.connection.host}`
    );
  } catch (error) {
    console.log("mongo error", error);
    process.exit(1);
  }
};


export default connectDB;