import React from "react";
import SectionHeading from "../section-heading/section-heading.jsx";
import Ad from "../horizontal-ads/ad.jsx";
import Content from "./content/content.jsx";
import "./recent-post.css";

function RecentPost(props) {
  return (
    <div className="recent-post">
      <SectionHeading heading="Recent Post" />
      <Content
        thumbnail1={props.thumbnail1}
        category1={props.category1}
        title1={props.title1}
        desc1={props.desc1}

        thumbnail2={props.thumbnail2}
        category2={props.category2}
        title2={props.title2}
        
       

        thumbnail3={props.thumbnail3}
        category3={props.category3}
        title3={props.title3}
        
       
      />
      <Ad />
    </div>
  );
}

export default RecentPost;
