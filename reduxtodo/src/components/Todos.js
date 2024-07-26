import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../slices/todo/todoSlice';
import UpdateTodo from './UpdateTodo';

const Todos = () => {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const [editingTodoId, setEditingTodoId] = useState(null);

    return (
        <>
            <h3>Todos</h3>
            <ul className="list-group">
                {todos.map((todo) => (
                    <li className="list-group-item d-flex justify-content-between align-items-center" key={todo.id}>
                        {editingTodoId === todo.id ? (
                            <UpdateTodo todo={todo} setEditingTodoId={setEditingTodoId} />
                        ) : (
                            <>
                                {todo.text}
                                <div>
                                    <button onClick={() => setEditingTodoId(todo.id)} className="btn btn-secondary me-2">
                                        Edit
                                    </button>
                                    <button onClick={() => dispatch(removeTodo(todo.id))} className="btn btn-danger">
                                        Remove
                                    </button>
                                </div>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </>
    );  
};

export default Todos;
