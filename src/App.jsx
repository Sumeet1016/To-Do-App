import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Heading from './Components/Heading'
import InputContainer from './Components/InputContainer'
import TableList from './Components/TableList'
import WelcomeMessage from'./Components/WelcomeMessage'
function App() {
  const [tasks,setTasks]=useState([]);

  const addTask=(taskText,taskDate)=>{
    if(!taskText) return;

    const newTask={
      id:Date.now(),
      text:taskText,
      date:taskDate,
    };
    setTasks([...tasks,newTask]);
  };

  //Function To Delete an Task
  const deleteTask=(id)=>{
    setTasks(tasks.filter((task)=>task.id !=id)); 
  }

  return <div className="Container">
    <Heading></Heading>
    <InputContainer addTask={addTask}></InputContainer>
    {tasks.length===0 && <WelcomeMessage />}
    <TableList tasks={tasks} deleteTask={deleteTask}></TableList>
  </div>
}

export default App
