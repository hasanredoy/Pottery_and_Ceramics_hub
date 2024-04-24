import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Mangos = () => {
  const mangos = useLoaderData();
  const [mango , setMango]=useState(mangos)
  console.log(mangos);
  const handleDelete = e =>{
     console.log(e); 
     fetch(`http://localhost:5000/mangos/${e}`,{
      method:"DELETE"
     })
     .then(res =>res.json())
     .then(data =>{
      console.log(data);
      if(data.deletedCount > 0){
        alert('deleted')
        const newMango = mango.filter(mang => mang._id !== e)
        console.log(newMango);
        // const mng = [...mango]
        setMango(newMango)
      }
     })
  }
  return (
    <div>
      <h1 className="text-4xl font-bold text-center"> hello mango</h1>
      <div className=" text-center">
        {
          mango.map(mango=><div className="border p-6 m-4 border-gray-700" key={mango._id}>
            <h1>Name:{mango.name}</h1>
            <h3>Email : {mango.email}</h3>
            <Link to={`/mango/${mango._id}`}><button className="btn btn-success
             ">Update</button></Link>
             <button onClick={()=>handleDelete(mango._id)} className="btn btn-error
             ">X</button>
          </div>)
        }
      </div>
    </div>
  );
};

export default Mangos;
