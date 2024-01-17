import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Post() {
  let { id } = useParams(); //useParams hook allow us to get the value that was passed in URL
  //the "id" variable name here must match the :id name in the route
  const [postObject, setPostObject] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3001/posts/byId/${id}`).then((response) => {
      setPostObject(response.data);
    });
  });

  return (
    <div className="postPage">
      <div className="leftSide">
        <div>{postObject.username}</div>
        <div>{postObject.postText}</div>
        <div>{postObject.title}</div>
      </div>
    </div>
  );
}

export default Post;
