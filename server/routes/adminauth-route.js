import express from "express";
import { adminlogin, adminregister, getProfile, Logout } from "../controllers/admin-auth.js";
const adminrouter=express.Router();
adminrouter.post("/login",adminlogin);
adminrouter.post("/signup",adminregister);
adminrouter.post("/logout",Logout);
adminrouter.get("/get",getProfile);
export default adminrouter;