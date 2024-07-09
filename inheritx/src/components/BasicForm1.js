import React, { useState } from "react";
import './BasicForm.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import Typography from '@mui/material/Typography';
import { Container, Box } from '@mui/material';

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
            const existingData = JSON.parse(localStorage.getItem('showData')) || [];
            existingData.push({ ...formData, errors: {} });
            localStorage.setItem('showData', JSON.stringify(existingData));
            alert("Data inserted successfully");
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
            alert("Please fill the form");
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>Form</Typography>
            <Box component="form" onSubmit={handleSubmit}>
                <TextField fullWidth margin="normal" label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} error={!!formData.errors.firstName} helperText={formData.errors.firstName} />
                <TextField fullWidth margin="normal" label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} error={!!formData.errors.lastName} helperText={formData.errors.lastName} />
                <TextField fullWidth margin="normal" label="User Name" name="userName" value={formData.userName} onChange={handleChange} error={!!formData.errors.userName} helperText={formData.errors.userName} />
                <TextField fullWidth margin="normal" label="Email" name="email" value={formData.email} onChange={handleChange} error={!!formData.errors.email} helperText={formData.errors.email} />
                <TextField fullWidth margin="normal" label="Mobile Number" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} error={!!formData.errors.mobileNumber} helperText={formData.errors.mobileNumber} />
                <TextField fullWidth margin="normal" label="Password" type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleChange} error={!!formData.errors.password} helperText={formData.errors.password}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={togglePasswordVisibility}>
                                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                <Button variant="contained" color="primary" type="submit">
                    Submit
                </Button>
            </Box>
        </Container>
    );
}

export default BasicForm;
