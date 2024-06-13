import { Link, useNavigate, useLocation} from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../../components/authProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";



const Login = () => {

  const location = useLocation()


  const [eye, setEey] = useState(true);
  const { login, logInGoogle, logInGitHub } = useContext(AuthContext);

  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = { email, password };
    if (password.length < 6) {
      toast.error("Password Should Be 6 Character or More");
      return;
    }
    if (!/[A-Z][a-z]/.test(password)) {
      toast.error(
        "Password Must Have Contain One Uppercase And One Lowercase Latter"
      );
      return;
    }

    console.log(user);
    login(email, password)
      .then((res) => {
        console.log(res.user);

        console.log(location);
        toast.success("Registered Successfully");
       
        navigate(location?.state?location.state:setTimeout(()=>{
          navigate('/')
        },1000))
      })
      .catch((err) => {
        console.log(err);
        toast.error("Please Check Email And Password And Try Again");
      });
  };


  const handleGoogleLogin = ()=>{
    logInGoogle()
    .then(res => {
      console.log(res);
      toast.success('Logged In With Google Successfully')
      navigate(location?.state?location.state:setTimeout(()=>{
      navigate('/')
    },1000))
    })
    .catch(err => console.log(err))
  }
  const handleGithubLogin = ()=>{
    logInGitHub()
    .then(res => {
      console.log(res);
      toast.success('Logged In WIth Github Successfully')
      navigate(location?.state?location.state:setTimeout(()=>{
        navigate('/')
      },1000))
    })
    .catch(err => console.log(err))
  }
  return (
    <div
      className=" bg-gradient-to-t from-fuchsia-200 via-green-50 to-zinc-100
  w-full flex justify-center items-center py-5 "
    >
      <div className="card shrink-0 shadow-2xl  w-full h-full  lg:w-1/2 bg-indigo-200">
        <h2 className=" font-bold text-3xl text-center pt-4"> Please Login!</h2>
        <form onSubmit={handleLogin} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="text-xl font-semibold">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered bg-white"
              required
              name="email"
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="text-xl font-semibold">Password</span>
            </label>
            <input
              type={eye ? "password" : "text"}
              placeholder="Password"
              className="input input-bordered  bg-white"
              required
              name="password"
            />
            {eye ? (
              <span
                onClick={() => setEey(!eye)}
                className=" text-2xl absolute top-14 right-4"
              >
                <FaEye></FaEye>
              </span>
            ) : (
              <span
                onClick={() => setEey(!eye)}
                className=" text-2xl absolute top-14 right-4"
              >
                <FaEyeSlash></FaEyeSlash>
              </span>
            )}
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-accent">
              Sing In
            </button>
          </div>
        </form>
        <div className="divider">or</div>
        <div className=" flex justify-evenly my-5 ">
          <button onClick={handleGoogleLogin} className="btn btn-outline text-black bg-orange-200">
            Login With <FcGoogle className=" text-2xl"></FcGoogle>{" "}
          </button>
          <button onClick={handleGithubLogin} className="btn btn-outline bg-gray-500 text-black">
            Login With <FaGithub className=" text-2xl"></FaGithub>{" "}
          </button>
        </div>
        <p className=" text-center pb-3 font-semibold">
          New Here !{" "}
          <Link to={"/login"} className=" text-blue-700 font-bold">
            Register.
          </Link>
        </p>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Login;
