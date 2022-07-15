import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { useGlobalContext } from "./context";
import Task from "./Task";

const List = () => {
  const { tasks, filter } = useGlobalContext();

  let filtred = [...tasks];

  switch (filter) {
    case "all":
      filtred = [...tasks];
      break;
    case "completed":
      filtred = tasks.filter((task) => task.completed);
      break;
    case "uncompleted":
      filtred = tasks.filter((task) => !task.completed);
      break;
    default:
      filtred = [...tasks];
      break;
  }

  return (
    <>
    <h4 style={{textAlign:"left"}}>Added Task in To-do List</h4>
    <Droppable droppableId='droppable-1'>
      
      {(provided, snapshot) => (
        <ul
        className="Tasks"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {filtred.map((task, i) => (
            <Task key={task.id} {...task} index={i} />
          ))}
          {provided.placeholder}
        </ul>
      )}
    </Droppable>
    </>
  );
};

export default List;
