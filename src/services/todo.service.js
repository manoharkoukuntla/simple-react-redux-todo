const todos = [];

export const addTodo = todo => {
  let index = todos.findIndex(o => o.name === todo.name);
  //console.log('inside add todo method')
  if (index < 0) {
    todos.push(todo);
    return true;
  } else return false;
};
export const markCompleted = todo => {
  let index = todos.findIndex(o => o.name === todo.name);
  todos[index].completed = true;
};
export const getAllTodo=()=>todos
