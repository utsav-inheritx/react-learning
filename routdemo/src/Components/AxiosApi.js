import React, { useState, useEffect } from "react";
import axios from "axios";

const AxiosApi = () => {

    const client = axios.create({
        baseURL: "https://jsonplaceholder.typicode.com/posts"
    });

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [posts, setPosts] = useState([]);

    // Fetch Data
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await client.get('?_limit=5');
                console.log(response.data);
                setPosts(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchPosts();
    }, []);

    return (
        <ul style={{ textAlign: "left", listStyleType: "none" }}>
          {posts.map(({ id, title, body }) => (
            <li key={id}>
              <p><strong>ID:</strong> {id}</p>
              <p><strong>Title:</strong> {title}</p>
              <p><strong>Body:</strong> {body}</p>
            </li>
          ))}
        </ul>
      );
}

export default AxiosApi;
