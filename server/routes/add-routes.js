import express from "express"
import { Add, deletearticle, Getarticle, Subscribe } from "../controllers/add-article.js";
const addrouter=express.Router();
addrouter.post("/add",Add);
addrouter.get("/get",Getarticle);
addrouter.delete("/del",deletearticle);
addrouter.post("/subs",Subscribe);
export default addrouter;