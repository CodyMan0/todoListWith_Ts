
import React, {useState}from 'react';
import CreateTodo from './components/CreateTodo';
import TodoList from './components/TodoList';
import {Todo} from './todo.model'

 

function App() {

  const [todos, setTodos] = useState<Todo[]>([]);
    // {id: 't1', text: 'Finish the course'}
  const todoAddHandler  = (text: string) => {
    setTodos(prev => [
      ...prev, {
      id:Math.random().toString(), 
      text: text}
    ])
  }

  const todoDeleteHandler = (todoId: string) => {
    setTodos(prev => {
      return prev.filter(todo => todo.id !== todoId)
    })
  }

  return (
    <div> 
      <CreateTodo onAddTodo={todoAddHandler}/> 
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler}/>
    </div>
  );
} 

export default App;
