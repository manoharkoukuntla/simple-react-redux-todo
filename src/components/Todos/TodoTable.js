import React from 'react';
import {connect}from 'react-redux'
import {bindActionCreators}from 'redux'
import Todo from './Todo';
import {makeTodoCompleted}from '../../actions/todo.action'
const TodoTable = (props) => {
    let todoRows=props.todos.map((todo,index)=>{
        return <Todo todo={todo} makeTodoCompleted={props.makeTodoCompleted} key={todo.name} index={index+1}></Todo>
    })
    return (
        <table className="table is-hoverable is-fullwidth is-scrollable">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Description</th>
            <th>Date Added</th>
            <th>Last Day</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>{todoRows}</tbody>
      </table>
    );
};
const mapStateToProps=(state)=>{
   // console.log(state.todo)
    return {todos:state.todo.currentShowing}
}
const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({makeTodoCompleted},dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(TodoTable);