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
    return <div className="font-semibold  ">
        <div className="text-gray-800 font-semibold  px-3 py-6 bg-mist-300 mt-10 flex flex-col flex-wrap  " id="f">
        <div className="flex justify-center md:justify-between lg:justify-between xl:justify-between  items-center     flex-wrap">
        <div className=" text-center mt-2 ">
            <h1 className="text-3xl capitalize text-[#5C766D]">Qidwai-<span className="text-[#C9996B]">hours</span></h1>
            <p className="text-xl text-gray-800 capitalize"> read the latest trends</p>
        </div>
       <div className=" mt-2 text-center capitalize   flex  justify-center items-center">
                <div className="flex justify-center items-center flex-col">
               <h1 className="text-3xl text-[#5C766D] ">current affairs</h1> 
             <p className="text-center">better articles</p>
               <h1>subscribe to get notification on mail </h1>
        <form onSubmit={Submit} className="flex justify-center items-center gap-3">
        <label htmlFor="email" className="text-xl">email</label>
        <input onChange={Onchangehandler} value={subscriber.email} name="email"  className="border-[#5C4F4A] border p-2 rounded-3xl text-xl" type="email"placeholder="enter-email" required/>
        <button className="bg-black text-white p-2 rounded-3xl text-xl capitalize hover:bg-gray-900 transition ease-in-out duration-150  ">subscribe</button>
        </form>
        
               </div>

       
        </div>
        <div className=" mt-2 capitalize text-center">
               <h1 className="text-3xl text-[#5C766D] ">Better understanding</h1> 
               <p className="text-center">clear vision</p>
               
               <p className="text-center">get motivation</p>

       
        </div>
        </div>
        <hr className="mt-5"/>
        <div className="flex justify-center items-center">
            <h1 className="text-center mt-2 text-[#5C766D] capitalize text-sm">© 2026. All rights reserved.</h1>
            </div>
        

    </div>

    </div>
    

}
export default Footer;