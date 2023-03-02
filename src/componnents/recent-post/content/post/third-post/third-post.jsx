import React from "react"
import './third-post.css';
import Category from './../../../../category-post/category/category';

function ThirdPost(props){
    return (
        <a href="#" className="t-p">
          <div className="t-p-i-r">
            <img
              src={props.thumbnail}
              alt="image" />
          </div>
          <span>{props.category}</span>
          <h1>{props.title}</h1>
        </a>
      
    )
}

export default ThirdPost;