import toast from "react-hot-toast"
import { ImCross } from "react-icons/im";
import { useSelector,useDispatch } from "react-redux";
import { control } from "../../redux/slice";
import axios from "axios"
const Loginpopup=({url})=>{
    const dispatch=useDispatch();
    const logininfo=useSelector(state=>state.main.logininfo);
    
    const Cross=()=>{
        dispatch(control.setlogin(false));

    }
    const Onchangehandler=(event)=>{
        dispatch(control.setlogininfo({
            name:event.target.name,
            value:event.target.value


        }))

    }
    const Login=async(e)=>{
    
        e.preventDefault();
        try {
            const response=await axios.post(url+"/api/auth/login",logininfo,{
            withCredentials:true    
            });
                
            if(!response.data.status){
          toast.error(response.data.message);
            dispatch(control.setbackendemail(response.data.email));
            return ;
            }
            toast.success(response.data.message);
            const res=await axios.get(
                url+"/api/auth/get",
                {withCredentials:true}
            );
            if(res.data.status){
                dispatch(control.setbackendemail(res.data.email));
            }
            else{
                dispatch(control.setbackendemail(""));
                toast.error("AUTHENTICATION FAILED AFTER LOGIN");

            }
         
        } catch (error) {
            console.log(error);
        toast.error("SERVER ERROR");
            dispatch(control.setbackendemail(""));
            
        }
        

    }
    
    return <div className=" fixed inset-0 font-semibold capitalize flex justify-center items-center bg-black/20 backdrop-blur-md z-50">

        
            <form onSubmit={Login} className=" bg-[#5C766D] w-[90%] max-w-md rounded-3xl p-8 shadow-2xl flex  flex-col justify-center items-center gap-6 ">
                <div className="flex justify-between items-center w-full">
                <h1 className="span text-3xl text-[#C9996B] capitalize">login</h1>
                
                
                  <button onClick={Cross} type="button" className="text-red-300 hover:text-red-500 transition duration-200 "><ImCross size={18}/></button>  
                
                </div>
                <div className="flex flex-col gap-2 w-full">

                <label className="text-[#EDE9E6]" htmlFor="email">enter-email</label>
                <input onChange={Onchangehandler}  value={logininfo.email} name="email" className="bg-[#EDE9E6] text-[#5C4F4A] px-4 py-3 rounded-xl outline-none border-2 border-transparent focus:border-[#C9996B] transition duration-200" type="email"placeholder="enter-email" required/>
                </div>

                <div className="flex flex-col gap-2 w-full">

                <label className="text-[#EDE9E6]" htmlFor="password">enter-password</label>
                <input onChange={Onchangehandler}  value={logininfo.password} name="password" className="bg-[#EDE9E6] text-[#5C4F4A] px-4 py-3 rounded-xl outline-none border-2 border-transparent focus:border-[#C9996B] transition duration-200" type="password"placeholder="enter-password" required/>
                </div>
                <div>
                    <button   className="bg-red-700 p-2 hover:bg-red-900  transition ease-in-out duration-150 text-white rounded-2xl text-xl capitalize">login</button>
                </div>
            </form>
        
    </div>

}
export default Loginpopup;