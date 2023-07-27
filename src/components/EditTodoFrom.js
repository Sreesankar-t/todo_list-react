import React,{useState} from 'react';

const EditTodoForm = ({editTodo,task}) => {
  const[value, setValue]=useState(task.task)

    const handleSubmit = e =>{
        e.preventDefault();
        let trimvalue=value.trim()
        if(  trimvalue!==""){
          editTodo(value,task.id);
          
          setValue("")
        }
      
    }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' className='todo-input' value={value} placeholder='update the task' onChange={(e)=>setValue(e.target.value)}></input>
        <button type='submit' className='todo-btn'>update</button>
    </form>
  );
}

export default EditTodoForm;

