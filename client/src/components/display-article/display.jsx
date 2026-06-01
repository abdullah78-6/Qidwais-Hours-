import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import toast from "react-hot-toast"
import axios from "axios"
import { control } from "../../redux/slice";
import {useNavigate} from "react-router-dom";
const Display=({url})=>{
    const dispatch=useDispatch();
    const backendarticles=useSelector(state=>state.main.backendarticles);
    const navigate=useNavigate();
    const FetchArticles=async()=>{
    const response=await axios.get(url+"/api/admin/get",{
            withCredentials:true
        })
        if(response.data.status){
        dispatch(control.setbackendarticles(response.data.ans));
        
            
        }
        else{
            toast.error(response.data.message);
        }

        

    }
    useEffect(()=>{
        
        FetchArticles();
    },[backendarticles]);
    const Setter=(likes,article,id)=>{
        dispatch(control.setarticle(article));
        dispatch(control.setlikes(likes));
        dispatch(control.setid(id));
        navigate("/det");


    }
    return <div className="mt-20 font-semibold" id="display">
        <h1 className="text-center text-3xl capitalize text-[#5C4F4A]">articles list </h1>
        <div className="flex justify-center items-center flex-wrap gap-20 px-2 py-2 ">
            {backendarticles.map((i,index)=>{
                return <div className="text-xl text-[#EDE9E6] capitalize font-semibold mt-3 ml-4 bg-[#5C766D] rounded-3xl p-2  flex justify-center items-center flex-row flex-wrap hover:scale-120 transition ease-in-out duration-300 h-40 w-50 md:h-30 md:w-70     xl:h-30 xl:w-70 lg:h-30 lg:w-70"  key={index} >
                    <div className="flex justify-center items-center  flex-wrap">
                    <h1 className="text-[#EDE9E6] text-center">{i.title}</h1>
                    <button onClick={()=>Setter(i.likes,i.article,i._id)}  className="bg-red-500 hover:bg-red-800 transition ease-in-out duration-150 rounded-3xl text-xl p-2 capitalize w-25 md:w-35 xl:w-45 lg:w-45 mt-5 text-center">details</button>
                    </div>
                </div>
            })}
        </div>
        
    </div>
}
export default Display;