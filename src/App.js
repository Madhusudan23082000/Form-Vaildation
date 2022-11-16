import React, { useState } from 'react'
import AddUser from './components/Users/AddUser'
import UsersList from './components/Users/UsersList'

function App() {

  const [usersList, setUsersList] = useState([]);

  const AddUserHandler =(uName, uAge) =>{
     setUsersList((PrevUsersList) =>{
       return [...PrevUsersList, {name: uName, age: uAge, id: Math.random().toString()}];
      })
  }

  return (
    <div>
      <AddUser onAddUser={AddUserHandler}/>
      <UsersList users={usersList}/>
    </div>
  )
}

export default App