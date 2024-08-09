import { createStore } from 'redux';

const initialState = {
    user: JSON.parse(localStorage.getItem('user')) || null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            localStorage.setItem('user', JSON.stringify(action.payload));
            return { ...state, user: action.payload };
        case 'LOGOUT':
            localStorage.removeItem('user');
            return { ...state, user: null };
        default:
            return state;
    }
};

const store = createStore(reducer);

export default store;
