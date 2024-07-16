import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';

const UserProfileForm1 = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            bio: '',
        },

        validationSchema: Yup.object({
            name: Yup.string().required('Enter your Name').min(3, 'Name should be be at least 2 characters long'),
            email: Yup.string().email('Invalid email Format').required('Enter your Email'),
            bio: Yup.string().max(300, 'Bio must be 300 characters'),
        }),

        onSubmit: (values) => {
            console.log('Form data', values);
        },
    });

    return (
        <div>
            <h1>Student Profile</h1>
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
                    {formik.touched.name && formik.errors.name ? (
                        <div className="error">{formik.errors.name}</div>
                    ) : null}
                </div><br />
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
                    {formik.touched.email && formik.errors.email ? (
                        <div className="error">{formik.errors.email}</div>
                    ) : null}
                </div><br />
                <div>
                    <label htmlFor="bio">Bio:</label>
                    <textarea id="bio" name="bio" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.bio} />
                    {formik.touched.bio && formik.errors.bio ? (
                        <div className="error">{formik.errors.bio}</div>
                    ) : null}
                </div><br />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default UserProfileForm1;