const AddCoffee = () => {

const handleForm = e=>{
  e.preventDefault()
  const form = e.target
const name = form.name.value
const quantity = form.quantity.value
const supplier = form.supplier.value
const test = form.test.value
const category = form.category.value
const details = form.details.value
const photo = form.photo.value

const dataCoffee = {name,quantity,supplier,test,category,details,photo}

console.log(dataCoffee);

fetch('http://localhost:5000/coffee',{
  method:"POST",
  headers:{
    "content-type":"application/json"
  },
  body: JSON.stringify(dataCoffee)

})
.then(res=>res.json())
.then(data =>{
  console.log(data);
  if(data.insertedId){
    alert('added ')
  }
})
}

  return (
    <div>
      <form onSubmit={handleForm} className="card-body">
        {/* input div  */}
        <div className=" flex gap-5 w-full ">
          <div className="form-control  md:w-1/2">
            <label className="label">
              <span className="text-xl font-bold">Coffee Name</span>
            </label>
            <input
              type="text"
              placeholder="Coffee Name"
              className="input input-bordered w-full"
              required
              name="name"
            />
          </div>

          {/* 2 */}
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="text-xl font-bold">Available Quantity</span>
            </label>
            <input
              type="text"
              placeholder="Available Quantity"
              className="input input-bordered w-full"
              required
              name="quantity"
            />
          </div>
        </div>
        {/* input supplier div  */}
        <div className=" flex gap-5 w-full ">
          <div className="form-control  md:w-1/2">
            <label className="label">
              <span className="text-xl font-bold">Supplier</span>
            </label>
            <input
              type="text"
              placeholder="Supplier"
              className="input input-bordered w-full"
              required
              name="supplier"
            />
          </div>

          {/* 2 */}
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="text-xl font-bold">Test</span>
            </label>
            <input
              type="text"
              placeholder="Test"
              className="input input-bordered w-full"
              required
              name="test"
            />
          </div>
        </div>
        {/* input category div  */}
        <div className=" flex gap-5 w-full ">
          <div className="form-control  md:w-1/2">
            <label className="label">
              <span className="text-xl font-bold">Category</span>
            </label>
            <input
              type="text"
              placeholder="Category"
              className="input input-bordered w-full"
              required
              name="category"
            />
          </div>

          {/* 2 */}
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="text-xl font-bold">Details</span>
            </label>
            <input
              type="text"
              placeholder="Details"
              className="input input-bordered w-full"
              required
              name="details"
            />
          </div>
        </div>
        {/* input photo div  */}
        <div className=" flex gap-5 w-full ">
          
          <div className="form-control md:w-full">
            <label className="label">
              <span className="text-xl font-bold">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Photo URL"
              className="input input-bordered w-full"
              required
              name="photo"
            />
          </div>
        </div>

        <div className="form-control mt-6">
          <button type="submit" className="btn btn-block">Add Coffee</button>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
