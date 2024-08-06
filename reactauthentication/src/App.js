import React, { useState } from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

const ProtectedRoute = ({ element, isAuthenticated }) => {
    return isAuthenticated ? element : <Navigate to="/login" />;
};

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const navigate = useNavigate();

    const login = () => {
        setIsAuthenticated(true);
        navigate('/dashboard');
    };

    const logout = () => {
        setIsAuthenticated(false);
        navigate('/');
    };

    return (
        <div>
            <nav>
                <button onClick={logout}>Logout</button>
            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login login={login} />} />
                <Route
                    path="/dashboard"
                    element={<ProtectedRoute isAuthenticated={isAuthenticated} element={<Dashboard />} />}
                />
            </Routes>
        </div>
    );
};

export default App;
