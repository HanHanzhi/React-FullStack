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
        <div className="post" id="individual">
          <div className="title">{postObject.title}</div>
          <div className="body">{postObject.postText}</div>
          <div className="footer">{postObject.username}</div>
        </div>
      </div>
      <div className="rightSide">
        <div className="addCommentContainer">
          <input type="text" placeholder="Comment..." />
          <button>Add Comments</button>
        </div>
        <div className="listOfComments"></div>
      </div>
    </div>
  );
}

export default Post;
