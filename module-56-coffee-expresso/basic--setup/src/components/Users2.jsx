import { useQuery } from "@tanstack/react-query";

const Users2 = () => {

 const {isPending ,data:users  , isError , error} = useQuery({
    queryKey: ['users'],
    queryFn: async()=>{
      const res = await fetch('http://localhost:5000/user')
      return res.json()
    }
 })
 console.log(users);



  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/user/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // if (data.deletedCount > 0) {
        //   const newUsers = users.filter((user) => user._id !== id);
        //   serUsers(newUsers);
        // }
      });
  };

  if(isPending){
    return <span>Loading</span>
  }
  if(isError){
    return <span>{error.message}</span>
  }
  return (
    <div>
      {/* <h1> Users: {loadedUser.length}</h1> */}

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>CreatedAt</th>
              <th>Last Logged In</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users?.map((user, index) => (
              <tr key={user._id} className="hover">
                <th>{index + 1}</th>
                <td>{user.email}</td>
                <td>{user.createdAt}</td>
                <td>{user.lastLoggedAt}</td>
                <td onClick={() => handleDelete(user._id)} className=" btn">
                  X
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users2;