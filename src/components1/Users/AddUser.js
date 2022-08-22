import { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from './AddUser.module.css';

function AddUser(props) {

  const [enteredname, setEnteredname] = useState('');
  const [enteredage, setEnteredage] = useState('');

  

   function NameChange(event){
    setEnteredname(event.target.value);
   }
   function AgeChange(event){
    setEnteredage(event.target.value);
   }

   const AddUserHandler = (event) =>{  
    event.preventDefault();

    if(enteredname.length === 0 || enteredage.length === 0){
      return;
    }
if(enteredage <0){
  return;
}
    // console.log(event.target.value);
    // console.log(`name is ${enteredname} and age is ${enteredage}`);

props.onAddUser(enteredname,enteredage);
    setEnteredname('');
    setEnteredage('');
   }
  return <Card className={classes.input}>
  <form onSubmit={AddUserHandler}>
    <label>UserName</label>
    <input type='text' value={enteredname} onChange={NameChange}></input>
    <label>Age (Years)</label>
    <input type='number' value={enteredage} onChange={AgeChange}></input>
    <Button type="submit">Add User</Button>
  </form>
  </Card>
}

export default AddUser;
