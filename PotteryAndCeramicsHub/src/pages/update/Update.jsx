import { useContext } from "react";
import {useLoaderData} from "react-router-dom"
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../components/authProvider/AuthProvider";

const Update = () => {
 const carftData = useLoaderData()

const {user} = useContext(AuthContext)
console.log(user);

 const {
_id,photoURL,item_name,subcategory,descriprtion,price,rating,customization, stockStatus,proccesing_time,
} =carftData
console.log(carftData);
  const handleUpdate = e=>{
    e.preventDefault()
    const form = e.target
    const photoURL = form.photo.value
  const item_name = form.itemName.value
  const subcategory = form.subcategory.value
  const descriprtion = form.descriprtion.value
  const price = form.price.value
  const stockStatus = form.stock.value
  const rating = form.rating.value
  const customization = form.customization.value
  const proccesing_time = form.proccesingTime.value
 
  const artAndCraft = {
    photoURL,item_name,subcategory,descriprtion,price,rating,customization, stockStatus,proccesing_time
  }
  
  fetch(`https://pottery-and-ceramics-hub.vercel.app/allArtAndCraft/${_id}`,{
    method:"PUT",
    headers:{
      "content-type":"application/json"
    },
    body: JSON.stringify(artAndCraft)
  
  })
  .then(res=>res.json())
  .then(data =>{
    console.log(data);
    if(data.modifiedCount>0){
      toast.success('Updated Successfully')
    }
  })
  }
  
    return (
      <div className="bg-white my-5">
        <h2 className="font-bold text-center text-2xl py-5">Hi <span className="font-bold text-center text-2xl text-blue-800">{user?.displayName}</span> Do You Wanna Update You&apos;re Carft?</h2>
        <form onSubmit={handleUpdate} className="card-body">
          {/* 1 row  */}
          <div className=" flex gap-5 w-full ">
            {/* photo  */}
          <div className="form-control md:w-full">
              <label className="label">
                <span className="text-xl font-bold">Photo URL</span>
              </label>
              <input
                type="url"
                placeholder="Photo URL"
                className="input input-bordered w-full bg-gray-300"
                required
                defaultValue={photoURL}
                name="photo"
              />
            </div>
          {/* item name */}
            <div className="form-control  md:w-1/2">
              <label className="label">
                <span className="text-xl font-bold">Item Name</span>
              </label>
              <input
                type="text"
                placeholder="Item Name"
                className="input input-bordered w-full bg-gray-300"
                required
                defaultValue={item_name}
                name="itemName"
              />
            </div>
  
           
          </div>

          {/* 2 row */}
          <div className=" flex gap-5 w-full ">
          {/* input subcategory   */}
            <div className="form-control  md:w-1/2">
              <label className="label">
                <span className="text-xl font-bold">Subcategory</span>
              </label>
              <input
                type="text"
                placeholder="Subcategory"
                className="input input-bordered w-full bg-gray-300"
                required
                defaultValue={subcategory}
                name="subcategory"
              />
            </div>
  
            {/* description */}
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="text-xl font-bold">Short Description</span>
              </label>
              <input
                type="text"
                placeholder="Description"
                className="input input-bordered w-full bg-gray-300"
                required
                defaultValue={descriprtion}
                name="descriprtion"
              />
            </div>
          </div>
          {/* 3 row  */}
          <div className=" flex gap-5 w-full ">
            {/* price  */}
            <div className="form-control  md:w-1/2">
              <label className="label">
                <span className="text-xl font-bold">Price</span>
              </label>
              <input
                type="text"
                placeholder="Price"
                className="input input-bordered w-full bg-gray-300"
                required
                defaultValue={price}
                name="price"
              />
            </div>
  
            {/* rating */}
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="text-xl font-bold">Rating</span>
              </label>
              <input
                type="text"
                placeholder="Rating"
                className="input input-bordered w-full bg-gray-300"
                required
                defaultValue={rating || ''}
                name="rating"
              />
            </div>
            {/* cutomization */}
             
             <div className="form-control md:w-1/2">
              <label className="label">
                <span className="text-xl font-bold">Customiztion (Yes / No)</span>
              </label>
              <input
                type="text"
                placeholder="Customization"
                className="input input-bordered w-full bg-gray-300"
                required
                defaultValue={customization || ''}
                name="customization"
              />
            </div>
          </div>
          {/* 4 row  */}
          <div className=" flex gap-5 w-full ">
            
             {/* proccesing time */}
             <div className="form-control md:w-1/2">
              <label className="label">
                <span className="text-xl font-bold">Proccesing Time</span>
              </label>
              <input
                type="text"
                placeholder="Proccesing Timey"
                className="input input-bordered w-full bg-gray-300"
                required
                defaultValue={proccesing_time || ''}
                name="proccesingTime"
              />
            </div>
 {/*stockStatus */}
 <div className="form-control md:w-1/2">
              <label className="label">
                <span className="text-xl font-bold">Stock Status (In Stock / Made To Order)</span>
              </label>
              <input
                type="text"
                placeholder="Stock Status"
                className="input input-bordered w-full bg-gray-300"
                required
                defaultValue={stockStatus || ''}
                name="stock"
              />
            </div>
            
          </div>

  
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-block">Update </button>
          </div>
        </form>
        <ToastContainer/>
      </div>
    );
};

export default Update;