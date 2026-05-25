import articlemodel from "../models/article-model.js";
import validator from "validator"
import nodemailer from "nodemailer"
import transporter from "../config/transporter.js";
import subscribemodel from "../models/subscriber-model.js";
const Subscribe=async(req,res)=>{
    const {email}=req.body;
    try {
        if(!email){
            return res.json({status:false,message:"EMAIL IS REQUIRED"});
        }
    if(!validator.isEmail(email)){
        return res.json({status:false,message:"PLEASE ENTER A VALID EMAIL "});
        }
        const existing=await subscribemodel.findOne({email});
        if(existing){
            return res.json({status:false,message:"Already Subscribed"});
        }
            const subscriber=new subscribemodel({email});
            await subscriber.save();
            // nodemailer confirmation email
            const info=await transporter.sendMail({
                from:process.env.USER,
                to:email,
                subject:"Subscription Successfull",
                text:"Thank you for subscribing to our article notifications. "
            });
            console.log("preivew url ",nodemailer.getTestMessageUrl(info));
            res.json({status:true,message:"Subscribed successfully"});
            

            
        }
    
    catch (error) {
        res.json({status:false,message:"SUBSCRIBE ERROR"});
        console.log("subscribe error ",error);
        
    }
}

const Add=async(req,res)=>{
    const {title,content}=req.body;
    try {
        const newarticlemodel=new articlemodel({
           title: title,
            article:content,
            likes:0
        })
        const result=await newarticlemodel.save();
        const subscribers=await subscribemodel.find({});
        const emails=subscribers.map((sub)=>sub.email);
        if(emails.length>0){
            await transporter.sendMail({
                from:process.env.USER,
                bcc:emails,
                subject:`New Article ${title}`,
                text:`A new article has been published the title of the article is ${title}`
            })
        }
        
        res.json({status:true,message:"ADD SUCESSFULLY"});
        
        
        
    } catch (error) {
        res.json({status:false,message:"SERVER ERROR"});
        console.log("add article error ",error);
        
    }

}
const Getarticle=async(req,res)=>{
    try {
        const products=await articlemodel.find({});
        res.json({status:true,ans:products});
        
        
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


export {Add,Getarticle,deletearticle,Subscribe}