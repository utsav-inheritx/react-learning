import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const ChangePassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleChangePassword = () => {
    const updatedUser = { ...user, password: newPassword };
    dispatch({ type: 'LOGIN', payload: updatedUser });
  };

  return (
    <div className="container mt-5">
      <h2>Change Password</h2>
      <form>
        <div className="mb-3">
          <label>New Password</label>
          <input type="password" className="form-control" value={newPassword} onChange={(e) => setNewPassword(e.target.value)}/>
        </div>
        <button type="button" className="btn btn-primary" onClick={handleChangePassword}>
          Change Password
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
