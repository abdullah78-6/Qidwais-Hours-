import toast from "react-hot-toast"
import { ImCross } from "react-icons/im";
import { useSelector,useDispatch } from "react-redux";
import { control } from "../../redux/slice";
const Loginpopup=()=>{
    const dispatch=useDispatch();
    const Login=(e)=>{
        e.preventDefault();
        toast.success("FORM SUBMITTED");

    }
    const Cross=()=>{
        dispatch(control.setlogin(false));

    }
    return <div className=" fixed inset-0 font-semibold capitalize flex justify-center items-center bg-black/20 backdrop-blur-md z-50">

        
            <form onSubmit={Login} className=" bg-[#5C766D] w-[90%] max-w-md rounded-3xl p-8 shadow-2xl flex  flex-col justify-center items-center gap-6 ">
                <div className="flex justify-between items-center w-full">
                <h1 className="span text-3xl text-[#C9996B] capitalize">login</h1>
                
                
                  <button onClick={Cross} type="button" className="text-red-300 hover:text-red-500 transition duration-200 "><ImCross size={18}/></button>  
                
                </div>
                <div className="flex flex-col gap-2 w-full">

                <label className="text-[#EDE9E6]" htmlFor="email">enter-email</label>
                <input className="bg-[#EDE9E6] text-[#5C4F4A] px-4 py-3 rounded-xl outline-none border-2 border-transparent focus:border-[#C9996B] transition duration-200" type="email"placeholder="enter-email" required/>
                </div>

                <div className="flex flex-col gap-2 w-full">

                <label className="text-[#EDE9E6]" htmlFor="password">enter-password</label>
                <input className="bg-[#EDE9E6] text-[#5C4F4A] px-4 py-3 rounded-xl outline-none border-2 border-transparent focus:border-[#C9996B] transition duration-200" type="password"placeholder="enter-password" required/>
                </div>
                <div>
                    <button className="bg-red-700 p-2 hover:bg-red-900  transition ease-in-out duration-150 text-white rounded-2xl text-xl capitalize">login</button>
                </div>
            </form>
        
    </div>

}
export default Loginpopup;