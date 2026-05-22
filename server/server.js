import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import "dotenv/config"
import { databaseconnection } from "./config/db.js";
import addrouter from "./routes/add-routes.js";
databaseconnection();
const app=express();
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));
app.use(express.json());
app.use("/api/admin",addrouter);
app.use(cookieParser());
app.get("/",(req,res)=>{
    res.send("SERVER IS WORKING ");

})
const port =process.env.PORT;
app.listen(port,()=>{
    console.log("server is listining on ",`http://localhost:${port}`);

})