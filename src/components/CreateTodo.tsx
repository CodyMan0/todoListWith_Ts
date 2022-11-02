import React,{useRef}from 'react';


type CreateTodoProps =  {
  onAddTodo: (todoText: string) => void
}


const CreateTodo = ({onAddTodo}:CreateTodoProps) => {
  const textInputRef = useRef<HTMLInputElement>(null)
 
  const todoSubmitHandler = (e:React.FormEvent) => {
   e.preventDefault();
  const enteredText = textInputRef.current!.value;    
  onAddTodo(enteredText);
  }


  return (
  <form onSubmit={todoSubmitHandler}>
    <div>
      <label htmlFor="todo-text">Todo Text</label>
      <input type="text" className='todo-text' ref={textInputRef}/>
    </div>
    <button type='submit'>Add Todo</button>
  </form>
  )
}

export default CreateTodo; 