import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Api() {
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            console.log(response.data);
            setUsers(response.data);
        })
        .catch(error => {
          console.error(error); 
        });
    }, []);
  
    return (
      <ul style={{ textAlign: "left", listStyleType: "none" }}>
        {users.map(({ id, name, username, email }) => (
          <li key={id}>
            <p><strong>ID:</strong> {id}</p>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>UserName:</strong> {username}</p>
            <p><strong>Email Id:</strong> {email}</p>
          </li>
        ))}
      </ul>
    );
  }
  
  export default Api;
