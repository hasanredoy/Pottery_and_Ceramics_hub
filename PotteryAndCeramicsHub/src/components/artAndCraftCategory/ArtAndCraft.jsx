import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaCalendar, FaDollarSign } from "react-icons/fa6";

const ArtAndCraft = () => {

  const [artAndCraft, setArtAndCraft] = useState([]);
  useEffect(() => {
    // fetch('https://pottery-and-ceramics-hub.vercel.app/craftItem')
    fetch("https://pottery-and-ceramics-hub.vercel.app/artAndCraft")
      .then((res) => res.json())
      .then((data) => setArtAndCraft(data || ""));
  }, []);

  console.log(artAndCraft);
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8 ">
      {
        artAndCraft.map(art=><Link key={art._id} to={`/allArtAndCraft/${art.subcategory}`}><div key={art._id} className="card card-compact bg-lime-100  shadow-xl">
          <h2 className=" text-2xl font-bold text-center py-5"> {art.subcategory}</h2>
        <figure className=" w-full md:w-[70%] mx-auto"><img src={art.image} className=" h-60 lg:h-72 w-full" alt="Shoes" /></figure>
        <div className="card-body ">
          <h2 className="card-title text-center font-bold text-2xl">{art.item_name}</h2>
          <div className=" my-5">
            <h3 className=" flex gap-3 font-semibold items-center   text-lg"> Price: <span className=" text-orange-400">{art.price}</span> <FaDollarSign  ></FaDollarSign></h3>
          </div>
          <div className=" my-5">
            <h3 className=" flex gap-3 font-semibold items-center   text-lg"> Data Of Publish : <span className=" text-orange-400">{art.made_date}</span> <FaCalendar  ></FaCalendar></h3>
          </div>
         
        </div>
      </div></Link>)
      }
    </div>
  );
};

export default ArtAndCraft;