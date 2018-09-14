import React from "react";
import { formatDate } from "react-day-picker/moment";
import moment from "moment";

const checkAndMarkCompleted = (e, todo, makeTodoCompleted) => {
  e.preventDefault();
  
  if (!todo.completed) makeTodoCompleted(todo);
};
const checkExpiry = date => {
  return moment(date).isAfter(new Date());
};
const Todo = props => {
    //console.log(checkExpiry(props.todo.lastDate?"expired":"Active"))
  let style = !checkExpiry(props.todo.lastDate)&&!props.todo.completed
    ? {
        backgroundColor: "#CF3A24",
        color: "white"
      }
    : {};
  return (
    <tr
      style={style}
      onClick={e => {
        checkAndMarkCompleted(e, props.todo, props.makeTodoCompleted);
      }}
    >
      <td>{props.index}</td>
      <td>{props.todo.name}</td>
      <td>{props.todo.description}</td>
      <td>{formatDate(props.todo.dataAdded)}</td>
      <td>{formatDate(props.todo.lastDate)}</td>
      <td>{props.todo.completed ? "completed" : "active"}</td>
    </tr>
  );
};

export default Todo;
