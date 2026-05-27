import articlemodel from "../models/article-model.js";
import usermodel from "../models/user-authmodel.js";
const Like=async(req,res)=>{
    const {id}=req.body;
    const userid=req.body.userid;
    try {
       const user=await usermodel.findById(userid);
       const alreadyliked=user.likedarticles.includes(id);
       if(alreadyliked){
        return res.json({status:false,message:"Already Liked"});
       } 
     const article=await articlemodel.findByIdAndUpdate(
        id,
        {
            $inc:{
                likes:1,
            },
        },
        {new:true}
     );
     await usermodel.findByIdAndUpdate(userid,{
        $push:{
            likedarticles:id,
        }
     });
      return res.json({
      status: true,
      message: "Liked Successfully",
      likes: article.likes,
      userlikestatus: true,
    });


        

        
    } catch (error) {
        console.log("like error ",error);
        res.json({status:false,message:"Like error "});
        
    }

}
const Dislike=async(req,res)=>{
    const {id}=req.body;
  const userid=req.body.userid;
    try {
       const article = await articlemodel.findByIdAndUpdate(
      id,
      {
        $inc: {
          likes: -1,
        },
      },
      { new: true }
    );

    
    await usermodel.findByIdAndUpdate(userid, {
      $pull: {
        likedarticles: id,
      },
    });

    return res.json({
      status: true,
      message: "Disliked Successfully",
      likes: article.likes,
      userlikestatus: false,
    });
    } catch (error) {
        console.log("dislike error ",error);
        res.json({status:false,message:"DisLike error "});
        
    }


}
const CheckedLikedStatus=async(req,res)=>{
  try {
    const userid=req.body.userid;
    const {articleid}=req.params;
    const user=await usermodel.findById(userid);
    const liked=user.likedarticles.includes(articleid);
    return res.json({status:true,liked});

    
  } catch (error) {
    console.log("checklike error ",error);
    res.json({status:false,liked:false});
    
  }
}
export{Like,Dislike,CheckedLikedStatus}