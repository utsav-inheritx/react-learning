import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../slices/todo/todoSlice';

const AddTodo = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        if (input.trim()) {
            dispatch(addTodo(input));
            setInput('');
        }
    };

    return (
        <>
            <h3>Add Todo</h3>
            <form onSubmit={addTodoHandler} className="d-flex mb-4">
                <input type="text" className="form-control me-2" placeholder="Enter a Todo..." value={input} onChange={(e) => setInput(e.target.value)} />
                <button type="submit" className="btn btn-primary">
                    Add Todo
                </button>
            </form>
        </>
    );
};

export default AddTodo;
