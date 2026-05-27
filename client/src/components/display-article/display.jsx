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
    return <div>
        <h1>article display</h1>
        <div>
            {backendarticles.map((i,index)=>{
                return <div className="text-xl capitalize font-semibold mt-3 ml-4 bg-amber-500 w-40 flex justify-center items-center flex-col" key={index} >
                    <h1>{i.title}</h1>
                    <button onClick={()=>Setter(i.likes,i.article,i._id)}  className="bg-red-500 rounded-3xl text-xl p-2 capitalize">details</button>
                </div>
            })}
        </div>
        
    </div>
}
export default Display;