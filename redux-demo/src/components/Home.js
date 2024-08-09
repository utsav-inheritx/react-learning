import React from 'react';
import { useDispatch } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <div className="container mt-5">
      <h2>Dashboard</h2>
      <button className="btn btn-danger" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Home;
