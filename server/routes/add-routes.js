import express from "express"
import { Add, deletearticle, Getarticle } from "../controllers/add-article.js";
const addrouter=express.Router();
addrouter.post("/add",Add);
addrouter.get("/get",Getarticle);
addrouter.delete("/del",deletearticle);
export default addrouter;