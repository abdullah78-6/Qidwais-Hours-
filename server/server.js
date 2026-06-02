import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import "dotenv/config"
import { databaseconnection } from "./config/db.js";
import addrouter from "./routes/add-routes.js";
import adminrouter from "./routes/adminauth-route.js";
import userauthrouter from "./routes/user-auth-routes.js";
import Likerouter from "./routes/like-route.js";
databaseconnection();
const app=express();
app.use(cors({
    origin:[
        "https://qidwais-hours-frontend.onrender.com",
        "https://qidwais-hours-admin.onrender.com"
    ],
    credentials:true
}));
app.use(express.json());
app.use(cookieParser());
app.use("/api/admin",addrouter);
app.use("/api/auth",adminrouter);
app.use("/api/user",userauthrouter);
app.use("/api/res",Likerouter);
app.get("/",(req,res)=>{
    res.send("SERVER IS WORKING ");

})
const port =process.env.PORT;
app.listen(port,()=>{
    console.log("server is listining on ",`http://localhost:${port}`);

})
