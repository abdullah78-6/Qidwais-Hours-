import Loginpopup from "./components/loginpopup/loginpopup";
import Navbar from "./components/navbar/navbar"
import Sidebar from "./components/sidebar/sidebar"
import {useSelector} from "react-redux"
import {Routes,Route} from "react-router-dom"
import Add from "./pages/add/add";
import Dashboard from "./pages/dashboard/dashboard";
import Total from "./pages/totalarticles/total";
function App() {
const url="http://localhost:9000";
const loginstatus=useSelector(state=>state.main.loginstatus);
    return <div>
        <Navbar url={url}/>
        {loginstatus?<Loginpopup url={url}/>:<></>}
        <div className="flex">
        <Sidebar/>
        <Routes>
            <Route path="/" element={<Dashboard/>}></Route>
            <Route path="/add" element={<Add url={url}/>}></Route>
            <Route path="/total" element={<Total url={url}/>}></Route>
        </Routes>
        
        </div>
        
    </div>
}

export default App
