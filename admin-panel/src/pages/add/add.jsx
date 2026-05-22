import { useDispatch,useSelector } from "react-redux";
import { control } from "../../redux/slice";
import toast from "react-hot-toast"
import axios from "axios"
const Add=({url})=>{
    const dispatch=useDispatch();
    const articleinfo=useSelector(state=>state.main.addarticle);
    const backendemail=useSelector(state=>state.main.backendemail);
    const onchangehandler=(event)=>{
        dispatch(control.setarticle({
            name:event.target.name,
            value:event.target.value

        }))
    }
    const Add=async(e)=>{
        const newurl=url+"/api/admin/add";
        e.preventDefault();
        // if(!backendemail){
        //     toast.error("ADMIN LOGIN REQUIRED");
        //     return ;
        // }
        const response=await axios.post(newurl,articleinfo,{
            withCredentials:true
        });
        if(response.data.status){
            toast.success(response.data.message);
        }
        else{
            toast.error(response.data.message);

        }
    
        
        
    }
    return <div className="flex justify-center items-center">
        <form onSubmit={Add} className=" bg-[#5C766D] w-[90%] max-w-md rounded-3xl p-8 shadow-2xl flex  flex-col justify-center items-center gap-6  font-semibold mt-30  ">
              <div className="flex justify-between items-center w-full">
                            
                            </div>
                            <div className="flex flex-col gap-2 w-full">
            
                            <label className="text-[#EDE9E6] text-2xl capitalize" htmlFor="title">enter-title</label>
                            <input onChange={onchangehandler} value={articleinfo.title} className="bg-[#EDE9E6] text-[#5C4F4A] px-4 py-3 rounded-xl outline-none border-2 border-transparent focus:border-[#C9996B] transition duration-200" type="text"placeholder="enter-title" name="title" required/>
                            </div>
            
                            <div className="flex flex-col gap-2 w-full">
            
                            <label className="text-[#EDE9E6]" htmlFor="password">write-article</label>
                            <textarea onChange={onchangehandler} value={articleinfo.content} className="bg-[#EDE9E6] text-[#5C4F4A] px-4 py-3 rounded-xl outline-none border-2 border-transparent focus:border-[#C9996B] transition duration-200" placeholder="enter article content"name="content" >

                            </textarea>
                            </div>
                            <div>
                                <button className="bg-red-700 p-2 hover:bg-red-900  transition ease-in-out duration-150 text-white rounded-2xl text-xl capitalize">add article</button>
                            </div>
        </form>

    </div>

}
export default Add;