import articlemodel from "../models/article-model.js";
import validator from "validator"
import nodemailer from "nodemailer"
import transporter from "../config/transporter.js";
import subscribemodel from "../models/subscriber-model.js";
import usermodel from "../models/user-authmodel.js";
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
                subject:" 🎉 Subscription Successfull",
                html:`
                <div style="font-family: Arial, sans-serif; background:#f4f4f4; padding:40px;">
                    <div style="max-width:600px; margin:auto; background:white; border-radius:10px; overflow:hidden; box-shadow:0 2px 10px rgba(0,0,0,0.1);">
                        
                        <div style="background:#2563eb; color:white; padding:20px; text-align:center;">
                            <h1>Welcome 🎉</h1>
                        </div>

                        <div style="padding:30px; color:#333;">
                            <h2>Thanks for subscribing!</h2>

                            <p>
                                You will now receive notifications whenever a new article is published.
                            </p>

                            <p>
                                Stay tuned for amazing content 🚀
                            </p>

                            <div style="margin-top:30px; text-align:center;">
                                <a href="#" 
                                   style="background:#2563eb; color:white; padding:12px 20px; text-decoration:none; border-radius:5px;">
                                   Visit Website
                                </a>
                            </div>
                        </div>

                        <div style="background:#f1f1f1; padding:15px; text-align:center; font-size:12px; color:#666;">
                            © 2026 Article Hub. All rights reserved.
                        </div>
                    </div>
                </div>

                `
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
                subject:` 📰 New Article ${title}`,
                html:`
                <div style="font-family: Arial, sans-serif; background:#f4f4f4; padding:40px;">
                        <div style="max-width:650px; margin:auto; background:white; border-radius:10px; overflow:hidden; box-shadow:0 2px 10px rgba(0,0,0,0.1);">
                            
                            <div style="background:#111827; color:white; padding:25px; text-align:center;">
                                <h1>New Article Published 🚀</h1>
                            </div>

                            <div style="padding:30px; color:#333;">
                                <h2 style="color:#2563eb;">${title}</h2>

                                <p style="line-height:1.8;">
                                    ${content.substring(0, 200)}...
                                </p>

                                <div style="margin-top:30px; text-align:center;">
                                    <a href="http://localhost:3000"
                                       style="background:#2563eb; color:white; padding:14px 24px; text-decoration:none; border-radius:6px; font-weight:bold;">
                                       Read Full Article
                                    </a>
                                </div>
                            </div>

                            <div style="background:#f1f1f1; padding:15px; text-align:center; font-size:12px; color:#666;">
                                You're receiving this email because you subscribed to Article Hub.
                            </div>
                        </div>
                    </div>

                `
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
    const Dashboard=async(req,res)=>{
        try {
            const totalsubscriber=await subscribemodel.find({}).countDocuments();
            const totalregester=await usermodel.find({}).countDocuments();
            const totalarticles=await articlemodel.find({}).countDocuments();
            res.json({status:true,articles:totalarticles,regester:totalregester,subscriber:totalsubscriber});
            
        } catch (error) {
            console.log("dashboard error ",error);
            res.json({status:false,message:"dashboard error"});
            
        }
        

    }


export {Add,Getarticle,deletearticle,Subscribe,Dashboard}