import dotenv from "dotenv"
// import mongoose from "mongoose";
// import { DB } from "./constants";
import connectDB from "./db/index.js";

dotenv.config({
    path:"./env"
})

connectDB().then(()=>{
    app.listen(process.env.PORT || 3000),()=>{
        console.log(`Server is running on port ${process.env.PORT}`);
    }
})
.catch((err)=>{
    console.log("mongo connection fail " , err);
})




// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB}`);
//   } catch (error) {
//     console.log(error);
//     throw error;
//   }
// })();
