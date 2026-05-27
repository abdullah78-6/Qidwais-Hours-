import jwt from "jsonwebtoken";
const authmiddleware=(req,res,next)=>{
    const token=req.cookies.token;
    if(!token){
        return res.json({status:false,message:"NOT AUTHORIZED LOGIN AGAIN "});
    }
    try {
        const tokendecode=jwt.verify(token,process.env.JWT_SECRET);
        if(!req.body){
            req.body={};
        }
        req.body.userid=tokendecode.id;
        next();
        
    } catch (error) {
        console.log("middleware error ",error);
        res.json({status:false,message:"middleware error "});


        
    }

}
export default authmiddleware;