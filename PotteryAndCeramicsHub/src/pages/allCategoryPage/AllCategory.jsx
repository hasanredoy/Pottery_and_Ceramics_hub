import { useLoaderData,Link } from "react-router-dom";

const AllCategory = () => {
  const allCategory = useLoaderData()
  console.log(allCategory);

  const handleViewDetails= (id)=>{

  }
  return (
    <div>
      <div className="overflow-x-auto font min-h-[500px] bg-white  ">
  <table className="table font">
    {/* head */}
    <thead >
      <tr>
        <th></th>
        <th className=" border-2 border-t-0 font-semibold text-lg" > Item Name</th>
        <th className=" border-2 border-t-0 font-semibold text-lg"> Subcategory</th>
        <th className=" border-2 border-t-0 font-semibold text-lg"> Rating</th>
        <th className=" border-2 border-t-0 font-semibold text-lg"> Customization</th>
        
      </tr>
    </thead>
   {allCategory.map((category, index) =>  <tbody>
      {/* row 1 */}
      <tr className="hover border-2">
        <th className="border-2" >{index+1}</th>
        <td className="border-2" >{category.item_name}</td>
        <td className="border-2" >{category.subcategory}</td>
        <td className="border-2" >{category.rating}</td>
        <td className="border-2" >{category.customization}</td>
      
        <Link to={`/allArtAndCraftItems/${category._id}`}> <td className="border-2 btn" >View Details</td></Link>
        
      

      </tr>
   
    </tbody>)}
  </table>
</div>
    </div>
  );
};

export default AllCategory;