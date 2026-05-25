import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import toast from "react-hot-toast"
import axios from "axios"
import { control } from "../../redux/slice";
const Display=({url})=>{
    const dispatch=useDispatch();
    const backendarticles=useSelector(state=>state.main.backendarticles);
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
    return <div>
        <h1>article display</h1>
        <div>
            {backendarticles.map((i,index)=>{
                return <div className="text-xl capitalize font-semibold mt-3 ml-4" key={index}>
                    <h1>{i.title}</h1>
                    <h1>{i.likes}</h1>
                    <h1>{i.article}</h1>
                    </div>
            })}
        </div>
        
    </div>
}
export default Display;