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
const Getarticle=async(req,res)=>{
    try {
        const products=await articlemodel.find({});
        res.json({status:true,ans:products});
        console.log(products);
        
    } catch (error) {
        console.log(error);
        res.json({status:false,message:"GET ITEM ERROR "});
        
    }

}
const deletearticle=async(req,res)=>{
    try {
            const fproduct=await articlemodel.findById(req.body.id);
          if(!fproduct){
        return  res.json({status:false,message:"Article NOT FOUND"});
    
            }
            
            
            await articlemodel.findByIdAndDelete(req.body.id);
             res.json({status:true,message:"DATA DELETED SUCESSFULLY "});
            
        } catch (error) {
            console.log("delete error",error);
             res.json({status:false,message:"DATA DELETE ERROR"});
            
        }
    
    }


export {Add,Getarticle,deletearticle}