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
        if(!backendemail){
            toast.error("ADMIN LOGIN REQUIRED");
            return ;
        }
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
    return (
        <div className="flex-1 min-h-screen bg-[#F4F1EA] flex justify-center items-center px-6 py-10">

            <form
                onSubmit={Add}
                className="w-full max-w-3xl bg-[#E7DDD1] rounded-3xl shadow-2xl border border-[#CBB8A9] p-10 flex flex-col gap-8"
            >

        
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-[#5C766D] capitalize">
                        add new article
                    </h1>

                    <p className="text-[#5C4F4A] mt-2 text-lg">
                        Write and publish your article easily
                    </p>
                </div>

        
                <div className="flex flex-col gap-3">
                    <label
                        className="text-[#5C4F4A] text-2xl font-semibold capitalize"
                        htmlFor="title"
                    >
                        article title
                    </label>

                    <input
                        onChange={onchangehandler}
                        value={articleinfo.title}
                        type="text"
                        placeholder="Enter article title..."
                        name="title"
                        required
                        className="bg-[#F8F5F0] text-[#5C4F4A] px-5 py-4 rounded-2xl outline-none border-2 border-transparent focus:border-[#C9996B] text-lg transition duration-200"
                    />
                </div>

        
                <div className="flex flex-col gap-3">
                    <label
                        className="text-[#5C4F4A] text-2xl font-semibold capitalize"
                        htmlFor="content"
                    >
                        article content
                    </label>

                    <textarea
                        onChange={onchangehandler}
                        value={articleinfo.content}
                        placeholder="Write your article here..."
                        name="content"
                        required
                        className="bg-[#F8F5F0] text-[#5C4F4A] px-5 py-4 rounded-2xl outline-none border-2 border-transparent focus:border-[#C9996B] text-lg transition duration-200 h-[350px] resize-none"
                    />
                </div>

        
                <div className="flex justify-center mt-2">
                    <button
                        type="submit"
                        className="bg-[#5C766D] hover:bg-[#4B635B] text-white px-10 py-4 rounded-2xl text-xl font-semibold capitalize shadow-lg transition duration-200"
                    >
                        add article
                    </button>
                </div>

            </form>
        </div>
    );

}
export default Add;