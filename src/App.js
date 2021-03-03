import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {

  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');

  useEffect(async() => {
    await axios.get('http://localhost:8000/alltasks').then(res => {
      //console.log(res.data.data)
      setTasks(res.data.data);
    })
  })

  const addNewTask  = async () => {
    await axios.post('http://localhost:8000/createTask', {
      text,
      how: 555
    }).then(res => {
      setText('');
    })
  }
  const deleteTasks = async(index) => {
    await axios.delete(`http://localhost:8000/deleteTask?_id=${tasks[index]._id}`);
  }

  const editTasks = async(index) => {
    await axios.patch('http://localhost:8000/updateTask', {
      _id: tasks[index]._id,
      text: tasks[index].text,
      how: tasks[index].how
    }).then(console.log("was edit"));
  }

  return (
    <>
      <header>
        <h1>To-DO list</h1>
        <input type='text' value={text} onChange={(e) => setText(e.target.value)}/>
        <button onClick={ () => addNewTask()}>Add new tasks</button>
      </header>
      <div >
        {
          tasks.map((value,index) => 
            <div key={`task-${index}`}>
              <span>{value.text}</span> 
              <button onClick={() => deleteTasks(index)}>Delete</button>
              <button onClick={() => editTasks(index)}>Edit</button>
            </div>
          )
        }
      </div>
    </>
  );
}

export default App;
