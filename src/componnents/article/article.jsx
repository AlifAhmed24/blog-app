import React from "react";
import { useLocation } from "react-router-dom";
import "./article.css";

function Article() {

    const location = useLocation();

    console.log(location.pathname.split('/')[2])
    
    
  return (
    <div className="container">
      <div className="articleWrapper">
        <div className="article-header">
          <div className="article-writer">
            <div className="avatar">
                <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt='' />
            </div>
            <span>Written by <b>Alex </b></span>
          </div>
          <h1>
            Beyond Tickets: How Customer Support Teams Impact Revenue (Featuring
            Litmus)
          </h1>
        </div>
        <div className="article-thumbnail">
          <img
            src="https://thumbs.dreamstime.com/b/technology-screen-man-city-background-blurred-178329479.jpg"
            alt=""
          />
        </div>
        <div className="article-paragraph">
          <p>
            A possible US ban on TikTok took a step forward after a US House
            committee advanced a bill that would empower the president to
            prohibit the popular social media app along with other apps owned by
            companies based in China. The bill known as the Deterring America’s
            Technological Adversaries (DATA) Act would give the president
            authority to ban foreign apps controlled or influenced by China and
            to sanction companies or individuals with ties to such apps. …
          </p>
        </div>
        <div className="related-article"></div>
      </div>
    </div>
  );
}

export default Article;
