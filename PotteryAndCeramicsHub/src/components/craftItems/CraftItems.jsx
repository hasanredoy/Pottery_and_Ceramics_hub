import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { FaRegCalendarCheck } from "react-icons/fa";


const CraftItems = () => {
  const [craft, setCraft] = useState([]);
  useEffect(() => {
    
    fetch("https://pottery-and-ceramics-hub.vercel.app/craftItem")
      .then((res) => res.json())
      .then((data) => setCraft(data || ""));
  }, []);
  console.log(craft);
  return (
    <div className=" my-10 bg-slate-50 p-5">
      {/* text part  */}
      <div>
        <h1 className=" font-bold text-xl md:text-3xl text-center">
          Checkout Our Craft Items
        </h1>
      </div>

      {/* card section  */}
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8 mt-14 ">
        {craft.map((singleCraft) => (
          <div
            key={singleCraft._id}
            className="card card-side bg-purple-100 shadow-xl flex flex-col lg:flex-row max-h-[700px] lg:max-h-96"
          >
            <figure className=" min-w-[40%] mx-auto w-[80%] lg:max-w-[40%] h-full">
              <img
                className="  h-full rounded-l-none rounded-md  lg:rounded-l-md rounded-r-md lg:rounded-r-none "
                src={singleCraft.image_url || ""}
                alt="Movie"
              />
            </figure>
            <div className="ml-2 mt-3 p-3 space-y-3 ">
              <h2 className="text-xl md:text-2xl font-bold ">
                {singleCraft.name || ""}
              </h2>
              <p>
                {singleCraft.description.slice(0, 80) || ""} 
                <Link
                  to={`/craftItem/${singleCraft._id}`}
                  className=" text-blue-600 font-semibold"
                >
                  Read More...
                </Link>
              </p>
              <div className=" py-5 space-y-3 ">
                <h4 className=" flex gap-2 font-semibold text-lg ">
                  Year Of Creation :  {singleCraft.made_year || ""} 
                   {' '} <span>
                    <FaRegCalendarCheck className=" text-2xl text-gray-400"></FaRegCalendarCheck>
                  </span> 
                 
                </h4>
                <h4 className=" flex gap-2 font-semibold text-lg ">
                  Rating : {singleCraft.rating || ""} 
                  <span>
                    <FaRegStarHalfStroke className=" text-2xl text-orange-400"></FaRegStarHalfStroke>
                  </span> 
                  Out Of 5
                </h4>
              </div>
              <div className="card-actions justify-center">
                <Link to={`/craftItem/${singleCraft._id}`}>
                  <button className="btn btn-accent ">View Details</button> 
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CraftItems;
