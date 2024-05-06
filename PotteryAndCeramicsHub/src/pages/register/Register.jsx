import { useContext, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { AuthContext } from "../../components/authProvider/AuthProvider";

import { FaEye } from "react-icons/fa6";
import { FaEyeSlash} from "react-icons/fa6";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from "firebase/auth";

const Register = () => {
  const {register} = useContext(AuthContext)
  const [eye , setEey] = useState(true)
  const navigate = useNavigate()
const    handleRegister = (e) => {

  e.preventDefault();
  const form = e.target;
  const name = form.name.value;
  const photo = form.photo.value;
  const email = form.email.value;
  const password = form.password.value;
  const user = {name,photo,email , password}
 if(password.length < 6){
   toast.error("Password Should Be 6 Character or More")
   return
 }
 if(!/[A-Z][a-z]/.test(password)){
  toast.error('Password Must Have Contain One Uppercase And One Lowercase Latter')
  return
 }

  console.log(user);
  register(email , password)
  .then(res => {
    console.log(res.user);
    updateProfile(res.user , {
      displayName: name,
      photoURL : photo
    })
    toast.success('Registered Successfully')
    setTimeout(()=>{
      navigate('/login')
    },1000)
  })
  .catch(err => {
    console.log(err);
    toast.error('Please Check Email And Password And Try Again')
  })
};
return (
  <div className=" bg-gradient-to-t from-fuchsia-200 via-green-50 to-zinc-100
   min-h-screen w-full flex justify-center items-center py-5 ">
    <div className="card shrink-0 shadow-2xl  w-full h-full  lg:w-1/2 bg-teal-200">
      <form onSubmit={handleRegister} className="card-body">
        {/* name */}
        <div className="form-control">
          <label className="label">
            <span className="text-xl font-semibold">You&apos;re Full Name</span>
          </label>
          <input
            type="text"
            placeholder="You're Full Name"
            className="input input-bordered bg-white "
            required
            name="name"
          />
        </div>
        {/* Photo */}
        <div className="form-control">
          <label className="label">
            <span className="text-xl font-semibold">Photo URL</span>
          </label>
          <input
            type="url"
            placeholder="Photo URL"
            className="input input-bordered bg-white"
            required
            name="photo"
          />
        </div>
        {/* email */}
        <div className="form-control">
          <label className="label">
            <span className="text-xl font-semibold">You&apos;re Email</span>
          </label>
          <input
            type="Email"
            placeholder="Email"
            className="input input-bordered bg-white"
            required
            name="email"
          />
        </div>
        {/* pass */}
        <div className="form-control relative">
          <label className="label">
            <span className="text-xl font-semibold">Password</span>
          </label>
          <input
        
            type={eye?"password":"text"}
            placeholder="Password"
            className="input input-bordered  bg-white"
            required
            name="password"
          />
          {
            eye?
            <span onClick={()=>setEey(!eye)} className=" text-2xl absolute top-14 right-4"><FaEye></FaEye></span>
            :
            <span onClick={()=>setEey(!eye)} className=" text-2xl absolute top-14 right-4"><FaEyeSlash></FaEyeSlash></span>
          }
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-success">
            Register
          </button>
        </div>
      </form>
      <p className=" text-center pb-3 font-semibold">Already have an account ! <Link to={'/login'} className=" text-blue-700 font-bold">Login.</Link></p>
    </div>
    <ToastContainer></ToastContainer>
  </div>
);
};

export default Register;