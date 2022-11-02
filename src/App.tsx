
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

  return (
    <div> 
      <CreateTodo onAddTodo={todoAddHandler}/> 
      <TodoList items={todos}/>
    </div>
  );
} 

export default App;
