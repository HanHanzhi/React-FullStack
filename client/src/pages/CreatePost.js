import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

function CreatePost() {
  return (
    <div>
      <Formik initialValues={0} onSubmit={0} validationSchema={0}>
        <Form>
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
        </Form>
      </Formik>
    </div>
  );
}

export default CreatePost;
