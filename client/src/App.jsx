import { useSelector } from "react-redux";
import Display from "./components/display-article/display"
import Footer from "./components/footer/footer";
import Navbar from "./components/navbar/navbar";
import Login from "./components/loginpopup/loginpopup";

function App() {
    const loginstatus=useSelector(state=>state.main.loginstatus);
    const url="http://localhost:9000";
    return <div>
        <Navbar url={url}/>
        {loginstatus?<Login url={url}/>:<></>}
        <Display url={url}/>
        <Footer url={url}/>
    </div>
}

export default App
