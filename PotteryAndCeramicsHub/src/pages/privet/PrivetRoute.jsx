import { useContext } from "react";
import { Navigate , useLocation} from "react-router-dom";
import { AuthContext } from "../../components/authProvider/AuthProvider";

const PrivetRoute = ({children}) => {

  const location = useLocation()
  const {user , loading}=useContext(AuthContext)
  console.log(user, loading);
  if(loading)return <span className="loading loading-bars loading-lg text-center h-screen flex justify-center items-center mx-auto"></span>
  console.log(location);
  if(user){
    return children
  }
  return (
    <Navigate state={location.pathname} to={'/login'}></Navigate>
  );
};

export default PrivetRoute;