import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import "./article.css";
import VerticalPost from "./../vertical-post/vertical-post";
import Loading from "../loading/loading";
import SectionHeading from "../section-heading/section-heading";

function Article() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const [article, setArticle] = useState("");
  
  const [topViewsC, setTopViewsC] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const article = await axios.get(
          "http://localhost:8800/api/article/get/id/" + path
        );
        setArticle(article.data);
        

        const topViews = await axios.get(
          "http://localhost:8800/api/article/get/category/"+ article.data.category +"/views"

        );
        setTopViewsC(topViews.data);

        const views = await axios.put(
          "http://localhost:8800/api/article/"+ path +"/view"

        );
        setLoading(false);
      } catch (error) {
        console.log(error)
      }
    };

    fetchData();
  }, [path]);

  return (
    <div className="article-container">
      <div className="articleWrapper">
        <div className="article-header">
          <div className="article-writer">
            <div className="avatar">
              <img
                src="https://img.freepik.com/free-vector/young-man-multitasking-concept_52683-31753.jpg?w=1380&t=st=1679225761~exp=1679226361~hmac=c07d617991df1f3f1eb921038fdc808193dfb1f9199fac469359a3215cb46f66"
                alt=""
              />
            </div>
            <span>
              Written by <b>{article.writer}</b> at{" "}
              {new Date(article.createdAt).toLocaleDateString()}
            </span>
          </div>
          <h1>{article.title}</h1>
        </div>
        <div className="article-thumbnail">
          <img src={article.thumbnail} alt="" />
        </div>
        <div className="article-paragraph">
          <div
            class="p"
            dangerouslySetInnerHTML={{ __html: article.content }}
          ></div>
        </div>
        <div className="related-article">
          {loading ? (
            <Loading heading="Latest Post" />
          ) : (
            <div class="category-wrapper">
              <SectionHeading heading="Related Post" />
              <div className="v-p-g">
                {topViewsC.map((topViewsC, index) => (
                  <VerticalPost
                    key={topViewsC._id}
                    id={topViewsC._id}
                    thumbnail={topViewsC.thumbnail}
                    category={topViewsC.category}
                    title={topViewsC.title}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Article;
