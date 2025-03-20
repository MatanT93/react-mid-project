import { useEffect, useState } from "react";
import * as userService from './services/userService';
import UserCard from './UserCard';
import * as todoService from './services/todoService';
import * as postService from './services/postService';
import UserCardTemp from "./UserCardTemp";

const Users = () => {

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [todos, setTodos] = useState([]);
  const [posts, setPosts] = useState([]);
  const [addFlag, setAddFlag] = useState(false);
  const [newUser, setNewUser] = useState({
    id: '',
    name: '',
    username: '',
    email: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      geo: {
        lat: '',
        lng: ''
      }
    },
    phone: '',
    website: '',
    company: {
      name: '',
      catchPhrase: '',
      bs: ''
    }
  });
  useEffect(() => {
    const fetchUsersData = async () => {
      const { data } = await userService.getAllUsers();
      setUsers(data);
    }
    const fetchTodosData = async () => {
      const { data } = await todoService.getAllTodos();
      setTodos(data);
    }
    const fetchPostsData = async () => {
      const { data } = await postService.getAllPosts();
      setPosts(data);
    }
    fetchUsersData();
    fetchTodosData();
    fetchPostsData();
  }, []);

  const filteredUsers =
    search !== '' ?
      users.filter(user => user.name.toLowerCase().search(search.toLocaleLowerCase()) !== -1 || user.email.toLowerCase().search(search.toLocaleLowerCase()) !== -1)
      : users;

  const deleteUser = (userId) => {
    setUsers(filteredUsers.filter(user => user.id !== userId));
  }

  const updateUser = (tempUser) => {
    const index = filteredUsers.findIndex((u) => u.id === tempUser.id);
    filteredUsers[index] = tempUser;
  }

  const updateData = (newTodos, newPosts) => {
    setTodos(newTodos);
    setPosts(newPosts);
  }

  const handleAdd = () => {
    setAddFlag(true);
  }

  function handleCancel() {
    setAddFlag(false);
  }

  function handleAddUser() {
    newUser.id = users.length + 1;
    console.log(newUser);
    console.log(users[0]);
    const tempUsers = users;
    tempUsers.push(newUser);
    setUsers(tempUsers);
    setAddFlag(false);
  }

  return (
    <div style={{display: 'inline-table'}}>
      <strong style={{margin: '5px'}}>Search </strong> <input style={{margin: '10px'}} size={10} type='text' onChange={e => setSearch(e.target.value)}></input>
      <button onClick={handleAdd}>Add</button><br/>
      {addFlag && <div style={{border: '3px solid black', width: '300px', paddingTop: '10%', paddingLeft: '10%', paddingBottom: '10px', marginBottom: '10px'}}>
            <strong>Name : </strong><input style={{marginInline: '30px'}} size={15} type='text' onChange={e => setNewUser({...newUser, name: e.target.value})}></input><br/><br/>
            <strong>Email : </strong><input style={{marginInline: '30px'}} size={15} type='text' onChange={e => setNewUser({...newUser, email: e.target.value})}></input><br/><br/>
            <div style={{display: 'flex', justifyContent: 'space-evenly'}}><button onClick={handleCancel}>Cancel</button><button onClick={handleAddUser}>Add</button></div>
      </div>}
      {filteredUsers.map((u) =>
        <UserCardTemp handleDelete={deleteUser} handleUpdate={updateUser} key={u.id} user={u} updateMainDom={updateData}
        todos={todos.filter((todo) => todo.userId === u.id)} maxTodoId={todos.length}
        posts={posts.filter((post) => post.userId === u.id)} maxPostId={posts.length}/>)}
         {/* <UserCard handleDelete={deleteUser} handleUpdate={updateUser} key={u.id} user={u}/>)}     */}
    </div>
  )
}

export default Users