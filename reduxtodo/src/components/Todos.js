import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../slices/todo/todoSlice';


const Todos = () => {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    return (
        <>
            <h3>Todo List</h3>
            <ul className="list-group">
                {todos.map((todo) => (
                    <li className="list-group-item d-flex justify-content-between align-items-center" key={todo.id}>
                        {todo.text}
                        <button onClick={() => dispatch(removeTodo(todo.id))} className="btn btn-danger">
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Todos;
