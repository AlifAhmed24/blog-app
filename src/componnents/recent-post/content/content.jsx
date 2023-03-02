import React from "react";
import PrimaryPost from "./post/primary-post/primary-post.jsx"
import SecondaryPost from "./post/secondary-post/secondary-post.jsx";
import ThirdPost from './post/third-post/third-post.jsx'
import "./content.css";
import Category from './../../category-post/category/category';

function Content(props) {
  return (
    
      <div className="content">
        <PrimaryPost 
          thumbnail={props.thumbnail1}
          category={props.category1}
          title={props.title1}
          desc={props.desc1}
        />
        <SecondaryPost 
          thumbnail={props.thumbnail2}
          category={props.category2}
          title={props.title2}
        />
        
        <ThirdPost 
          thumbnail={props.thumbnail3}
          category={props.category3}
          title={props.title3}
        />
    </div>
  );
}

export default Content;
