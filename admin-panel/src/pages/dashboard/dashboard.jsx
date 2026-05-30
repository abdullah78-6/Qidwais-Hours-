import axios from "axios";
import { useEffect } from "react";
import toast from "react-hot-toast"
import {useSelector,useDispatch} from "react-redux"
import { control } from "../../redux/slice";
import {Line,CartesianGrid,XAxis,YAxis,LineChart,ResponsiveContainer,BarChart,Bar, Legend,Pie,PieChart,Tooltip,Cell} from "recharts"
const Dashboard=({url})=>{
    const dispatch=useDispatch();
    const totalsubscriber=useSelector(state=>state.main.totalsubscribers);
    const totalregestred=useSelector(state=>state.main.totalregestred);
    const totalnoarticles=useSelector(state=>state.main.totalnoarticles);
    const Fetchtotal=async()=>{
        const response=await axios.get(url+"/api/admin/total",{
            withCredentials:true,
        })
        if(response.data.status){
            dispatch(control.settotalnoarticles(response.data.articles));
            dispatch(control.settotalregestred(response.data.regester));
            
            dispatch(control.settotalsubscribers(response.data.subscriber));
        }
        else{
            toast(response.data.message);
        }

    }
    useEffect(()=>{
        Fetchtotal();
    },[]);
    const linedata=[
        {
            name:"Subscribers",
            count:totalsubscriber
        },
         {
            name:"Articles",
            count:totalnoarticles,

        },
    ];
    const pieData=[
        {
            name:"Registered Users",
            value:totalregestred,

        },
        {
            name:"Articles",
            value:totalnoarticles,

        },
        
    ];

        

   return (
    <div className="min-h-screen bg-slate-100 p-4 md:p-8 w-full text-[#C9996B] font-semibold">

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#5C766D]">
          Dashboard Overview
        </h1>
        <p className="text-slate-500 mt-1">
          Statistics and analytics summary
        </p>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
          <h3 className="text-slate-500 text-sm font-medium">
            Total Articles
          </h3>
          <p className="text-4xl font-bold mt-3">
            {totalnoarticles}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
          <h3 className="text-slate-500 text-sm font-medium">
            Registered Users
          </h3>
          <p className="text-4xl font-bold mt-3">
            {totalregestred}
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition">
          <h3 className="text-slate-500 text-sm font-medium">
            Subscribers
          </h3>
          <p className="text-4xl font-bold mt-3">
            {totalsubscriber}
          </p>
        </div>
      </div>


      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">

        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-6">
            Subscriber vs Articles
          </h2>

          <div className=" h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={linedata}>
                <CartesianGrid strokeDasharray="3 3"stroke="#EDE9E6" />
                <XAxis dataKey="name" tick={{fill:"#5C4F4A"}} />
                <YAxis tick={{fill:"#5C4F4A"}} />
                <Tooltip />
                <Legend />

                <Line
                  type="monotone"
                  dataKey="count"
                  strokeWidth={4}
                  dot={{ r: 7 ,fill:"#C9996B"}}
                  activeDot={{ r: 10,fill:"#5C766D" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>


        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-6">
            Users vs Articles
          </h2>

          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={120}
                  innerRadius={60}
                  paddingAngle={5}
                  label
                    
                  
                >
                    <Cell fill="#C9996B"/>
                    <Cell fill="#5C766D"/>
                </Pie>


        


                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );

}
export default Dashboard;