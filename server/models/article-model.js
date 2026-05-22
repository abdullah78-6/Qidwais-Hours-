import mongoose from "mongoose";
const articleschema=mongoose.Schema({
    title:{type:String,required:true},
    article:{type:String,required:true},
    likes:{type:Number},
})
const articlemodel=mongoose.models.article||mongoose.model("Article",articleschema);
export default articlemodel;