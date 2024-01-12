import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

function CreatePost() {
  return (
    <div className="createPostPage">
      <Formik initialValues={0} onSubmit={0} validationSchema={0}>
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
