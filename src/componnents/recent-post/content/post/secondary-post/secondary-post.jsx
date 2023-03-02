import React from "react";
import './secondary-post.css';
import Category from './../../../../category-post/category/category';

function SecondaryPost(props){
    return (
        <a href="#" className="s-p">
          <div className="s-p-i-r">
            <img
              src={props.thumbnail}
              alt="image"
            />
          </div>
          <span>{props.category}</span>
          <h1>{props.title}</h1>
        </a>
    )
}

export default SecondaryPost;