import axios from 'axios'

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

const getAllPosts = () => axios.get(POSTS_URL);

const getUserPost = (id) => axios.get(`${POSTS_URL}/?userId=${id}`);

const addPost = (post) => axios.post(POSTS_URL, post);

const updatePost = (post) => axios.put(`${POSTS_URL}/${post.id}`,post);

const deletePost = (id) => axios.delete(`${POSTS_URL}/${id}`);

export { getAllPosts, getUserPost, addPost, updatePost, deletePost };