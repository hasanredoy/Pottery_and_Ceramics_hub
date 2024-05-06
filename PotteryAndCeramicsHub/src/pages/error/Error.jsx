 import {Link } from "react-router-dom"
const Error = () => {
  return (
    <div className='h-screen flex flex-col gap-5 justify-center items-center'>
      <h1 className="font-bold text-4xl ">Oops! Page Not Found .</h1>
      <Link to={'/'}><button className='btn btn-error'>Back Home</button></Link>
    </div>
  );
};

export default Error;