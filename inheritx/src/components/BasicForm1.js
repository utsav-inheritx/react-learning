import React, { useState, useEffect } from "react";
import { Container, Button, TextField, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Dialog, DialogActions, DialogContent, DialogTitle } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    formField: {
        marginBottom: "1rem",
    },
    table: {
        marginTop: "2rem",
    },
});

const BasicForm1 = () => {
    const classes = useStyles();

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
        const data = JSON.parse(localStorage.getItem("showData")) || [];
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

        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            const existingData = JSON.parse(localStorage.getItem("showData")) || [];
            if (editData !== null) {
                existingData[editData] = { ...formData, errors: {} };
                alert("Data updated successfully");
            } else {
                existingData.push({ ...formData, errors: {} });
                alert("Data inserted successfully");
            }
            localStorage.setItem("showData", JSON.stringify(existingData));
            setStoredData(existingData);
        } else {
            alert("Please fill the form");
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
        localStorage.setItem("showData", JSON.stringify(updatedData));
        alert("Data deleted successfully");
        setStoredData(updatedData);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const closeViewModal = () => {
        setViewData(null);
    };

    return (
        <Container>
            <h1>Form</h1>
            <form onSubmit={handleSubmit}>
                <TextField className={classes.formField} label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} fullWidth error={!!formData.errors.firstName} helperText={formData.errors.firstName} />
                <TextField className={classes.formField} label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} fullWidth error={!!formData.errors.lastName} helperText={formData.errors.lastName} />
                <TextField className={classes.formField} label="User Name" name="userName" value={formData.userName} onChange={handleChange} fullWidth error={!!formData.errors.userName} helperText={formData.errors.userName} />
                <TextField className={classes.formField} label="Email" name="email" type="email" value={formData.email} onChange={handleChange} fullWidth error={!!formData.errors.email} helperText={formData.errors.email} />
                <TextField className={classes.formField} label="Mobile Number" name="mobileNumber" type="tel" value={formData.mobileNumber} onChange={handleChange} fullWidth error={!!formData.errors.mobileNumber} helperText={formData.errors.mobileNumber} />
                <TextField className={classes.formField} label="Password" name="password" type={showPassword ? "text" : "password"} value={formData.password} onChange={handleChange} fullWidth error={!!formData.errors.password} helperText={formData.errors.password}
                    InputProps={{
                        endAdornment: (
                            <IconButton onClick={togglePasswordVisibility}>
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        ),
                    }}
                />
                <Button variant="contained" color="primary" type="submit">
                    Submit
                </Button>
            </form>

            <h2>Database</h2>
            {storedData.length > 0 ? (
                <TableContainer component={Paper} className={classes.table}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Sr No.</TableCell>
                                <TableCell>First Name</TableCell>
                                <TableCell>Last Name</TableCell>
                                <TableCell>User Name</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Mobile Number</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {storedData.map((data, index) => (
                                <TableRow key={index}>
                                    <TableCell>{index + 1}</TableCell>
                                    <TableCell>{data.firstName}</TableCell>
                                    <TableCell>{data.lastName}</TableCell>
                                    <TableCell>{data.userName}</TableCell>
                                    <TableCell>{data.email}</TableCell>
                                    <TableCell>{data.mobileNumber}</TableCell>
                                    <TableCell>
                                        <Button variant="contained" color="default" onClick={() => handleEdit(index)}>
                                            Edit
                                        </Button>{" "}
                                        <Button variant="contained" color="primary" onClick={() => handleView(index)}>
                                            View
                                        </Button>{" "}
                                        <Button variant="contained" color="secondary" onClick={() => handleDelete(index)}>
                                            Delete
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            ) : (
                <p>No data available</p>
            )}

            <Dialog open={viewData !== null} onClose={closeViewModal}>
                <DialogTitle>View Data</DialogTitle>
                <DialogContent>
                    {viewData && (
                        <div>
                            <p>
                                <strong>First Name:</strong> {viewData.firstName}
                            </p>
                            <p>
                                <strong>Last Name:</strong> {viewData.lastName}
                            </p>
                            <p>
                                <strong>User Name:</strong> {viewData.userName}
                            </p>
                            <p>
                                <strong>Email:</strong> {viewData.email}
                            </p>
                            <p>
                                <strong>Mobile Number:</strong> {viewData.mobileNumber}
                            </p>
                            <p>
                                <strong>Password:</strong> {viewData.password}
                            </p>
                        </div>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={closeViewModal} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};

export default BasicForm1;
