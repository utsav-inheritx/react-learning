import React from 'react';

const Login = ({ login }) => {
    return (
        <div>
            <h2>Login Page (Unprotected)</h2>
            <button onClick={login}>Login</button>
        </div>
    );
};

export default Login;
