import axios from 'axios'

const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';

const getAllTodos = () => axios.get(TODOS_URL);

const getUserTodo = (id) => axios.get(`${TODOS_URL}/?userId=${id}`);

const addTodo = (todo) => axios.post(TODOS_URL, todo);

const updateTodo = (todo) => axios.put(`${TODOS_URL}/${todo.id}`,todo);

const deleteTodo = (id) => axios.delete(`${TODOS_URL}/${id}`);

export { getAllTodos, getUserTodo, addTodo, updateTodo, deleteTodo };