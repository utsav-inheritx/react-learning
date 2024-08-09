import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ChangePassword from './components/ChangePassword';
import Home from './components/Home';

const App = () => {
  const user = useSelector((state) => state.user);

  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
      </Routes>
    </div>
  );
};

export default App;
