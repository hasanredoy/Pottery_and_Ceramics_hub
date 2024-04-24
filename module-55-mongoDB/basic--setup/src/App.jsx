import { Link } from "react-router-dom";
import "./App.css";

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target
    const name = e.target.name.value;
    const email = e.target.email.value;
    const user = { name, email };
    console.log(user);

   fetch('http://localhost:5000/users' ,{
    method:"POST",
    headers:{
      "content-type":"application/json"
    },
    body: JSON.stringify(user)
   })
    .then(res => res.json())
    .then(data =>{
      console.log(data);
      if(data.insertedId){
        alert('user added successfully')
        form.reset()
      }
    })

  };
  return (
    <div className=" bg-gray-200 flex flex-col justify-center items-center space-y-5 my-20">
      <h1>MongoDB Crud</h1>
       <Link to={'/users'}>Users</Link>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" id="" className=" my-2" /> <br />
        <input type="email" name="email" id="" className=" my-2" /> <br />
        <input className=" btn btn-primary" type="submit" value="Add User" id="" />
      </form>
    </div>
  );
}

export default App;
