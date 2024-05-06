import { useLoaderData , Link } from "react-router-dom";
import {  FaRegStarHalfStroke , FaDollarSign } from "react-icons/fa6";

const DetailsOfAllCatagory = () => {
  const craft = useLoaderData()

  return (
    <div className=" bg-purple-100 shadow-xl flex flex-col lg:flex-row my-10 p-10 border gap-10 ">
      <figure className=" w-[98%] lg:w-[50%] mx-auto h-full">
        <img
          className=" rounded-md w-full "
          src={craft.photoURL || ""}
          alt="Movie"
        />
      </figure>
      <div className=" w-full lg:w-[50%] ml-2 mt-3 p-3 space-y-3 ">
        <h2 className="text-xl md:text-2xl font-bold "> {craft.item_name || ""}</h2>
        <p>
          {craft.descriprtion|| ""}
         
        </p>
        <div className=" py-5 space-y-4 ">
                <h4 className=" flex gap-2 font-semibold text-lg ">
                  Subcategory :  
                    <span>
                     {craft.subcategory || ""}
                  </span> 
                 
                </h4>
                <h4 className=" flex gap-2 font-semibold text-lg ">
                  Rating : {craft.rating || ""} 
                  <span>
                    <FaRegStarHalfStroke className=" text-2xl text-orange-400"></FaRegStarHalfStroke>
                  </span> 
                  Out Of 5
                </h4>
                <h4 className=" flex gap-2 font-semibold text-lg ">
                  Price :  
                  <span className="text-orange-400">
                    {craft.price || ""}
                  </span> 
                    <FaDollarSign className=" text-2xl "></FaDollarSign>
                
                </h4>
                <h4 className=" flex gap-2 font-semibold text-lg ">
                  Customization : 
                  <span>
                    {craft.customization || ""} 
                  </span> 
                
                </h4>
                <h4 className=" flex gap-2 font-semibold text-lg ">
                  Proccesing Time : 
                  <span>
                    {craft.proccesing_time || ""} 
                  </span> 
                
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

export default DetailsOfAllCatagory;