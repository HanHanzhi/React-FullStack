import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";

function Registration() {
  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("you must input a title"),
    password: Yup.string().min(3).max(15).required(),
  });
  const onSubmit = (data) => {
    axios.post("http://localhost:3001/auth", data).then((response) => {
      console.log(response.data);
    });
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label>Username: </label>
          <ErrorMessage name="username" component="span" />
          <Field
            id="inputCreatePost"
            name="username"
            placeholder="(EX..John123)"
          />
          <label>Password: </label>
          <ErrorMessage name="password" component="span" />
          <Field
            id="inputCreatePost"
            type="password"
            name="password"
            placeholder="Your Password..."
          />
          <button type="submit">Register</button>
        </Form>
      </Formik>
    </div>
  );
}

export default Registration;
