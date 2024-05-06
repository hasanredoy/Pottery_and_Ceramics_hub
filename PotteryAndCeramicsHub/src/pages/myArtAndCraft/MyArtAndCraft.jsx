import { useLoaderData , Link } from "react-router-dom";
import { useContext , useState, useEffect } from "react";
import { AuthContext } from "../../components/authProvider/AuthProvider";
import {  FaDollarSign, FaStar } from "react-icons/fa6";
import Swal from 'sweetalert2'

const MyArtAndCraft = () => {
  const {user , loading, setLoading } = useContext(AuthContext)

  const craft = useLoaderData()
  console.log(craft);
  
  const [filterCraft , setFilterCraft] = useState([])
  
  
  const [toggle , setToggle] = useState(true)
  useEffect(()=>{
    const newCraft = craft.filter( craft =>{
      return craft.user_email === user.email
    })
    console.log(craft.user_email , user.email);
    console.log(newCraft);
    setFilterCraft(newCraft)
    
  },[user])
  

  const handleSort = (value)=>{
    if(value==="all"){
      const newFilterCraft = craft.filter(singleCraft => singleCraft.user_email === user.email )
 
      setFilterCraft(newFilterCraft);
      setToggle(false)
    }
    if(value==="yes"){
      const newFilterCraft = craft.filter(singleCraft => singleCraft.user_email === user.email )
  console.log(newFilterCraft);
      const filterByYes = newFilterCraft.filter(art=> art.customization.includes('yes'))
      setFilterCraft(filterByYes);
      setToggle(false)
    }
    if(value==="no"){
      const newFilterCraft = craft.filter(singleCraft => singleCraft.user_email === user.email )
  console.log(newFilterCraft);
      const filterByYes = newFilterCraft.filter(art=> art.customization.includes('no'))
      setFilterCraft(filterByYes);
      setToggle(false)
    }
  }

  const handleDelete = (id)=>{
    Swal.fire({
      title: "Are you sure?",
      text: "You Want Delete ? ",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes"
    }).then((result) => {
      if (result.isConfirmed) {
       fetch(`https://pottery-and-ceramics-hub.vercel.app/allArtAndCraft/${id}`,{
        method:"DELETE"
       })
       .then(res=>res.json())
       .then(data => {
        console.log(data);
        if(data.deletedCount>0){
          Swal.fire({
           title: "Deleted Successfully",
           icon: "success"
         });
        const filterAfterDelete= filterCraft.filter(craft => craft._id !== id)
        console.log(filterAfterDelete);
        //  newCraft( filterAfterDelete)
         setFilterCraft(filterAfterDelete) 
        }
       })
       
      }
    });
  }
  // console.log(newCraft);
  console.log(filterCraft);
  return (
    <div className="flex gap-5 my-14 flex-col lg:flex-row bg-base-100" >
      <div className='mx-auto bg-gray-200 w-full flex flex-col gap-5 justify-center items-center lg:w-[35%] max-h-[700px] rounded-lg  '>
        <h2 className='font-bold text-xl '>My Profile</h2>
        <div className='divider'></div>
        <img className=" w-52  h-52 rounded-md" src={user?.photoURL}/>
        <h2 className="font-bold text-xl py-5">Welcome <span className=" text-blue-600">{user?.displayName}</span></h2>
        <h2 className="font-bold text-base px-2">Email Address: <span className=" text-gray-600 text-lg">{user?.email}</span></h2>
        <h2 className="font-bold text-base px-2">Last Login: <span className=" text-gray-600 text-lg">{user?.metadata?.lastSignInTime}</span></h2>
       
      </div>
      <div>
      <h1 className=" text-3xl text-gray-500 text-center py-5 font-black">My Arts And Crafts</h1>

      <div className='my-3'>
      <details className="dropdown">
  <summary className="m-1 btn">Customize By</summary>
  <ul className="p-2 shadow menu dropdown-content z-[1] bg-gray-500 rounded-box w-52 text-white">
    <li  onClick={()=>handleSort('all')}><a>All </a></li>
    <li onClick={()=>handleSort('yes')}><a>Yes</a></li>
    <li  onClick={()=>handleSort('no')}><a>No</a></li>
  </ul>
</details>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-5">
       {
        loading&&<span className="loading loading-bars loading-lg text-center h-screen flex justify-center items-center mx-auto"></span>
       }
      {
        filterCraft&&filterCraft.map(art => <div key={art._id} className="card card-compact bg-lime-100 shadow-xl">
        <h2 className=" text-2xl font-bold text-center py-5"> {art.Name}</h2>
      <figure className=" w-full md:w-[70%] mx-auto"><img src={art.photoURL} className=" h-60 lg:h-72 w-[70%] lg:w-full" alt="Shoes" /></figure>
      <div className="card-body ">
        <h2 className="card-title text-center font-medium text-2xl"> <span className="font-bold">{art.item_name}</span></h2>
        <div className=" ">
          <h3 className=" flex gap-3 font-semibold items-center   text-lg"> Price: <span className=" text-orange-400">{art.price}</span> <FaDollarSign  ></FaDollarSign></h3>
        </div>
        <div className=" my-2">
          <h3 className=" flex gap-3 font-semibold items-center   text-lg"> Rating : <span className=" text-orange-600">{art.rating}</span> <FaStar  ></FaStar></h3>
        </div>
        <div className=" ">
          <h3 className=" flex gap-3 font-semibold items-center   text-lg">Customization : <span className=" text-purple-600">{art.customization}</span> </h3>
        </div>
        <div className=" my-2">
          <h3 className=" flex gap-3 font-semibold items-center   text-lg"> Status : <span className=" text-yellow-400">{art.stockStatus}</span></h3>
        </div>

        <div className='flex justify-between '>
        <Link to={`/myArtAndCraftUpdate/${art._id}`}><button className="btn btn-success">Update</button></Link>

        <button onClick={()=>handleDelete(art._id)} className="btn btn-warning">Delete</button>
        
        </div>
       
      </div>
    </div>)
      }
      </div>

      </div>
    </div>
  );
};

export default MyArtAndCraft;