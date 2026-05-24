import {useDispatch, useSelector} from "react-redux"
import { control } from "../../redux/slice";
import {Link} from "react-router-dom"
import axios from "axios"
import toast from "react-hot-toast";
import { useEffect } from "react";
const Navbar=({url})=>{
    const dispatch=useDispatch();
    const backendemail=useSelector(state=>state.main.backendemail);
     useEffect(()=>{
        const fetchuser=async()=>{
            try {
                const res=await axios.get(url+"/api/auth/get",{
                    withCredentials:true
                })
                if(res.data.status){
                    dispatch(control.setbackendemail(res.data.email));
                    dispatch(control.setbackendarticles([]));
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
                const response=await axios.post(url+"/api/auth/logout",{},{
            withCredentials:true
        });
        if(response.data.status){
            dispatch(control.setbackendemail(""));
            
        toast.success(response.data.message);

        }
        else{
            toast.error(response.data.message);
        }



    }
    return <div className="flex justify-between py-3 px-3 capitalize font-semibold background">
        <Link to="/" className="text-2xl capitalize text-white ">qidwai-<span className="span">hour</span></Link>
        <div className="flex justify-center items-center gap-4">
            <div>
         {!backendemail?<button onClick={activateloginpopup} className="span btn p-2 capitalize rounded-2xl transition duration-150 ease-in-out">login</button>:<button className="bg-[#C9996B] p-3 rounded-3xl capitalize font-semibold text-[#5C766D] hover:bg-pink-700 hover:text-[#EDE9E6] transition ease-in-out duration-150" onClick={logout}>logout</button>}
            </div>
            <div className="text-[#5C766D] flex items-center justify-between ">
             {backendemail?<h1 className="uppercase rounded-4xl  p-3  text-center  text-sm bg-[#EDE9E6] hover:bg-[#C9996B] hover:text-[#EDE9E6] transition ease-in-out duration-150">{backendemail.slice(0,1)}</h1>:<></>}

            </div>
        </div>
    </div>


}
export default Navbar;