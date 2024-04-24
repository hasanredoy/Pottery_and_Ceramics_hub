import { Link } from "react-router-dom";

const Layout = () => {
  const handleSubmit=e=>{
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const email = form.email.value
    const pass = form.pass.value
    const mango = {name, email ,pass}
    console.log(mango);

    fetch('http://localhost:5000/mangos',{
     method:"POST",
     headers:{
      "content-type":"application/json"
     },
     body:JSON.stringify(mango)
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data);
      if(data.insertedId){
        alert('added')
         form.reset()
        }
        pass.value=" "
     
    })
  }
  return (
    <div>
      <h1 className=" text-3xl text-center my-5 text-primary">Mangos Farm</h1>
      <form onSubmit={handleSubmit} className="text-center bg-slate-200  space-y-3 py-5  ">
        <input  type="text" name="name" id="" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="password" name="pass" id="" />
        <br />
        <input className=" btn btn-secondary" type="submit" value="Add Mango" />
      </form>
      <Link to={"/mangos"}>
      <button className="btn btn-accent">Check Mangos</button></Link>
    </div>
  );
};

export default Layout;
