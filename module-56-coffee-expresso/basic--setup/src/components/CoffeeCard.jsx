import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'


const CoffeeCard = ({ coffee , coffees, setCoffees }) => {
  const { _id, name, photo, category, details, quantity, test, supplier } =
    coffee || "";

    const handleDelete =id=>{
     console.log(id);
     Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        
        
        fetch(`http://localhost:5000/coffee/${id}` , {
          method:"delete",
        })
        .then(res => res.json())
        .then(data =>{
          console.log(data);
          if(data.deletedCount>0){
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });
            const remainingCoffee = coffees.filter(cof => cof._id !== _id)
            setCoffees(remainingCoffee)
          }
        })
      }
    });
    }
  return (
    <div className="card card-side bg-base-100 shadow-xl max-h-96">
      <figure>
        <img className=" w-[200px] h-[200px]" src={photo} alt="Movie" />
      </figure>
      <div className="flex justify-between w-full px-5">
      <div>
      <h2 className="card-title">Name:{name}</h2>
        <p>{details}</p>
        <p>Available: {quantity}</p>
        <p>Category: {category}</p>
      </div>
        <div className="card-actions justify-end ">
          <div className="join join-vertical space-y-3 text-white">
            <button className="btn text-white hover:text-orange-900 rounded-full bg-orange-900">View</button>
            <Link to={`/updateCoffee/${_id}`}>
            <button className="btn text-white hover:text-orange-900 rounded-full bg-orange-900">Edit</button>
            </Link>
            <button onClick={()=>handleDelete(_id)} className="btn text-white hover:text-orange-900 rounded-full bg-red-600">X</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
