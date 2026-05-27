import { useSelector } from "react-redux";
import Display from "./components/display-article/display"
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import Login from "./components/loginpopup/loginpopup";
import Detail from "./pages/details/details";
import { Outlet } from "react-router-dom";
function App() {
    const loginstatus=useSelector(state=>state.main.loginstatus);
    const url="http://localhost:9000";
    return <div>
        <Navbar url={url}/>
        {loginstatus?<Login url={url}/>:<></>}
        <Outlet/>
     
        <Footer url={url}/>
    </div>
}

export default App
