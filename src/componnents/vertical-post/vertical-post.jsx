import React from "react";
import { Link } from "react-router-dom";
import "./vertical-post.css";

function VerticalPost(props) {
  return (
    <>
      <Link to={`/${props.category}/${props.id}`} className="verticalPost">
        <div className="imgWrapper">
          <img src={props.thumbnail} alt="" />
        </div>
        <div className="postInfo">
          <span>{props.category}</span>
          <h1>{props.title}</h1>
        </div>
      </Link>
    </>
  );
}

export default VerticalPost;
