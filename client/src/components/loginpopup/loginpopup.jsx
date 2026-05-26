import toast from "react-hot-toast"
import { ImCross } from "react-icons/im";
import { useSelector,useDispatch } from "react-redux";
import { control } from "../../redux/slice";
import axios from "axios"

const Login=({url})=>{
const dispatch=useDispatch();
    const logininfo=useSelector(state=>state.main.logininfo);
    const logintype=useSelector(state=>state.main.logintype);
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
        event.preventDefault();
    let newurl=url;
    if(logintype==="login"){
        
        newurl=newurl+"/api/user/sigin"
        
        
      

    }
    else{
        
        newurl=newurl+"/api/user/sigup"
    }
    try{
        const response=await axios.post(newurl,logininfo,{
            withCredentials:true
        });
    if(response.data.status){
          if(logintype==="login"){
             const res=await axios.get(url+"/api/user/pr",{
            withCredentials:true,
        })
        if(res.data.status){
            dispatch(control.setbackendemail(res.data.email));
        
        }
        else{
            dispatch(control.setbackendemail(""));
        
        }
       
       
          }
        
       
        
        toast.success(response.data.message);
        
    }
    else{
        toast.error(response.data.message);
    }

    }
    catch(err){
        toast.error("SERVER ERROR");

    }
    

        
    }
    
    return <div className=" fixed inset-0 font-semibold capitalize flex justify-center items-center bg-black/20 backdrop-blur-md z-50">

        
            <form onSubmit={Login} className=" bg-[#5C766D] w-[90%] max-w-md rounded-3xl p-8 shadow-2xl flex  flex-col justify-center items-center gap-6 ">
                <div className="flex justify-between items-center w-full">
                <h1 className="span text-3xl text-[#C9996B] capitalize">{logintype}</h1>
                
                
                  <button onClick={Cross} type="button" className="text-red-300 hover:text-red-500 transition duration-200 "><ImCross size={18}/></button>  
                
                </div>
                {logintype==="signup"?
                <div className="flex flex-col gap-2 w-full">
                
                <label className="text-[#EDE9E6]" htmlFor="email">enter-name</label>
                <input  className="bg-[#EDE9E6] text-[#5C4F4A] px-4 py-3 rounded-xl outline-none border-2 border-transparent focus:border-[#C9996B] transition duration-200" type="text"placeholder="enter-name" required onChange={Onchangehandler}  value={logininfo.name} name="name"/>
                </div>:<></>
                }
                <div className="flex flex-col gap-2 w-full">
                
                <label className="text-[#EDE9E6]" htmlFor="email">enter-email</label>
                <input onChange={Onchangehandler}  value={logininfo.email} name="email" className="bg-[#EDE9E6] text-[#5C4F4A] px-4 py-3 rounded-xl outline-none border-2 border-transparent focus:border-[#C9996B] transition duration-200" type="email"placeholder="enter-email" required/>
                </div>

                <div className="flex flex-col gap-2 w-full">

                <label className="text-[#EDE9E6]" htmlFor="password">enter-password</label>
                <input onChange={Onchangehandler}  value={logininfo.password} name="password" className="bg-[#EDE9E6] text-[#5C4F4A] px-4 py-3 rounded-xl outline-none border-2 border-transparent focus:border-[#C9996B] transition duration-200" type="password"placeholder="enter-password" required/>
                </div>
                <div className="flex gap-3 justify-center items-center">
                <h1 className="text-xl capitalize font-semibold text-[#C9996B]">i accepted the given terms and condetion</h1>
                <input className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft" type="checkbox" required/>
                </div>
                <div className="cursor-pointer">
                    {logintype==="login"?<p className="text-xl capitalize font-semibold hover:underline text-[#C9996B]" onClick={()=>dispatch(control.setlogintype("signup"))}>create  a new account</p>:<p className="text-xl capitalize font-semibold text-[#C9996B] hover:underline" onClick={()=>dispatch(control.setlogintype("login"))}>already have an account</p>}
                </div>
                <div>
                    {logintype==="login"?
                    <button   className="bg-red-700 p-2 hover:bg-red-900  transition ease-in-out duration-150 text-white rounded-2xl text-xl capitalize">login</button>:<button   className="bg-red-700 p-2 hover:bg-red-900  transition ease-in-out duration-150 text-white rounded-2xl text-xl capitalize">Signup</button>}
                </div>
            </form>
        
    </div>




}
export default Login;