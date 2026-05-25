import {useSelector,useDispatch} from "react-redux"
import { control } from "../../redux/slice";
import toast from "react-hot-toast"
import axios from "axios"
const Footer=({url})=>{
    const subscriber=useSelector(state=>state.main.subscriber);
    const dispatch=useDispatch();
    const Onchangehandler=(event)=>{
        dispatch(control.setsubscriber({
            name:event.target.name,
            value:event.target.value
        }))
        

    }
    const Submit=async(e)=>{
        e.preventDefault();
        const newurl=url+"/api/admin/subs";
        const response=await axios.post(newurl,subscriber,{
            withCredentials:true
        })
        if(response.data.status){
            toast.success(response.data.message);
        }
        else{
            toast.error(response.data.message);

        }
        
    }
    return <div className="font-semibold">
        <h1>subscribe to get notification on mail </h1>
        <form onSubmit={Submit}>
        <label htmlFor="email">email</label>
        <input onChange={Onchangehandler} value={subscriber.email} name="email"  className="border-2 p-3 rounded-2xl text-xl" type="email"placeholder="enter-email" required/>
        <button className="bg-black text-white p-2 rounded-2xl text-xl  ">subscribe</button>
        </form>
    </div>

}
export default Footer;