import React, { useState } from "react";
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

const App = () => {
    const [userInput, setUserInput] = useState("");
    const [list, setList] = useState([]);

    const updateInput = (value) => {
        setUserInput(value);
    };

    const addItem = () => {
        if (userInput !== "") {
            const userInputItem = {
                id: Math.random(),
                value: userInput,
            };

            const newList = [...list, userInputItem];
            setList(newList);
            setUserInput("");
            toast.success("Item List inserted successfully");
        }
    };

    const deleteItem = (key) => {
        const updatedList = list.filter((item) => item.id !== key);
        toast.error("Item List deleted successfully");
        setList(updatedList);
    };

    const editItem = (index) => {
        const todos = [...list];
        const editedTodo = prompt("Edit the List:");
        if (editedTodo !== null && editedTodo.trim() !== "") {
            let updatedTodos = [...todos];
            updatedTodos[index].value = editedTodo;
            toast.warning("Item List updated successfully");
            setList(updatedTodos);
        }
    };

    return (
        <Container>
            <Row
                style={{ display: "flex", justifyContent: "center", alignItems: "center", fontSize: "3rem", fontWeight: "bolder", }}>
                TODO LIST
            </Row>

            <hr />

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

export default App;
