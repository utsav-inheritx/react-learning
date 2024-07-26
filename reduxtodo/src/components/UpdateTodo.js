import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateTodo } from '../slices/todo/todoSlice';

const UpdateTodo = ({ todo, setEditingTodoId }) => {
    const [input, setInput] = useState(todo.text);
    const dispatch = useDispatch();

    const updateTodoHandler = (e) => {
        e.preventDefault();
        if (input.trim()) {
            dispatch(updateTodo({ id: todo.id, text: input }));
            setEditingTodoId(null); 
        }
    };

    return (
        <form onSubmit={updateTodoHandler} className="d-flex mb-4">
            <input type="text" className="form-control me-2" value={input} onChange={(e) => setInput(e.target.value)} />
            <button type="submit" className="btn btn-primary">
                Update
            </button>
        </form>
    );
};

export default UpdateTodo;
