import {Link} from "react-router-dom"
import {useSelector,useDispatch} from "react-redux"
import { control } from "../../redux/slice";
import { useEffect, useState } from "react";
import axios from "axios"
import toast from "react-hot-toast"
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
const Navbar=({url})=>{
    const dispatch=useDispatch();
const backendemail=useSelector(state=>state.main.backendemail);
const [mnav,setmnav]=useState(false);
 useEffect(()=>{
        const fetchuser=async()=>{
            try {
                const res=await axios.get(url+"/api/user/pr",{
                    withCredentials:true
                })
                if(res.data.status){
                    dispatch(control.setbackendemail(res.data.email));
                    
                }
                else{
                    dispatch(control.setbackendemail(""));
                    
                }
            } catch (error) {
                dispatch(control.setbackendemail(""));
                
                
            }
        };
        fetchuser();

    },[]);

const activateloginpopup=()=>{
    dispatch(control.setlogin(true));

}
const logout=async()=>{
                const response=await axios.post(url+"/api/user/out",{},{
            withCredentials:true
        });
        if(response.data.status){
            dispatch(control.setbackendemail(""));
            dispatch(control.setuserlikestatus(false));
            
        toast.success(response.data.message);

        }
        else{
            toast.error(response.data.message);
        }



    }

    return <div className="flex justify-between py-3 px-3 capitalize font-semibold background">
        <Link to="/" className="text-2xl capitalize text-white ">qidwai-<span className="span">hour</span></Link>
        <ul className=" hidden xl:flex xl:justify-center xl:items-center xl:gap-8 xl:font-semibold xl:capitalize xl:text-xl xl:text-[#C9996B] xl:cursor-pointer       lg:flex lg:justify-center lg:items-center lg:gap-8 lg:font-semibold lg:capitalize lg:text-xl lg:text-[#C9996B] lg:cursor-pointer          md:flex md:justify-center md:items-center md:gap-8 md:font-semibold md:capitalize md:text-xl md:text-[#C9996B] md:cursor-pointer ">
                <Link to="/" className="hover:underline">home</Link>
                <a href="#display" className="hover:underline">articles</a>
                <a href="#subscribe" className="hover:underline">Subscribe</a>
                
            </ul>
        <div className="flex justify-center items-center gap-4">
            
            <div className="hidden xl:flex md:flex lg:flex" >
         {!backendemail?<button  onClick={activateloginpopup} className="span btn p-2 capitalize rounded-2xl transition duration-150 ease-in-out">login</button>:<button className="bg-[#C9996B] p-3 rounded-3xl capitalize font-semibold text-[#5C766D] hover:bg-pink-700 hover:text-[#EDE9E6] transition ease-in-out duration-150" onClick={logout}>logout</button>}
            </div>
            <div className="md:hidden xl:hidden lg:hidden ">
                {!mnav?<button><GiHamburgerMenu className="text-2xl text-[#C9996B]" onClick={()=>setmnav(true)} /></button>:<button><ImCross className="text-2xl text-red-800 hover:text-red-900 transition ease-in-out duration-150" onClick={()=>setmnav(false)} /></button>}
            </div>
            <div className="hidden md:text-[#5C766D] md:flex md:items-center md:justify-between    lg:text-[#5C766D] lg:flex lg:items-center lg:justify-between     xl:text-[#5C766D] xl:flex xl:items-center xl:justify-between ">
             {backendemail?<h1 className="uppercase rounded-4xl  p-3  text-center  text-sm bg-[#EDE9E6] hover:bg-[#C9996B] hover:text-[#EDE9E6] transition ease-in-out duration-150">{backendemail.slice(0,1)}</h1>:<></>}

            </div>
        </div>




 
  
<div
  className={`absolute top-20 left-0 w-full px-4 md:hidden lg:hidden xl:hidden transition-all duration-500 ease-in-out z-50 font-semibold ${
    mnav
      ? "opacity-100 translate-y-0 visible"
      : "opacity-0 -translate-y-10 invisible"
  }`}
>
  <div className="background border border-[#C9996B]/30 rounded-3xl shadow-2xl backdrop-blur-lg p-6">

    <ul className="flex flex-col gap-5 text-center text-[#EDE9E6] text-lg font-semibold capitalize">

      <Link to="/" className="py-3 rounded-2xl hover:bg-[#C9996B] hover:text-[#5C766D] transition duration-300 cursor-pointer">
        home
      </Link>

      <a href="#display" className="py-3 rounded-2xl hover:bg-[#C9996B] hover:text-[#5C766D] transition duration-300 cursor-pointer">
        articles
      </a>

      <a href="#subscribe" className="py-3 rounded-2xl hover:bg-[#C9996B] hover:text-[#5C766D] transition duration-300 cursor-pointer">
        Subscribe
      </a>
    </ul>

    <div className="flex flex-col items-center gap-4 mt-6">

      {!backendemail ? (
        <button
          onClick={activateloginpopup}
          className="w-full bg-[#C9996B] text-[#5C766D] py-3 rounded-2xl font-semibold hover:bg-[#EDE9E6] transition duration-300"
        >
          login
        </button>
      ) : (
        <button
          onClick={logout}
          className="w-full bg-[#C9996B] text-[#5C766D] py-3 rounded-2xl font-semibold hover:bg-pink-700 hover:text-[#EDE9E6] transition duration-300"
        >
          logout
        </button>
      )}

      {backendemail ? (
        <h1 className="uppercase h-12 w-12 flex items-center justify-center rounded-full text-sm font-bold bg-[#EDE9E6] text-[#5C766D] hover:bg-[#C9996B] hover:text-[#EDE9E6] transition duration-300">
          {backendemail.slice(0, 1)}
        </h1>
      ):<></>}
    </div>
  </div>
</div>
    </div>


}
export default Navbar;