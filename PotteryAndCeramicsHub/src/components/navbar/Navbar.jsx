import { useContext, useState } from "react";

import { RiMenuFoldLine } from "react-icons/ri";
import { RiMenuUnfoldLine } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { AuthContext } from "../authProvider/AuthProvider";


// sweet alert 
import Swal from 'sweetalert2'
// import 'sweetalert2/src/sweetalert2.scss'


const Navbar = () => {
  const [menubar, serMenubar] = useState(false);
  const [toggle, setToggle] = useState(null);
  if (toggle % 2 === 0) {
    localStorage.setItem("theme", "light");
  }
  if (toggle % 2 === 1) {
    localStorage.setItem("theme", "night");
  }
  console.log(toggle);
  const storage = localStorage.getItem("theme");
  document.querySelector("html").setAttribute("data-theme", storage);

  // using context 
  const {user , logOut} = useContext(AuthContext)
  console.log(user);

 const handleLogOut = ()=>{
  Swal.fire({
    title: "Are you sure?",
    text: "You Want Log Out ? ",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes"
  }).then((result) => {
    if (result.isConfirmed) {
      logOut()
      .then(res => console.log(res))
      .catch(err => console.log(err))
      Swal.fire({
        title: "Logged Out Successfully",
        icon: "success"
      });
    }
  });
 }
  return (
    <div className="navbar bg-gradient-to-t via-purple-100 to-red-200 from-blue-100">
      <div className="navbar-start gap-2 md:gap-5  flex flex-col-reverse md:flex-row">
       {  user ?
        <div className=" flex items-center gap-3">
          <div data-tip={user?.displayName} className="tooltip tooltip-right tooltip-success avatar ml-0 lg:ml-3">
            <div className="w-10 rounded-full ring ring-success ring-offset-base-100 ring-offset-2">
              <img src={user.photoURL} />
            </div>
          </div>
          <button onClick={handleLogOut} className="btn btn-info">Logout</button>
        </div>
        :
         <div className=" flex gap-2">
        <Link to={'/login'}>
          
          <button className=" px-5 md:px-4  py-2 pt-[6px] lg:pt-[6px] md:py-4 rounded-lg bg-[#4d0926] text-white  text-base   h-9  hover:bg-green-400 ">
            Login
          </button>
        </Link>
       
        <Link to={"/register"}>
          <button className=" px-5 md:px-4 py-2 pt-[6px] md:pt-[6px]  md:py-4 rounded-lg bg-[#512583] text-white  text-base   h-9  hover:bg-green-400 ">
            Register
          </button>
        </Link>
        </div>}
      </div>

      <div className="navbar-center">
        <h1 className="btn btn-ghost text-lg md:text-2xl font-black bg-gradient-to-l from-purple-600  via-fuchsia-400 to-sky-600  bg-clip-text text-transparent max-w-[200px] md:max-w-full h-full">
          Pottery & Ceramic Hub
        </h1>
      </div>

      <div className="navbar-end relative mr-2 md:mr-5 flex flex-col-reverse md:flex-row gap-2 justify-end items-center md:gap-5 text-black">
        {/* theme controller  */}
        <div
          className="tooltip tooltip-left tooltip-accent"
          data-tip="Click To Change Theme"
        >
          <label className="swap swap-rotate mb-1">
            {/* this hidden checkbox controls the state */}
            <input
              type="checkbox"
              className="theme-controller"
              value="synthwave"
            />

            {/* sun icon */}
            <svg
              onClick={() => setToggle(toggle + 1)}
              className="swap-off fill-current w-6 h-6 md:w-8 md:h-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              onClick={() => setToggle(toggle + 1)}
              className="swap-on fill-current w-6 h-6 md:w-8 md:h-8"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>

        {/* dropdown */}
        <div id="clickable" className="dropdown">
          {menubar ? (
            <button
              onClick={() => serMenubar(!menubar)}
              className="my-anchor-element   text-base md:text-3xl"
            >
              <RiMenuUnfoldLine></RiMenuUnfoldLine>
            </button>
          ) : (
            <button
              onClick={() => serMenubar(!menubar)}
              className=" my-anchor-element text-base md:text-3xl"
            >
              <RiMenuFoldLine></RiMenuFoldLine>
            </button>
          )}
          <div></div>
          {menubar ? (
            <ul
              tabIndex={0}
              className="absolute  -left-40   mt-3 z-[50] p-2 shadow bg-gray-600 text-white rounded-box w-48 space-y-4 flex flex-col justify-center items-center"
            >
              <li className="hover:border w-full hover:bg-slate-50 hover:text-black flex justify-center">
                <NavLink className="" to={"/"}>
                  Home
                </NavLink>
              </li>
              <li className="hover:border w-full hover:bg-slate-50 hover:text-black flex justify-center">
                <NavLink to={"/allArtAndCraftItems"}>
                  All Art & Craft Items
                </NavLink>
              </li>
              <li className="w-full hover:border hover:bg-slate-50 hover:text-black flex justify-center">
                <NavLink to={"/addArtandCraftItem"}>Add Craft Item</NavLink>
              </li>
              <li className="hover:border hover:bg-slate-50 hover:text-black w-full flex justify-center">
                <NavLink to={`/myArtAndCraftItem`}>My Art & Craft List</NavLink>
              </li>
             
             
            </ul>
          ) : (
            ""
          )}
        </div>
        <a className="my-anchor-element" href=""></a>
        <Tooltip anchorSelect=".my-anchor-element" place="top">
          Menu
        </Tooltip>
      </div>
    </div>
  );
};

export default Navbar;
