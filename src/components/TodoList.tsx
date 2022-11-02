import React, { useEffect } from 'react';

interface TodoListProps {
  items: {id: string, text: string}[];
  onDeleteTodo:(id:string)=>void;
}

const TodoList = ({items, onDeleteTodo}:TodoListProps) => {

useEffect();
  return <ul>
    {items.map(item => (<li key={item.id}>
      <span>{item.text}</span>
      <button onClick={onDeleteTodo.bind(null,item.id)}>Delete</button>
      </li>))} 
  </ul>

}

export default TodoList; 