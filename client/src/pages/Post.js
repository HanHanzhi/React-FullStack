import React from "react";
import { useParams } from "react-router-dom";

function Post() {
  let { id } = useParams(); //useParams hook allow us to get the value that was passed in URL
  //the "id" variable name here must match the :id name in the route
  return <div>{id}</div>;
}

export default Post;
