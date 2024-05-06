import { FaRegCalendarCheck, FaRegStarHalfStroke } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";

const DetailsOfCraftItem = () => {
  const craft = useLoaderData();
  console.log(craft);
  return (
    <div className=" bg-purple-100 shadow-xl flex flex-col lg:flex-row-reverse my-10 p-10 min-h-screen border ">
      <figure className=" w-[98%] lg:w-[50%] mx-auto h-full">
        <img
          className=" rounded-md "
          src={craft.image_url || ""}
          alt="Movie"
        />
      </figure>
      <div className=" w-full lg:w-[50%] ml-2 mt-3 p-3 space-y-3 ">
        <h2 className="text-xl md:text-2xl font-bold ">{craft.name || ""}</h2>
        <p>
          {craft.description|| ""}
         
        </p>
        <div className=" py-5 space-y-3 ">
                <h4 className=" flex gap-2 font-semibold text-lg ">
                  Year Of Creation :  {craft.made_year || ""} 
                   {' '} <span>
                    <FaRegCalendarCheck className=" text-2xl text-gray-400"></FaRegCalendarCheck>
                  </span> 
                 
                </h4>
                <h4 className=" flex gap-2 font-semibold text-lg ">
                  Rating : {craft.rating || ""} 
                  <span>
                    <FaRegStarHalfStroke className=" text-2xl text-orange-400"></FaRegStarHalfStroke>
                  </span> 
                  Out Of 5
                </h4>
              </div>
        <div className=" py-5 space-y-3 ">
                <h4 className=" flex gap-2 font-semibold text-lg ">
                  Category :  {craft.category || ""} 
                  
                </h4>
                <h4 className=" flex gap-2 font-semibold text-lg ">
                  Origin : {craft.origin || ""} 
                 
                </h4>
              </div>
        <div className="card-actions justify-center">
          <Link to={`/`}>
            <button className="btn btn-accent ">Home</button> 
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetailsOfCraftItem;
