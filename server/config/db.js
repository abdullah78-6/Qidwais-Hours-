import mongoose from "mongoose";
export const databaseconnection=async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("data base is sucessfully connected ");
    } catch (error) {
        console.log("database error ","  ",error);
        
    }

}