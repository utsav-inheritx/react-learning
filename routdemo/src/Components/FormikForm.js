import React from "react";
import './FormikForm.css';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const UserProfileForm = () => {

    const initialValues = {
        name: '',
        email: '',
        bio: '',
    };

    const validationSchema = Yup.object({
        name: Yup.string().required('Enter your Name').min(3, 'Name should be more than 2 characters'),
        email: Yup.string().email('Invalid email Format').required('Enter your Email'),
        bio: Yup.string().max(300, 'Bio must be 300 characters'),
    });

    const onSubmit = (values) => {
        console.log('Form data', values);
    };

    return (
        <div>
            <h1>Customer Profile</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
                <Form>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <Field type="text" id="name" name="name" />
                        <ErrorMessage name="name" component="div" className="error" />
                    </div><br />
                    <div>
                        <label htmlFor="email">Email:</label>
                        <Field type="email" id="email" name="email" />
                        <ErrorMessage name="email" component="div" className="error" />
                    </div><br />
                    <div>
                        <label htmlFor="bio">Bio:</label>
                        <Field as="textarea" id="bio" name="bio" />
                        <ErrorMessage name="bio" component="div" className="error" />
                    </div>
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    );
};

export default UserProfileForm;