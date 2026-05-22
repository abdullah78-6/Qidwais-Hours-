import {useDispatch, useSelector} from "react-redux"
import { control } from "../../redux/slice";
import {Link} from "react-router-dom"
const Navbar=()=>{
    const dispatch=useDispatch();
    const backendemail=useSelector(state=>state.main.backendemail);
    const activateloginpopup=()=>{
        dispatch(control.setlogin(true));
        

    }
    return <div className="flex justify-between py-3 px-3 capitalize font-semibold background">
        <Link to="/" className="text-2xl capitalize text-white ">qidwai-<span className="span">hour</span></Link>
        <div className="flex justify-center items-center">
            <div>
         {!backendemail?<button onClick={activateloginpopup} className="span btn p-2 capitalize rounded-2xl transition duration-150 ease-in-out">login</button>:<button>logout</button>}
            </div>
            <div>
             {backendemail?<h1>PROFILE IMAGE </h1>:<></>}

            </div>
        </div>
    </div>


}
export default Navbar;