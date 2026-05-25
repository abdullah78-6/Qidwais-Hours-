import mongoose from "mongoose"
const subscriberschema=mongoose.Schema({
    email:{type:String},
})
const subscribemodel=mongoose.models.subscriber||mongoose.model("Subscriber",subscriberschema);
export default subscribemodel;