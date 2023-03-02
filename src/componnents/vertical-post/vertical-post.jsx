import React from "react";
import './vertical-post.css';

function VerticalPost(props){
    return (
        <a href="#" className="verticalPost">
            <div className="imgWrapper">
                <img src={props.thumbnail} alt="" />
            </div>
            <div className="postInfo">
                <span>{props.category}</span>
                <h1>{props.title}</h1>
            </div>
        </a>
    )
}


export default VerticalPost;