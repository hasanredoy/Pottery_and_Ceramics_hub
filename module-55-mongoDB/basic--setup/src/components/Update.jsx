import { useLoaderData } from "react-router-dom";

const Update = () => {
  const user = useLoaderData();
  console.log(user);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    console.log(name, email);

    const updatedUser = {name,email}
    console.log(updatedUser);

    fetch(`http://localhost:5000/users/${user._id}`,{
      method:"PUT",
      headers:{
        "content-type": "application/json"
      },
      body: JSON.stringify(updatedUser)
    })
    .then(res => res.json())
    .then(data =>{
      console.log(data);
    })
  };
  return (
    <div>
      <h1 className=" text-xl font-semibold pl-5">{user.name}</h1>
      <form
        onSubmit={handleUpdate}
        className=" border border-gray-900 p-5 ml-5"
      >
        <input
          className=" bg-gray-200 "
          type="text"
          defaultValue={user?.name}
          placeholder="name"
          name="name"
        />
        <br />
        <input
          className=" bg-gray-200  my-4 "
          type="email"
          placeholder="email"
          defaultValue={user?.email}
          name="email"
        />
        <br />
        <input className=" btn" type="submit" value="submit" />
        <br />
      </form>
    </div>
  );
};

export default Update;
