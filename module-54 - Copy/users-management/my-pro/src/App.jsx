
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [users, setUser] = useState([])

  useEffect(()=>{
    fetch(`http://localhost:5000/users`)
    .then(res => res.json())
    .then(data => setUser(data))
  },[])


  const handleSubmit =(e)=>{
     e.preventDefault()
     const form = e.target
     const name = e.target.name.value
     const email = e.target.email.value
     const user = {name , email}
     console.log(user);

     fetch('http://localhost:5000/users', {
          method:"POST",
         headers:{
          "content-type":"application/json"
         },
         body: JSON.stringify(user)
     }) 
     .then(res => res.json())
     .then(data => {
      console.log(data);
      const newUser = [...users , data]
      setUser(newUser)
      form.reset()
     })
  }
  return (
    <>
     <h1>user management </h1>

     <h2>{users.length}</h2>

  <form onSubmit={handleSubmit}>
    <input type="text" name="name" id="" /> <br />
    <input type="email" name="email" id="" /> <br />
    <input type="submit"value="Add User" id="" />
  </form>

     <div>
      {
        users.map(user =><p key={user.id}>{user.id}: {user.name}: {user.email}</p>)
      }
     </div>
    </>
  )
}

export default App
