import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import toast from "react-hot-toast";
import axios from "axios";
import { SlLike } from "react-icons/sl";
import { BiSolidDislike } from "react-icons/bi";
import { control } from "../../redux/slice";
const Detail = ({url}) => {
  const id = useSelector(state => state.main.id);
  const article = useSelector(state => state.main.article);
  const likes = useSelector(state => state.main.likes);
  const backendemail=useSelector(state=>state.main.backendemail);
  const userlikestatus=useSelector(state=>state.main.userlikestatus);
  const navigate = useNavigate();
  const dispatch=useDispatch();
  useEffect(() => {
    if (!id) {
      navigate("/");
    }
    localStorage.setItem("articleid",id);
    const checklikestatus = async () => {

    try {

      const response = await axios.get(
        url + "/api/res/chk/" + id,
        {
          withCredentials: true,
        }
      );

      if (response.data.status) {

        dispatch(
          control.setuserlikestatus(
            response.data.liked
          )
        );

      }

    } catch (error) {

      console.log(error);

    }

  };

  
  if (backendemail) {
    checklikestatus();
  }
  }, [id]);
  const Like=async()=>{
    if(!backendemail){
      toast.error("User Login Required");
      return ;
    }
    const response=await axios.post(url+"/api/res/like",
      {id},
      { withCredentials:true}
  );
  if(response.data.status){
    toast.success(response.data.message);
    dispatch(control.setlikes(response.data.likes));
    dispatch(control.setuserlikestatus(true));
  }
  else{
    toast.error(response.data.message);
  }

  }
  const Dislike=async()=>{
    if(!backendemail){
      toast.error("User Login Required");
      return ;
    }
    const response=await axios.post(
      url+"/api/res/dislike",
      {id},
      {withCredentials:true}
    );
    if(response.data.status){
      dispatch(control.setlikes(response.data.likes));
    dispatch(control.setuserlikestatus(false));
    toast.success(response.data.message);
      
    }
    else{
      toast.error(response.data.message);
    }

  }
return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">
        <h1 className="text-4xl font-bold text-center text-[#5C766D] mb-6">
          Article Details
        </h1>

        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
          <h2 className="text-2xl font-bold text-[#C9996B] mb-4">Article</h2>

          
          <div className="prose prose-stone max-w-none text-gray-700 leading-relaxed space-y-4 visual-markdown">
            <ReactMarkdown
              components={{
                h1: ({ node, ...props }) => <h1 className="text-3xl font-extrabold text-gray-900 mt-6 mb-2" {...props} />,
                h2: ({ node, ...props }) => <h2 className="text-2xl font-bold text-gray-800 mt-5 mb-2" {...props} />,
                p: ({ node, ...props }) => <p className="text-lg text-gray-700 mb-4 whitespace-pre-wrap" {...props} />,
              }}
            >
              {article}
            </ReactMarkdown>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <h3 className="text-xl font-medium text-gray-800">
            Likes: <span className="text-blue-600 font-semibold">{likes}</span>
          </h3>
        </div>

        <div className="flex justify-start items-center gap-5 mt-4">
          {userlikestatus ? (
            <BiSolidDislike
              onClick={Dislike}
              className="text-2xl cursor-pointer text-gray-600 hover:text-gray-800 transition"
            />
          ) : (
            <SlLike
              className="text-2xl cursor-pointer text-gray-600 hover:text-blue-600 transition"
              onClick={Like}
            />
          )}
        </div>
      </div>
    </div>
  );

};

export default Detail;