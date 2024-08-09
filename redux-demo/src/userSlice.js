import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      localStorage.setItem('user', JSON.stringify(action.payload));
      state.user = action.payload;
    },
    logout: (state) => {
      localStorage.removeItem('user');
      state.user = null;
    },
    updatePassword: (state, action) => {
      state.user.password = action.payload;
      localStorage.setItem('user', JSON.stringify(state.user));
    },
  },
});

export const { login, logout, updatePassword } = userSlice.actions;
export default userSlice.reducer;
