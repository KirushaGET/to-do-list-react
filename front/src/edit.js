import React, { useState } from 'react'
import axios from 'axios';
import './edit.css';

function Edit ({tasks, value, index, edit}) {
  const [text, setText] = useState(value.text);

  const deleteTasks = async(index) => {
    await axios.delete(`http://localhost:8000/deleteTask?id=${tasks[index].id}`);
  }

  const doneTasks = async(index) => {

    await axios.patch('http://localhost:8000/updateTask', {
      id: tasks[index].id,
      text: text,
      isCheck: tasks[index].isCheck
    }).then(console.log("was edit"));
    edit(-1);
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
      <div className='textEdit'>
        <input 
          className='checkbox' 
          type='checkbox' 
          checked={value.isCheck} 
          onChange={() => 
            EditIsCheck(index)}
        />
        <input 
          className='text-task1' 
          type='text' 
          value={text} 
          onChange={(e) => 
            setText(e.target.value)}
        /> 
        <div className='buttonEdit'>
          <button className='done' onClick={() => doneTasks(index)}>Done</button>
          <button onClick={() => edit(-1)}>Cancel</button>
          <button onClick={() => deleteTasks(index)}>Delete</button>
      </div>
      </div>
    )
}

export default Edit;