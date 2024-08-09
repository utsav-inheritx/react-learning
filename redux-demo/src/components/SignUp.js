import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = () => {
    const user = { email, password };
    localStorage.setItem('user', JSON.stringify(user));
    navigate('/login');
  };

  return (
    <div className="container mt-5">
      <h2>Sign Up</h2>
      <form>
        <div className="mb-3">
          <label>Email address</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button type="button" className="btn btn-primary" onClick={handleSignUp}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
