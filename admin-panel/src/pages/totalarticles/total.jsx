import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import toast from "react-hot-toast"
import axios from "axios"
import { control } from "../../redux/slice";
const Total=({url})=>{
    const dispatch=useDispatch();
    const backendarticles=useSelector(state=>state.main.backendarticles);
    const backendemail=useSelector(state=>state.main.backendemail);
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
    const Delete=async(id)=>{
        const response=await axios.delete(url+"/api/admin/del",
            {
            
    data:{id},        
            withCredentials:true,
        }
    );
        if(response.data.status){
            toast.error(response.data.message);
        }
        else{
            toast.error(response.data.message);
        }

    }
     
    return <div>
        <div>
         
            <div className="flex justify-center items-center flex-wrap gap-9 ">
                {backendarticles.map((i,index)=>(
                    <div key={index} className="flex justify-center items-center gap-9 flex-col ">
                    <h1>TITLE: {i.title}</h1>
                    
                    <h1>LIKES: {i.likes}</h1>
                    <button onClick={()=>Delete(i._id)} className="bg-red-700 p-3 font-semibold text-white rounded-2xl hover:bg-red-900 transition ease-in-out duration-150">Remove</button>
                    </div>

                ))}
            </div>

        </div>
    </div>

}
export default Total;