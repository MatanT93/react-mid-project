import React, { useState } from 'react'

const TodoCard = (props) => {

  const [todo, setTodo] = useState(props.todo);
  const [completed, setCompleted] = useState(props.todo.completed);

  return (
    <div style={{border: '3px solid black', padding: '5px', marginBottom: '10px'}}>
      <strong>Title:   </strong> {todo.title} <br/>
      <strong>Completed:   </strong> {todo.completed.toString()} {todo.completed ? <div/> : <button onClick={() => {
        setTodo({...todo, completed: true});
        //console.log(todo.completed);
        props.changeTodoCompleted(todo);
        console.log(todo.completed);
        console.log(todo);
        }}>Mark Completed</button>}
    </div>
  )
};

export default TodoCard;