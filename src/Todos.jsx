import React, { useState } from 'react';
import TodoCard from './TodoCard';

export const Todos = (props) => {

  const [user, setUser] = useState(props.user);
  const [todos, setTodos] = useState(props.todos);
  const [addFlag, setAddFlag] = useState(false);
  const [tempTodo, setTempTodo] = useState(todos[0]);
    
  const changeCompleted = (newTodo) => {
    newTodo.completed = true;
    const todoIndex = todos.findIndex((todo) => todo.id === newTodo.id);
    let tempTodos = todos;
    tempTodos[todoIndex] = newTodo;
    setTodos(tempTodos);
    props.handleCompleted(todos);
  }

  function handleAdd() {
    setAddFlag(true);
  }

  function handleCancel() {
    setAddFlag(false);
  }

  function handleAddTodo() {
    setTempTodo({...tempTodo, completed: false});
    setAddFlag(false);
    props.addNewTodo(tempTodo);
  }

  return (
    <>
        <strong style={{paddingLeft: '20px'}}>Todos - user {user.id}</strong><button style={{marginLeft: '50%', padding: '10px'}} onClick={handleAdd}>Add</button><br/>
        {!addFlag ?
        <div style={{border: '3px solid black', width: 'fit-content', padding: '10px', margin: '10px'}}>
            {todos.map((todo) => <TodoCard key={todo.id} todo={todo} changeTodoCompleted={changeCompleted}/>)}
        </div> :
        <div style={{display: 'inline-table', border: '3px solid black',  width: '350px', paddingTop: '10%', paddingLeft: '10%', paddingBottom: '10px', marginBottom: '10px'}}>
            <strong>Title : </strong>
            <input style={{marginInline: '30px'}} size={15} type='text' onChange={e => setTempTodo({...tempTodo, title: e.target.value})}></input><br/><br/>
            <div style={{display: 'flex', justifyContent: 'space-evenly'}}><button onClick={handleCancel}>Cancel</button><button onClick={handleAddTodo}>Add</button></div>
        </div>}
    </>
  )
}
