import * as actions from './types'
import * as TodoService from '../services/todo.service'
import {push}from 'connected-react-router'
import store from '../helpers/store'
const getAllTodoAction=(todos)=>{

    return {
        type:actions.GET_ALL_TODOS,
        todos
    }
}
const allFilter=(todos)=>{
    return {
        type:actions.ALL_FILTER,
        todos
    }
}
const activeFilter=(todos)=>{
    return{
        type:actions.ACTIVE_FILTER,
        todos
    }
}
const completedFilter=(todos)=>{
    return{
        type:actions.COMPLETED_FILTER,
        todos
    }
}
export const addTodo=(todo)=>dispatch=>{
    let result=TodoService.addTodo(todo);
   // console.log(result +' adding result')
   // dispatch(push("/"))
    if(result)
    {
        let allTodos=TodoService.getAllTodo();
        dispatch(getAllTodoAction(allTodos))
        dispatch(push("/"));
    }
}
export const filterBy=(condition)=>dispatch=>{
    let allTodos=store.getState().todo.todos;
    if(condition === "All"){
       
        dispatch(allFilter(allTodos))
    }else if(condition === "Active")
    {
        let activeTodos=allTodos.filter(o=>o.completed === false)
        dispatch(activeFilter(activeTodos))
    }
    else if(condition === "Completed")
    {
        let completedTodos=allTodos.filter(o=>o.completed === true)
        dispatch(completedFilter(completedTodos))
    }
}
export const makeTodoCompleted=(todo)=>dispatch=>{
    TodoService.markCompleted(todo)
   
    let allTodos=TodoService.getAllTodo();
    dispatch(getAllTodoAction(allTodos))
   // dispatch(push("/"))
}