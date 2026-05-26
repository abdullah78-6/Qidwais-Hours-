import express from "express"
import { adminlogin, adminregister, getProfile, Logout } from "../controllers/user-auth.js";
const userauthrouter=express.Router();
userauthrouter.post("/sigin",adminlogin)
userauthrouter.post("/sigup",adminregister);
userauthrouter.get("/pr",getProfile);
userauthrouter.post("/out",Logout);
export default userauthrouter;