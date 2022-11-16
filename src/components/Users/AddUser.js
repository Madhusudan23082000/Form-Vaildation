import React, { useState } from 'react';
import Card from '../UI/Card'
import Button from '../UI/Button'
import classes from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal';



function AddUser(props) {
    

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState();

  function nameHandler(event) {
    setName(event.target.value);

  }

  function ageHandler(event) {
    setAge(event.target.value);
  }

    function addUserHandler(event) {
          event.preventDefault();
          if(name.trim().length === 0 || age.trim().length === 0){
            setError({
              title: 'Invalid input',
              message: 'Please enter a valid name or age (non-empty values).'
            });
            return;
          }
          if(+age < 1){
            setError({
              title: 'Invalid input',
              message: 'Please enter a valid age (>0).'
            });
            
            return;
          }
          props.onAddUser(name, age);
          setName('');
          setAge('');
    }
    function ErrorHandler(){
      setError(null);
  }
  
     
  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={ErrorHandler}/>}
    <Card className={classes.input}>
           <form onSubmit={addUserHandler}>
               <label htmlFor="username">Username</label>
               <input id = "username" type="text" value = {name} onChange={nameHandler}/>
           
               <label htmlFor="age">Age (years)</label>
               <input id="age" type="number" value={age} onChange={ageHandler}/>
              <Button type="submit"> AddUser</Button>
           </form>
    </Card>
    </div>
  )
}

export default AddUser