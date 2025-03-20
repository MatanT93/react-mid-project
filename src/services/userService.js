import axios from 'axios'

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

const getAllUsers = () => axios.get(USERS_URL);

const getOneUser = (id) => axios.get(`${USERS_URL}/?userId=${id}`);

const addUser = (user) => axios.post(USERS_URL, user);

const updateUser = (user) => axios.put(`${USERS_URL}/${user.id}`,user);

const deleteUser = (id) => axios.delete(`${USERS_URL}/${id}`);

export { getAllUsers, getOneUser, addUser, updateUser, deleteUser };