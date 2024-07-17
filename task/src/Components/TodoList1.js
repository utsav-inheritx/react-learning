import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TodoList1 = () => {
    const [userInput, setUserInput] = useState("");
    const [list, setList] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
            .then(response => {
                const initialList = response.data.map(item => ({
                    id: item.id,
                    value: item.title
                }));
                setList(initialList);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);

    const updateInput = (value) => {
        setUserInput(value);
    };

    const addItem = () => {
        if (userInput !== "") {
            const userInputItem = {
                title: userInput,
                completed: false,
            };

            axios.post("https://jsonplaceholder.typicode.com/todos", userInputItem)
                .then(response => {
                    const newItem = {
                        id: response.data.id,
                        value: response.data.title
                    };
                    setList([...list, newItem]);
                    setUserInput("");
                    toast.success("Data added successfully");
                })
                .catch(error => {
                    console.error("Error adding data:", error);
                });
        }
    };

    const deleteItem = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(() => {
                const updatedList = list.filter((item) => item.id !== id);
                toast.error("Data deleted successfully");
                setList(updatedList);
            })
            .catch(error => {
                console.error("Error deleting data:", error);
            });
    };

    const editItem = (index) => {
        const todos = [...list];
        const editedTodo = prompt("Edit the list:", todos[index].value);
        if (editedTodo !== null && editedTodo.trim() !== "") {
            const updatedTodo = {
                ...todos[index],
                value: editedTodo,
            };

            axios.put(`https://jsonplaceholder.typicode.com/todos/${todos[index].id}`, { title: editedTodo })
                .then(() => {
                    let updatedTodos = [...todos];
                    updatedTodos[index] = updatedTodo;
                    toast.warning("Data updated successfully");
                    setList(updatedTodos);
                })
                .catch(error => {
                    console.error("Error updating data:", error);
                });
        }
    };

    return (
        <Container>
            <Row style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "2rem", fontWeight: "bolder", }}>
                LIST
            </Row>

            <Row>
                <Col md={{ span: 5, offset: 4 }}>
                    <InputGroup className="mb-3">
                        <FormControl placeholder="Add Item List" size="lg" value={userInput} onChange={(item) => updateInput(item.target.value)} aria-label="add something" aria-describedby="basic-addon2" />
                        <InputGroup>
                            <Button variant="dark" className="mt-2" onClick={addItem}>
                                ADD
                            </Button>
                        </InputGroup>
                    </InputGroup>
                </Col>
            </Row>
            <Row>
                <Col md={{ span: 5, offset: 4 }}>
                    <ListGroup>
                        {list.map((item, index) => (
                            <div key={index}>
                                <ListGroup.Item variant="dark" action style={{ display: "flex", justifyContent: "space-between", }}>
                                    {item.value}
                                    <span>
                                        <Button style={{ marginRight: "10px" }} variant="light" onClick={() => deleteItem(item.id)}>
                                            Delete
                                        </Button>
                                        <Button variant="light" onClick={() => editItem(index)}>
                                            Edit
                                        </Button>
                                    </span>
                                </ListGroup.Item>
                            </div>
                        ))}
                    </ListGroup>
                </Col>
            </Row>
            <ToastContainer />
        </Container>
    );
};

export default TodoList1;