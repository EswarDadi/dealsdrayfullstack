import React, { useState } from 'react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function CreateUser() {
    const [errorMessage, setErrorMessage] = useState("");

    const initialValues = {
        f_userName: "",
        f_Pwd: ""
    };

    const validationSchema = Yup.object().shape({
        f_userName: Yup.string().required("Required"),
        f_Pwd: Yup.string().required("Required")
    });

    const onSubmit = (data, { setSubmitting, resetForm }) => {
        axios.post("http://localhost:3008/auth", data)
            .then((response) => {
                console.log(response.data);
                setErrorMessage(""); // Clear any previous error messages
                resetForm();
            })
            .catch((error) => {
                if (error.response && error.response.data) {
                    setErrorMessage(error.response.data.error);
                } else {
                    setErrorMessage("An error occurred. Please try again.");
                }
            })
            .finally(() => {
                setSubmitting(false);
            });
    };

    return (
        <div className="createUserPage">
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className="formContainer">
                        <label>Username:</label>
                        <Field name="f_userName" autoComplete="off" placeholder="Enter Username..." id="inputCreateUser" />
                        <ErrorMessage name="f_userName" component="span" />
                        
                        <label>Password:</label>
                        <Field type="password" name="f_Pwd" autoComplete="off" placeholder="Enter Password..." id="inputCreateUser" />
                        <ErrorMessage name="f_Pwd" component="span" />
                        
                        <button type="submit" disabled={isSubmitting}>Submit</button>
                    </Form>
                )}
            </Formik>
            {errorMessage && <div className="errorMessage">{errorMessage}</div>}
        </div>
    );
}

export default CreateUser;
