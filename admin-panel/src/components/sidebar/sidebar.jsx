import { Link } from "react-router-dom";

const Sidebar=()=>{
    return (
  <div className=" hidden xl:bg-[#5C4F4A] xl:text-[#EDE9E6] xl:font-semibold xl:capitalize xl:overflow-y-auto xl:py-10 xl:w-64 xl:flex-shrink-0 xl:px-6 xl:flex xl:flex-col xl:items-center xl:shadow-2xl xl:min-h-screen           md:bg-[#5C4F4A] md:text-[#EDE9E6] md:font-semibold md:capitalize md:overflow-y-auto md:py-10 md:w-64 md:flex-shrink-0 md:px-6 md:flex md:flex-col md:items-center md:shadow-2xl md:min-h-screen                     lg:bg-[#5C4F4A] lg:text-[#EDE9E6] lg:font-semibold lg:capitalize lg:overflow-y-auto lg:py-10 lg:w-64 lg:flex-shrink-0 lg:px-6 lg:flex lg:flex-col lg:items-center lg:shadow-2xl lg:min-h-screen">
    
    <div className="flex flex-col gap-20 text-lg capitalize justify-center items-center">
      
      <p>
        <Link
          to="/"
          className="hover:bg-[#C9996B] hover:text-[#5C766D] px-4 py-3 rounded-xl cursor-pointer transition duration-300"
        >
          dashboard
        </Link>
      </p>

      <p>
        <Link
          to="/total"
          className="hover:bg-[#C9996B] hover:text-[#5C766D] px-4 py-3 rounded-xl cursor-pointer transition duration-300"
        >
          total articles
        </Link>
      </p>

      <p>
        <Link
          to="/add"
          className="hover:bg-[#C9996B] hover:text-[#5C766D] px-4 py-3 rounded-xl cursor-pointer transition duration-300"
        >
          add articles
        </Link>
      </p>

    </div>
  </div>
);
}
export default Sidebar;