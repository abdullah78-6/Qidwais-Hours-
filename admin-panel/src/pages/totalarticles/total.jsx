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
        if(!backendemail){

            return ;
        }
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
            FetchArticles();
        }
        else{
            toast.error(response.data.message);
        }

    }
     
   return (
  <div className="flex-1 bg-[#F4F1EA] min-h-screen py-10 px-6 overflow-hidden">
    
    <div className="w-full bg-[#E7DDD1] shadow-2xl rounded-3xl p-6 border border-[#CBB8A9]">
      
      
      <ul className="grid grid-cols-4 text-center capitalize font-bold text-2xl text-[#5C766D] pb-4 border-b-2 border-[#B7A89A]">
        <li>serial no</li>
        <li>title</li>
        <li>likes</li>
        <li>delete article</li>
      </ul>


      <div className="h-[500px] overflow-y-auto mt-6 pr-3 flex flex-col gap-5">

        {!backendemail ? (
          <h1 className="text-center text-2xl font-semibold text-red-700 mt-10">
            ADMIN LOGIN REQUIRED
          </h1>

        ) : backendarticles.length === 0 ? (
          <h1 className="text-center text-2xl font-semibold text-[#5C4F4A] mt-10">
            NO ARTICLES IN LIST
          </h1>

        ) : (
          backendarticles.map((i, index) => (
            <div
              key={index}
              className="grid grid-cols-4 items-center text-center bg-[#F8F5F0] p-5 rounded-2xl shadow-md hover:shadow-lg transition duration-200 text-[#5C4F4A] font-semibold text-lg"
            >
              <h1>{index + 1}</h1>

              <h1 className="break-words px-3">
                {i.title}
              </h1>

              <h1>{i.likes}</h1>

              <div className="flex justify-center">
                <button
                  onClick={() => Delete(i._id)}
                  className="bg-red-700 px-5 py-2 text-white rounded-xl hover:bg-red-900 transition duration-150"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  </div>
);
}
export default Total;