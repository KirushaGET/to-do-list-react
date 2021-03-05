import React from 'react'
import axios from 'axios';
import './NoEdit.css';

function NoEdit ({tasks, value, index, edit}) {

  const deleteTasks = async(index) => {
    await axios.delete(`http://localhost:8000/deleteTask?id=${tasks[index].id}`);
  }

  const editTasks = async(index) => {
    edit(index);
  }

  const EditIsCheck = async(index) => {
    tasks[index].isCheck=!tasks[index].isCheck;
    await axios.patch('http://localhost:8000/updateTask', {
      id: tasks[index].id,
      text: tasks[index].text,
      isCheck: tasks[index].isCheck
    }).then(console.log("isCheck was edit"));
  }

    return (
      <div className='text'>
        <input 
          className='checkbox' 
          type='checkbox' 
          checked={value.isCheck} 
          onChange={() => 
            EditIsCheck(index)
          }
        />
        <span className={!value.isCheck? 'text-task' : 'text-task-done' }>{value.text}</span> 
        <div className='button'>
        {!value.isCheck?<button onClick={() => editTasks(index)}>Edit</button>:''}
        <button onClick={() => deleteTasks(index)}>Delete</button>
      </div>
      </div>
    )
}

export default NoEdit;