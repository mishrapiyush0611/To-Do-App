import React from "react";
import { Draggable } from "react-beautiful-dnd";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdDeleteOutline,
  MdOutlineColorLens,
} from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { useGlobalContext } from "./context";

const Task = ({ id, name, completed, color, index }) => {
  const { removeTask, toggleDone, editTask, showColors } = useGlobalContext();

  return (
    <>
    {
      completed
      ?
      <Draggable key={id} draggableId={"draggable-" + id} index={index}>
      {(provided, snapshot) => (
        <div className="Tsk" style={{border:"2px solid #7ab530"}}>
        <li
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{
           
            backgroundColor: "#2f2f2f",
          }}
          className={`task ${completed && "task-done"}`}
        >
          
          <div className="Task">
          <p>{name}</p>
          <div className="arrange">
          
          <span onClick={() => toggleDone(id)} >
          Mark as incomplete
          </span>
          <button onClick={() => removeTask(id)} style={{color:"#AFAFAF"}}>
            <h6>Delete</h6>
          </button>
          </div>
          </div>
         
        
         
        </li>
        </div>
      )}
    </Draggable>
    :

    <Draggable key={id} draggableId={"draggable-" + id} index={index}>
    {(provided, snapshot) => (
      <div className="Tsk" >
      <li
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        style={{
         
          backgroundColor: "#2f2f2f",
        }}
        className={`task ${completed && "task-done"}`}
      >
        
        <div className="Task">
        <p>{name}</p>
        <div className="arrange">
        
        <button onClick={() => toggleDone(id)} className="btn" >
         <h6 style={{color:"white",fontSize:"12px"}}>Mark as Complete</h6>
        </button>
        <button onClick={() => removeTask(id)} style={{color:"#AFAFAF"}}>
          <h6>Delete</h6>
        </button>
        </div>
        </div>
      
       
      </li>
      </div>
    )}
  </Draggable>
    }
   
    </>
  );
};

export default Task;
