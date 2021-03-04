import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NoEdit from './NoEdit';
import Edit from './edit';

function App() {

  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');
  const [indexEdit, setEdit] = useState(-1);

  useEffect(async() => {
    await axios.get('http://localhost:8000/alltasks').then(res => {
      setTasks(res.data.data);
    })
  })

  const addNewTask  = async () => {
    if(text !== ''){
    await axios.post('http://localhost:8000/createTask', {
      text,
      isCheck: false
    }).then(res => {
      setText('');
    })}
  }

  return (
    <div className="all">
      <header className='head'>
        <h1>To-Do list</h1>
        <input className='inputTop' placeholder='Введите свою задачу здесь' type='text' value={text} onChange={(e) => setText(e.target.value)}/>
        <button className='buttonTop' onClick={ () => addNewTask()}>Add new tasks</button>
      </header>
      <div className='contentPage'>
        {
          tasks.map((value,index) => 
            indexEdit !== index ? 
            <NoEdit tasks={tasks} value={value} index={index} edit={setEdit} key={`task-${index}`}/> : 
            <Edit tasks={tasks} value={value} index={index} edit={setEdit} key={`task-${index}`}/>)
        }
      </div>
    </div>
  );
}

export default App;
