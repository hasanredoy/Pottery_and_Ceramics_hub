import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";

const SingUp = () => {
  const { createUser } = useContext(AuthContext);

  const handleSingUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((res) => {
        console.log(res.user);
        const createdAt = res.user?.metadata?.creationTime
        
        const user = { email , createdAt };
      
    //  posting by axios
      axios.post('http://localhost:5000/user',user)
      .then(data=> {
        console.log(data.data);
      })



        // posting by normal fetch 
        // fetch(`http://localhost:5000/user`,{
        //    method: "POST",
        //     headers: {
        //       "content-type": "application/json",
        //     },
        //     body: JSON.stringify(user),
        // })
        //   .then((res) => res.json())
        //   .then((data) => {
        //     console.log(data);
        //   });
      })
      .catch((err) => console.log(err));
    console.log(email, password);
  };
  return (
    <div>
      <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleSingUp} className="card-body">
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
              Sing Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SingUp;
