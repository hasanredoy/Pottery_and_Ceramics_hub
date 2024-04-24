import { useLoaderData } from "react-router-dom";

const Mango = () => {
  const mango = useLoaderData();
  console.log(mango);
  
  const handleSubmit=e=>{
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const email = form.email.value
    const pass = form.pass.value
    const data = {name, email ,pass}
    console.log(data);
   fetch(`http://localhost:5000/mangos/${mango._id} `,{
    method:"PUT",
    headers:{
      "content-type":"application/json"
    },
    body: JSON.stringify(data)

   })
   .then(res=> res.json())
   .then(data => {
    console.log(data);
   })
  
  }

  return (
    <div>
      <h1>hello {mango.name}</h1>
      <form
        onSubmit={handleSubmit}
        className="text-center bg-slate-200  space-y-3 py-5  "
      >
        <input type="text" name="name" defaultValue={mango.name} id="" />
        <br />
        <input type="email" name="email" id="" defaultValue={mango.email} />
        <br />
        <input type="password" name="pass" defaultValue={mango.pass} id="" />
        <br />
        <input className=" btn btn-secondary" type="submit" value="Update" />
      </form>
    </div>
  );
};

export default Mango;
