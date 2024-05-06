import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../components/authProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";

const AddArtAndCraft = () => {
  const {user }=useContext(AuthContext)
  console.log(user);
  const handleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const photoURL = form.photo.value;
    const item_name = form.itemName.value;
    const subcategory = form.subcategory.value;
    const descriprtion = form.descriprtion.value;
    const price = form.price.value;
    const rating = form.Rating.value;
    const customization = form.customization.value;
    const stockStatus=form.stock.value;
    const proccesing_time = form.proccesingTime.value;
    const user_name = form.userName.value;
    const user_email = form.email.value;

    const artAndCraft = {
      photoURL,
      item_name,
      subcategory,
      descriprtion,
      price,
      rating,
      customization,
      stockStatus,
      proccesing_time,
      user_name,
      user_email,
    };
    // console.log(user.displayName.length , user_name.length);
   
    if(user.displayName !== user_name){
      toast.error('Incorrect Username')
      return
    }
    if(user.email !== user_email){
      toast.error('Incorrect Email')
      return
    }

    fetch(
      "https://pottery-and-ceramics-hub.vercel.app/allArtAndCraft",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(artAndCraft),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success('Added Successfully')
          // Swal.fire({
            //   position: "top",
            //   icon: "success",
            //   title: "Art And Craft Created Successfully",
            //   showConfirmButton: false,
            //   timer: 2000
            // });
          }
        });
        toast.success('Added Successfully')
  };

  return (
    <div className=" bg-stone-400 my-9 rounded-md">
      <h1 className=" text-3xl font-bold text-center py-5 ">
        Add Some Art And Crafts{" "}
      </h1>
      <form onSubmit={handleForm} className="card-body">
        {/* 1 row  */}
        <div className=" flex flex-col lg:flex-row gap-5 w-full ">
          {/* photo  */}
          <div className="form-control md:w-full">
            <label className="label">
              <span className="text-xl font-bold">Photo URL</span>
            </label>
            <input
              type="url"
              placeholder="Photo URL"
              className="input input-bordered bg-white w-full"
              required
              name="photo"
            />
          </div>
          {/* item name */}
          <div className="form-control  w-full">
            <label className="label">
              <span className="text-xl font-bold">Item Name</span>
            </label>
            <input
              type="text"
              placeholder="Item Name"
              className="input input-bordered bg-white w-full"
              required
              name="itemName"
            />
          </div>
        </div>

        {/* 2 row */}
        <div className=" flex flex-col lg:flex-row gap-5 w-full ">
          {/* input subcategory   */}
          <div className="form-control  w-full">
            <label className="label">
              <span className="text-xl font-bold">Subcategory</span>
            </label>
            <input
              type="text"
              placeholder="Subcategory"
              className="input input-bordered bg-white w-full"
              required
              name="subcategory"
            />
          </div>

          {/* description */}
          <div className="form-control w-full">
            <label className="label">
              <span className="text-xl font-bold">Short Description</span>
            </label>
            <input
              type="text"
              placeholder="Description"
              className="input input-bordered bg-white w-full"
              required
              name="descriprtion"
            />
          </div>
        </div>
        {/* 3 row  */}
        <div className="flex flex-col lg:flex-row gap-5 w-full ">
          {/* price  */}
          <div className="form-control  w-full">
            <label className="label">
              <span className="text-xl font-bold">Price</span>
            </label>
            <input
              type="number"
              placeholder="Price"
              className="input input-bordered bg-white w-full"
              required
              name="price"
            />
          </div>

          {/* rating */}
          <div className="form-control w-full">
            <label className="label">
              <span className="text-xl font-bold">Rating</span>
            </label>
            <input
              type="text"
              placeholder="Rating"
              className="input  input-bordered bg-white w-full"
              required
              name="Rating"
            />
          </div>
          {/* cutomization */}

          <div className="form-control w-full">
            <label className="label">
              <span className="text-xl font-bold">
                Customiztion (<small>Yes / No</small>)
              </span>
            </label>
            <input
              type="text"
              placeholder="Customization"
              className="input input-bordered bg-white w-full"
              required
              name="customization"
            />
          </div>
        </div>
        {/* 4 row  */}
        <div className=" flex flex-col lg:flex-row gap-5 w-full ">
          {/* proccesing time */}
          <div className="form-control w-full">
            <label className="label">
              <span className="text-xl font-bold">Proccesing Time</span>
            </label>
            <input
              type="text"
              placeholder="Proccesing Timey"
              className="input input-bordered bg-white w-full"
              required
              name="proccesingTime"
            />
          </div>
          {/*stockStatus */}
          <div className="form-control w-full">
            <label className="label">
              <span className="text-xl font-bold">
                Stock Status (<small>In Stock / Made To Order</small>)
              </span>
            </label>
            <input
              type="text"
              placeholder="Stock Status"
              className="input input-bordered bg-white w-full"
              required
              name="stock"
            />
          </div>
        </div>
        {/*  row  */}
        <div className=" flex flex-col lg:flex-row gap-5 w-full ">
         {/* Name */}
        <div className="form-control  w-full">
          <label className="label">
            <span className="text-xl font-bold">User Name</span>
          </label>
          <input
            type="text"
            placeholder="User Name"
            className="input input-bordered bg-white w-full"
            required
            name="userName"
          />
        </div>
          {/* user eamil */}
        <div className="form-control w-full ">
          <label className="label">
            <span className="text-xl font-bold">User Email</span>
          </label>
          <input
            type="email"
            placeholder="User Email"
            className="input input-bordered bg-white w-full"
            required
            name="email"
          />
        </div>
        </div>
        
        

        <div className="form-control mt-6">
          <button type="submit" className="btn btn-block">
            Add{" "}
          </button>
        </div>
      </form>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default AddArtAndCraft;
