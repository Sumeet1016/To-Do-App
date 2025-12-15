import { useState } from "react";
import styles from "./InputContainer.module.css";

const InputContainer = ({addTask}) => {
  const[taskText,setTaskText]=useState([]);
  const[taskDate,setTaskDate]=useState("");

  //Function to handle Add
  const handleAdd=()=>{
    if(!taskText) return;
    addTask(taskText,taskDate);
    setTaskText("");
        setTaskDate("");

  };
  return (
    <div className={styles.inputContainer}>
      <input type="text" 
      placeholder="Enter your Task" 
      value={taskText} 
      onChange={(event)=>setTaskText(event.target.value)}/>

      <input type="date" 
      
       value={taskDate}
       onChange={(event)=>setTaskDate(event.target.value)} 
      />

      <button type="button"
      className={`btn btn-success ${styles.addBtn}`}
      onClick={handleAdd}
       >Add</button>
    </div>
  );
};

export default InputContainer;
