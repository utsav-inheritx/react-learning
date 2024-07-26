import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    { id: 1, text: "Ajay Prajapati" }
];

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            };
            state.push(todo);
        },
        removeTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload);
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload;
            const todo = state.find((todo) => todo.id === id);
            if (todo) {
                todo.text = text;
            }
        },
    }
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
