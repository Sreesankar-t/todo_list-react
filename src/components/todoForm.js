import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState(""); // Use array destructuring to assign value and setValue
  const [error2,setError2]=useState("")
  const handleSubmit = e => {
    e.preventDefault();
    if(value ){
    addTodo(value);
    setValue(""); // Set the state value to an empty string after adding the todo
    }else{
      setError2("Empty task is not allowed! Please enter something.")
      setTimeout(()=>{
       setError2("")
      },5000)
      
 
      
    }
 
  };

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input
        type='text'
        className='Todo-input'
        value={value}
        placeholder='What is the task today'
        onChange={(e) => setValue(e.target.value)} // Use setValue to update the state
      />
      
      <button type='submit' className='todo-btn'>Add Task</button>
      <p style={{ color: 'red', fontSize: 'small',fontWeight:'bold' }}>{error2}</p>
    </form>
  );
};

export default TodoForm;

