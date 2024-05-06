import { useEffect, useState } from "react";
 import { FaStar } from "react-icons/fa6";

const Review = () => {
  const [ client , setClient] = useState([])
  const [sliceClient , setSliceClient] = useState(6)
  useEffect(()=>{
    fetch('https://pottery-and-ceramics-hub.vercel.app/review')
    .then(res => res.json())
    .then(data => {
      setClient(data);
    })
  },[])
  return (
    <div>
      <div>
        <h1 className=" text-3xl font-bold text-gray-500 text-center py-10"> Hear What Our Customers Have to Say!</h1>
      </div>
<div className="divider"></div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
         {
          client.slice(0 , sliceClient).map((singleClient , index) => <div key={singleClient._id} 
          className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden bg-gray-200 rounded-lg shadow-md  text-black">
          <div className="flex space-x-4">
            <img alt="" src={singleClient.image } className="object-cover w-16 h-16 rounded-full shadow  " />
            <div className="flex flex-col space-y-1">
              <a rel="noopener noreferrer" href="#" className="text-xl font-semibold">{singleClient.name}</a>
              <div>
              <span className="text-base font-medium text-gray-900">{index ==0 &&" 20/04/2024"}</span>
              <span className="text-base font-medium text-gray-900">{index ==1 &&" 15/03/2024"}</span>
              <span className="text-base font-medium text-gray-900">{index ==2 &&" 30/02/2024"}</span>
              <span className="text-base font-medium text-gray-900">{index ==3 &&" 20/01/2024"}</span>
              <span className="text-base font-medium text-gray-900">{index ==4 &&" 25/12/2023"}</span>
              <span className="text-base font-medium text-gray-900">{index ==5 &&" 23/11/2023"}</span>
              <span className="text-base font-medium text-gray-900">{index ==6 &&" 20/11/2023"}</span>
              <span className="text-base font-medium text-gray-900">{index ==7 &&" 10/10/2023"}</span>
              <span className="text-base font-medium text-gray-900">{index ==8 &&" 20/09/2023"}</span>
              <span className="text-base font-medium text-gray-900">{index ==9 &&" 01/09/2023"}</span>
              <span className="text-base font-medium text-gray-900">{index ==10&&" 10/08/2023"}</span>
              <span className="text-base font-medium text-gray-900">{index ==11&&" 01/08/2023"}</span>
              </div>
            </div>
          </div>
          <div className="divider"></div>
          <div>
            
            <h2 className="mb-1 text-lg font-medium">{singleClient.review}</h2>
            
          </div>
          <div className="flex flex-wrap justify-between">
          
            <div className="flex ">
             <h1 className=" flex text-xl gap-5 items-center">{singleClient.rating} <span className=" text-2xl text-orange-500"><FaStar ></FaStar></span> Out Of 5</h1>
            </div>
          </div>
        </div>)
         }
      </div>
      <div className="flex justify-center">
        {
          sliceClient===6&&
      <button onClick={()=>setSliceClient(12)} className="btn btn-info mx-auto my-5">Load More</button>
        }
      </div>
    </div>
  );
};

export default Review;