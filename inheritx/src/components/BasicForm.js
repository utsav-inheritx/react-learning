import React, { useState, useEffect } from "react";
import './BasicForm.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BasicForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        mobileNumber: "",
        password: "",
        errors: {},
    });

    const [showPassword, setShowPassword] = useState(false);
    const [storedData, setStoredData] = useState([]);
    const [editData, setEditData] = useState(null);
    const [viewData, setViewData] = useState(null);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('showData')) || [];
        setStoredData(data);
    }, []);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const validateForm = () => {
        const errors = {};

        if (!formData.firstName) {
            errors.firstName = "First Name is required";
        }

        if (!formData.lastName) {
            errors.lastName = "Last Name is required";
        }

        if (!formData.userName) {
            errors.userName = "User Name is required";
        }

        if (!formData.email) {
            errors.email = "Email is required";
        }

        if (!formData.mobileNumber) {
            errors.mobileNumber = "Mobile Number is required";
        }

        if (!formData.password) {
            errors.password = "Password is required";
        }

        setFormData((prevState) => ({ ...prevState, errors }));

        // Return true if there are no errors
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            const existingData = JSON.parse(localStorage.getItem('showData')) || [];
            if (editData !== null) {
                existingData[editData] = { ...formData, errors: {} };
                toast.warning("Data updated successfully");
            } else {
                existingData.push({ ...formData, errors: {} });
                toast.success("Data inserted successfully");
            }
            localStorage.setItem('showData', JSON.stringify(existingData));
            setStoredData(existingData);
            setFormData({
                firstName: "",
                lastName: "",
                userName: "",
                email: "",
                mobileNumber: "",
                password: "",
                errors: {},
            });
        } else {
            toast.error("Please fill the form correctly");
        }
    };

    const handleEdit = (index) => {
        const data = storedData[index];
        setFormData(data);
        setEditData(index);
    };

    const handleView = (index) => {
        const data = storedData[index];
        setViewData(data);
    };

    const handleDelete = (index) => {
        const updatedData = storedData.filter((_, i) => i !== index);
        localStorage.setItem('showData', JSON.stringify(updatedData));
        toast.error("Data deleted successfully");
        setStoredData(updatedData);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const closeViewModal = () => {
        setViewData(null);
    };

    return (
        <div>
            <h1>Form</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" name="firstName" placeholder="Enter First Name" value={formData.firstName} onChange={handleChange} />
                    {formData.errors.firstName && (
                        <p style={{ color: "red" }}>{formData.errors.firstName}</p>
                    )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" name="lastName" placeholder="Enter Last Name" value={formData.lastName} onChange={handleChange} />
                    {formData.errors.lastName && (
                        <p style={{ color: "red" }}>{formData.errors.lastName}</p>
                    )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formUserName">
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type="text" name="userName" placeholder="Enter UserName" value={formData.userName} onChange={handleChange} />
                    {formData.errors.userName && (
                        <p style={{ color: "red" }}>{formData.errors.userName}</p>
                    )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email Id</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter Email Id" value={formData.email} onChange={handleChange} />
                    {formData.errors.email && (
                        <p style={{ color: "red" }}>{formData.errors.email}</p>
                    )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formMobileNumber">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control type="tel" name="mobileNumber" placeholder="Enter Mobile Number" value={formData.mobileNumber} onChange={handleChange} />
                    {formData.errors.mobileNumber && (
                        <p style={{ color: "red" }}>{formData.errors.mobileNumber}</p>
                    )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <InputGroup>
                        <Form.Control type={showPassword ? "text" : "password"} name="password" placeholder="Enter Password" value={formData.password} onChange={handleChange} />
                        <InputGroup.Text onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }}>
                            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                        </InputGroup.Text>
                    </InputGroup>
                    {formData.errors.password && (
                        <p style={{ color: "red" }}>{formData.errors.password}</p>
                    )}
                </Form.Group>
                <Button variant="outline-primary" type="submit">
                    Submit
                </Button>
            </Form>

            <ToastContainer />

            <h2>Database</h2>
            {storedData.length > 0 ? (
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Sr No.</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>User Name</th>
                            <th>Email Id</th>
                            <th>Mobile Number</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {storedData.map((data, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{data.firstName}</td>
                                <td>{data.lastName}</td>
                                <td>{data.userName}</td>
                                <td>{data.email}</td>
                                <td>{data.mobileNumber}</td>
                                <td>
                                    <Button variant="outline-secondary" onClick={() => handleEdit(index)}>Edit</Button>{' '}
                                    <Button variant="outline-primary" onClick={() => handleView(index)}>View</Button>{' '}
                                    <Button variant="outline-danger" onClick={() => handleDelete(index)}>Delete</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            ) : (
                <p>No data available</p>
            )}

            <Modal show={viewData !== null} onHide={closeViewModal}>
                <Modal.Header closeButton>
                    <Modal.Title>View Data</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {viewData && (
                        <div>
                            <p><strong>First Name:</strong> {viewData.firstName}</p>
                            <p><strong>Last Name:</strong> {viewData.lastName}</p>
                            <p><strong>User Name:</strong> {viewData.userName}</p>
                            <p><strong>Email Id:</strong> {viewData.email}</p>
                            <p><strong>Mobile Number:</strong> {viewData.mobileNumber}</p>
                            <p><strong>Password:</strong> {viewData.password}</p>
                        </div>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-secondary" onClick={closeViewModal}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default BasicForm;
