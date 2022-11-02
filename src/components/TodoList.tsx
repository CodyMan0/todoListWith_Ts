import React from 'react';

interface TodoListProps {
  items: {id: string, text: string}[]
}

const TodoList = ({items}:TodoListProps) => {

  return <ul>
    {items.map(item => (<li key={item.id}>{item.text}</li>))}
  </ul>

}

export default TodoList; 