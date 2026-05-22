import articlemodel from "../models/article-model.js";
const Add=async(req,res)=>{
    const {title,content}=req.body;
    try {
        const newarticlemodel=new articlemodel({
           title: title,
            article:content,
            likes:0
        })
        const result=await newarticlemodel.save();
        if(result){
            res.json({status:true,message:"ADD SUCESSFULLY"});

        }
        else{
            res.json({status:false,message:"NOT ADD SUCESSFULLY"});

        }
    } catch (error) {
        res.json({status:false,message:"SERVER ERROR"});
        console.log("add article error ",error);
        
    }

}
export {Add}