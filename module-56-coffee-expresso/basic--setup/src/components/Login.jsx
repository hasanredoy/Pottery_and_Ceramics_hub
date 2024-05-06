import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";

const Login = () => {
        const { singInUser } = useContext(AuthContext);

const handleSingIn = (e) => {
  e.preventDefault();
  const form = e.target;
  const email = form.email.value;
  const password = form.password.value;
  const user = {email , password}
  console.log(user);
  singInUser(email , password)
  .then(res=>{
    console.log(res.user);
    const lastLoggedAt = res.user?.metadata?.lastSignInTime
    const user = {email , lastLoggedAt} 
    // fetch using axios 
    axios.patch('http://localhost:5000/user',user)
    .then(data => {
      console.log(data.data);
    })
    

    // fetch('http://localhost:5000/user',{
    //   method:"PATCH",
    //   headers:{
    //     "content-type":"application/json"
    //   },
    //   body: JSON.stringify(user)
    // })
    //  .then(res => res.json())
    //  .then(data => {
    //   console.log(data);
    //  })  
  })
  .catch(err => console.log(err))
 
};
return (
  <div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSingIn} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            className="input input-bordered"
            required
            name="email"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            className="input input-bordered"
            required
            name="password"
          />
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">
            Sing In
          </button>
        </div>
      </form>
    </div>
  </div>
);
};

export default Login;