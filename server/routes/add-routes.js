import express from "express"
import { Add } from "../controllers/add-article.js";
const addrouter=express.Router();
addrouter.post("/add",Add);
export default addrouter;