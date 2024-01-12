import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

function CreatePost() {
  const initialValues = {
    title: "",
    postText: "",
    username: "",
  };

  const onSubmit = (data) => {
    console.log(data);
  };
  //formik automatically passess the data as a parameter to this function

  return (
    <div className="createPostPage">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={0}
      >
        <Form className="formContainer">
          <label>Title: </label>
          <Field id="inputCreatePost" name="title" placeholder="(EX..Title)" />
          <label>Post: </label>
          <Field
            id="inputCreatePost"
            name="postText"
            placeholder="(EX..Post)"
          />
          <label>Username: </label>
          <Field
            id="inputCreatePost"
            name="username"
            placeholder="(EX..John123)"
          />
          <button type="submit">Create Post</button>
        </Form>
      </Formik>
    </div>
  );
}

export default CreatePost;
