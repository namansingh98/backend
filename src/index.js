import dotenv from "dotenv"
// import mongoose from "mongoose";
// import { DB } from "./constants";
import connectDB from "./db/index.js";

dotenv.config({
    path:"./env"
})

connectDB()




// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB}`);
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// })();
