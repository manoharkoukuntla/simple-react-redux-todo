import React from "react";
import TodoTable from './Todos/TodoTable'

const HomePage = props => {
  return (
    <div className="container main-content">
   
    <TodoTable></TodoTable>     
    </div>
  );
};

export default HomePage;
