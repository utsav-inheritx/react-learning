import React, { useState, useEffect } from "react";
import axios from "axios";

const AxiosApi = () => {
    const client = axios.create({
        baseURL: "https://jsonplaceholder.typicode.com/posts"
    });

    const [title, setTitle] = useState('');
    const [posts, setPosts] = useState([]);
    const [editingPost, setEditingPost] = useState(null);

    // List Data
    useEffect(() => {
        const fetchPosts = async () => {
            const response = await client.get('?_limit=500'); 
            setPosts(response.data);
        };
        fetchPosts();
    }, []);

    // Add Post
    const addPost = async () => {
        const response = await client.post('', { title });
        setPosts(prevPosts => [...prevPosts, response.data]);
        setTitle('');
    };

    // Edit Post
    const editPost = async (id) => {
        const response = await client.put(`/${id}`, { title });
        setPosts(prevPosts => prevPosts.map(post => post.id === id ? response.data : post));
        setTitle('');
        setEditingPost(null);
    };

    // Delete Post
    const deletePost = async (id) => {
        await client.delete(`/${id}`);
        setPosts(prevPosts => prevPosts.filter(post => post.id !== id));
    };

    const handleEditClick = (post) => {
        setTitle(post.title);
        setEditingPost(post.id);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingPost) {
            editPost(editingPost);
        } else {
            addPost();
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button type="submit">{editingPost ? "Update Post" : "Add Post"}</button>
            </form>
            <ul style={{ textAlign: "left", listStyleType: "none" }}>
                {posts.map(({ id, title }) => (
                    <li key={id}>
                        <p><strong>ID:</strong> {id}</p>
                        <p><strong>Title:</strong> {title}</p>
                        <button onClick={() => handleEditClick({ id, title })}>Edit</button>
                        <button onClick={() => deletePost(id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AxiosApi;
