import { useLoaderData , useParams ,Link,} from "react-router-dom";
// import { useLoaderData , Link } from "react-router-dom";
import {useContext} from "react"
import {  FaRegStarHalfStroke , FaDollarSign } from "react-icons/fa6";
import { AuthContext } from "../../components/authProvider/AuthProvider";

const Subcategorys = () => {
  const {loading} = useContext(AuthContext)
  const data = useLoaderData()
  const {subcategory}= useParams()
  const lowerSub = subcategory.toLowerCase()
  console.log(data[8].subcategory.trim().toLowerCase() == lowerSub.trim());

  console.log(subcategory);
  const filterSub = data.filter(sub => sub.subcategory.trim().toLowerCase() === lowerSub.trim())
  console.log(filterSub);
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-5'>
      {
        loading&&<span className="loading loading-bars loading-lg text-center h-screen flex justify-center items-center mx-auto"></span>
      }
      {
        filterSub.map(subcategory =>  <div key={subcategory._id} className=" bg-purple-100 shadow-xl flex flex-col  my-10 p-10 border gap-10 ">
        <figure className=" w-[98%]  mx-auto h-full">
          <img
            className=" rounded-md w-full "
            src={subcategory.photoURL || ""}
            alt="Movie"
          />
        </figure>
        <div className=" w-full  ml-2 mt-3 p-3 space-y-3 ">
          <h2 className="text-xl md:text-2xl font-bold "> {subcategory.item_name || ""}</h2>
          <p>
            {subcategory.descriprtion|| ""}
           
          </p>
          <div className=" py-5 space-y-4 ">
                  <h4 className=" flex gap-2 font-semibold text-lg ">
                    Subcategory :  
                      <span>
                       {subcategory.subcategory || ""}
                    </span> 
                   
                  </h4>
                  <h4 className=" flex gap-2 font-semibold text-lg ">
                    Rating : {subcategory.rating || ""} 
                    <span>
                      <FaRegStarHalfStroke className=" text-2xl text-orange-400"></FaRegStarHalfStroke>
                    </span> 
                    Out Of 5
                  </h4>
                  <h4 className=" flex gap-2 font-semibold text-lg ">
                    Price :  
                    <span className="text-orange-400">
                      {subcategory.price || ""}
                    </span> 
                      <FaDollarSign className=" text-2xl "></FaDollarSign>
                  
                  </h4>
                  <h4 className=" flex gap-2 font-semibold text-lg ">
                    Customization : 
                    <span>
                      {subcategory.customization || ""} 
                    </span> 
                  
                  </h4>
                  <h4 className=" flex gap-2 font-semibold text-lg ">
                    Proccesing Time : 
                    <span>
                      {subcategory.proccesing_time || ""} 
                    </span> 
                  
                  </h4>
                </div>
    
          <div className="card-actions justify-center">
            <Link to={`/allArtAndCraftItems/${subcategory._id}`}>
              <button className="btn btn-accent ">View Details</button> 
            </Link>
          </div>
        </div>
      </div>)
      }
    </div>
  );
};

export default Subcategorys;