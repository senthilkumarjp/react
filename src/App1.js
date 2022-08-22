import { useState } from "react";
import AddUser from "./components1/Users/AddUser";
import UsersList from "./components1/Users/UsersList";

function App1() {

  const [usersList, setUsersList] =useState([]);

  function AddUsers(name,age){
    setUsersList((prev)=>{
          return [...prev, {id:Math.random().toString(),  name:name,age:age}];
    })
  }
  return (
    <div>
      <h1>Form</h1>
      <AddUser onAddUser = {AddUsers}></AddUser>
      <UsersList users = {usersList}></UsersList>
    </div>
  );
}

export default App1;
