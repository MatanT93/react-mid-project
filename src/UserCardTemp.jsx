import React, { useEffect, useState } from 'react';
import * as todoService from './services/todoService';
import { Posts } from './Posts';
import { Todos } from './Todos';
const UserCardTemp = (props) => {

    const [user, setUser] = useState(props.user);
    const [tempUser, setTempUser] = useState(props.user);
    const [hoverFlag, setHoverFlag] = useState(false);
    const [todos, setTodos] = useState(props.todos);
    const [posts, setPosts] = useState(props.posts);
    const [backColor, setBackColor] = useState('');
    const [clickFlag, setClickFlag] = useState(false);
    const [render, rerender] = useState(false);
    const [maxTodoId, setMaxTodoId] = useState(props.maxTodoId + 1);
    const [maxPostId, setMaxPostId] = useState(props.maxPostId + 1);
    // useEffect(() => {
    //     const fetchTodosData = async () => {
    //         const { data } = await todoService.getAllTodos();
    //         setTodos(data);
    //     }
    //     fetchTodosData();
    // }, []);


    function handleHover() {
        setHoverFlag(true)
    }

    function handleClick() {
        setHoverFlag(false)
    }

    const changeBorder = (newTodos) => {
        setTodos(newTodos);
        rerender(!render);
    }

    const addTodo = (newTodo) => {
        newTodo.id = maxTodoId;
        setMaxTodoId(maxTodoId + 1);
        const tempTodos = todos;
        tempTodos.push(newTodo);
        setTodos(tempTodos);
    }

    const addPost = (newPost) => {
        newPost.id = maxPostId;
        setMaxPostId(maxPostId + 1);
        const tempPosts = posts;
        tempPosts.push(newPost);
        setPosts(tempPosts);
    }

    const filteredTodos = todos.filter((todo) => todo.completed === false);
    //todos.filter(todo => todo.completed === false);
    const userBorder = filteredTodos.length === 0 ? '3px solid green' : '3px solid red'
    const divStyle = {
        border: userBorder,
        width: 'fit-content',
        padding: '10px',
        marginBottom: '10px',
        display: 'inline-table',
        backgroundColor: backColor,
        marginLeft: '5px',
    };

    return (
        <>
            <div style={divStyle}>
                <strong onClick={() => {
                    setClickFlag(!clickFlag);
                    setBackColor(clickFlag ? '' : 'lightsalmon');
                    }}>ID : {user.id} </strong> <br />
                {/* <form onSubmit={handleSubmit}> */}
                <strong>Name : </strong> <input type='text' value={tempUser.name} onChange={(e) => setTempUser({ ...tempUser, name: e.target.value })}/><br/>
                <strong>Email : </strong> <input type='email' value={tempUser.email} onChange={(e) => setTempUser({ ...tempUser, email: e.target.value })}/><br/><br/>
                <button style={{ fontSize: '10px', marginLeft: '34%' }} onMouseOver={handleHover} onClick={handleClick}>Other Data</button><br/>
                {hoverFlag ?
                    <div
                        style={{
                            border: '2px solid black',
                            borderRadius: '10px',
                            width: 'min-content',
                            padding: '10px',
                            marginLeft: '15px',
                            marginBottom: '10px',
                        }}>
                        <strong>Street : </strong> <input type='text' value={tempUser.address.street} onChange={(e) => setTempUser({ ...tempUser, address: { ...tempUser.address, street: e.target.value }})}/><br/>
                        <strong>city : </strong> <input type='text' value={tempUser.address.city} onChange={(e) => setTempUser({ ...tempUser, address: { ...tempUser.address, city: e.target.value }})}/><br/>
                        <strong>zipcode : </strong> <input type='text' value={tempUser.address.zipcode} onChange={(e) => setTempUser({ ...tempUser, address: { ...tempUser.address, zipcode: e.target.value }})}/><br/>
                    </div> : <div />
                }
                <div style={{ display: 'flex', justifyContent: 'space-around', fontSize: '10px' }}>
                    <button onClick={() => props.handleUpdate(tempUser)}>Update</button>
                    <button onClick={() => props.handleDelete(user.id)}>Delete</button>
                </div>
            </div>
                {clickFlag ?
                 <div style={{display: 'inline-table', width: '55%', padding: '10px', margin: '10px', maxHeight: '250px', maxWidth: '450px'}}>
                    <Todos user={user} todos={todos} handleCompleted={changeBorder} addNewTodo={addTodo}/>
                    <Posts user={user} posts={posts} addNewPost={addPost}/>
                 </div> : <div/>} <br/>
        </>
    )
};

export default UserCardTemp;
