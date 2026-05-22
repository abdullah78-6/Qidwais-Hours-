import { Link } from "react-router-dom";

const Sidebar=()=>{
    return <div className="bg-[#5C4F4A] text-[#EDE9E6] font-semibold capitalize  overflow-auto py-10 w-64 px-6 flex flex-col items-center shadow-2xl h-[calc(100vh-64px)] min-h-screen ">
        
        <div>
            <div className=" flex flex-col gap-20 text-lg capitalize justify-center items-center">
                <p>
                <Link to="/" className="hover:bg-[#C9996B] hover:text-[#5C766D] px-4 py-3 rounded-xl cursor-pointer transition duration-300"  >dashboard</Link>
                </p>
                <p>
                <Link to="/total" className="hover:bg-[#C9996B] hover:text-[#5C766D] px-4 py-3 rounded-xl cursor-pointer transition duration-300" >total articles</Link>
                </p>
                <p>
                <Link to="/add"   className="hover:bg-[#C9996B] hover:text-[#5C766D] px-4 py-3 rounded-xl cursor-pointer transition duration-300">add articles</Link>
                </p>
            </div>

        </div>
        
    </div>

}
export default Sidebar;