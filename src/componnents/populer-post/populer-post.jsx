import React from "react";
import "./populer-post.css";
import SectionHeading from "./../section-heading/section-heading.jsx";
import Post from "./post/post.jsx";

function PopulerPost() {
  return (
    <div className="popular-post">
      <SectionHeading heading="Populer Post" />
      <div className="popular-post-wrapper">
        <div className="post">
          <Post
            img="https://i.ytimg.com/vi/pjjQivSaMmY/maxresdefault.jpg"
            title="How to create a email with your computer"
          />

          <Post
            img="https://e0.365dm.com/23/02/768x432/skysports-kane-williamson-cricket_6071388.jpg?20230227031536"
            title="Williamson makes history as Black C"
          />

          <Post
            img="https://news.temple.edu/sites/news/files/screen-shot-2022-06-29-at-10.54.25-am.png?v=228541"
            title="6 Business Newspapers You SHould Read To Keep Yourself Updated"
          />
        </div>
        {/* <div className="ads">Ads</div> */}
      </div>
    </div>
  );
}

export default PopulerPost;
