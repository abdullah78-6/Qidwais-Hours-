import express from "express";
import { CheckedLikedStatus, Dislike, Like } from "../controllers/like-controller.js";
import authmiddleware from "../middleware/auth.js";
const Likerouter=express.Router();
Likerouter.post("/like",authmiddleware,Like);
Likerouter.post("/dislike",authmiddleware,Dislike);
Likerouter.get("/chk/:articleid",authmiddleware,CheckedLikedStatus);
export default Likerouter;