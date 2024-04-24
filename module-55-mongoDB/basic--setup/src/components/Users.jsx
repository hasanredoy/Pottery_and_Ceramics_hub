import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const loadUsers = useLoaderData();
  const [users, setUser] = useState(loadUsers);

  const handleDelete = (id) => {
    console.log(id);

    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const newUser = users.filter((user) => user._id !== id);
        setUser(newUser);
      });
  };
  return (
    <div className=" mx-auto w-1/2">
      <Link to={"/"}>Home</Link>
      <h1>{users.length}</h1>
      <div>
        {users.map((user) => (
          <div className=" border border-gray-600 p-5" key={user._id}>
            <Link to={`/update/${user._id}`}>
              <button className="btn">Update </button>
            </Link>
            <h1>{user.name}</h1> <br />
            <h1>{user.email}</h1>
            <button onClick={() => handleDelete(user._id)} className="btn ">
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
