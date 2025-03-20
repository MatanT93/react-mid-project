import React, { useEffect, useState } from 'react';
import * as todoService from './services/todoService';
import * as postService from './services/postService';
import TodoCard from './TodoCard';
import PostCard from './PostCard';

const TodosMPosts = (props) => {

  const [user, setUser] = useState(props.user);
  const [todos, setTodos] = useState(props.todos);
  const [posts, setPosts] = useState([]);
  const [addFlag, setAddFlag] = useState(false);
  const [tempTodo, setTempTodo] = useState({});
  const [maxTodoId, setMaxTodoId] = useState(201);

  useEffect(() => {
    // const fetchTodosData = async () => {
    //   const { data } = await todoService.getAllTodos();
    //   setTodos(data);
    // }
    const fetchPostsData = async () => {
      const { data } = await postService.getUserPost(user.id);
      setPosts(data);
    }
    // fetchTodosData();
    fetchPostsData();
  }, []);

  const changeCompleted = (newTodo) => {
    newTodo.completed = true;
    const todoIndex = todos.findIndex((todo) => todo.id === newTodo.id);
    let tempTodos = todos;
    tempTodos[todoIndex] = newTodo;
    setTodos(tempTodos);
    props.handleCompleted(todos);
  }

  // function handleAddTodo() {
  //   let tempTodo = todos[0];
  //   tempTodo.id = maxTodoId + 1;
  //   setMaxTodoId(Id => Id + 1);
  //   tempTodo.title = tempTitle;
  //   tempTodo.completed = false;
  //   console.log(tempTodo);
  //   props.addNewTodo(tempTodo);
  //   setAddFlag(false);
  //   setTempTitle('');
  //   tempTodo = {};
  // }

  function handleAddTodo() {
    let todoTemp = todos[0];
    todoTemp.id = maxTodoId;
    todoTemp.completed = false;
    todoTemp.title = tempTodo.title;
    setTempTodo(todoTemp);
    console.log(todoTemp);
    setMaxTodoId(maxTodoId + 1);
    setAddFlag(false);
    props.addNewTodo(tempTodo);
  }

  function handleAdd() {
    setAddFlag(!addFlag);
  }

  function handleCancel() {
    setAddFlag(false);
  }

  return (
    <>
      <strong style={{paddingLeft: '20px'}}>Todos - user {user.id}</strong><button style={{marginLeft: '50%'}} onClick={handleAdd}>Add</button><br/>
      {!addFlag ?
      <div style={{border: '3px solid black', width: 'fit-content', padding: '10px', margin: '10px'}}>
        {todos.map((todo) => <TodoCard key={todo.id} todo={todo} changeTodoCompleted={changeCompleted}/>)}
      </div> :
      <div style={{border: '3px solid black', paddingTop: '10%', paddingLeft: '20%', paddingBottom: '10px', marginBottom: '10px'}}><strong>Title : </strong><input style={{marginInline: '30px'}} size={15} type='text' onChange={e => setTempTodo({...tempTodo, title: e.target.value})}></input><br/><br/>
      <button style={{marginTop: '10px', marginLeft: '45%', marginRight: '5px'}} onClick={handleCancel}>Cancel</button><button onClick={handleAddTodo}>Add</button>
      </div>}
      <strong style={{paddingLeft: '20px'}}>Posts - user {user.id}</strong><button style={{marginLeft: '50%'}} onClick={() => {}}>Add</button> <br/>
      <div style={{border: '3px solid black', width: 'fit-content', padding: '10px', margin: '10px'}}>
        {posts.map((post) => <PostCard key={post.id} post={post}/>)}
      </div>
    </>
  )
}

export default TodosMPosts