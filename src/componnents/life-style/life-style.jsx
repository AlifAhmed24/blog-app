import React, { useEffect, useState } from "react";
import axios from "axios";
import "./life-style.css";
import SectionHeading from "../section-heading/section-heading";
import HorizontalPost from "../horizontal-post/horizontal-post";
import Category from "./../category-post/category/category";
import Loading from "../loading/loading";

function LifeStyle() {
  const [mostViews, setMostViews] = useState("");
  const [latest, setLatest] = useState("");
  const [allArticle, setAllArticle] = useState("");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatest = async () => {
      try {
        setLoading(true);
        const latest = await axios.get(
          `${process.env.REACT_APP_API_URL}article/get/category/Life Style`
        );
        setLatest(latest.data);
        const mostViews = await axios.get(
          `${process.env.REACT_APP_API_URL}article/get/category/Life Style/views`
        );
        setMostViews(mostViews.data);
        const all = await axios.get(
          `${process.env.REACT_APP_API_URL}article/getAll/category/Life Style/views`
        );
        setAllArticle(all.data);
        setLoading(false);
      } catch (error) {
        setLoading(true);
      }
    };

    fetchLatest();
  }, []);

  return (
    <>
      <div className="container">
        <div className="lifeStyleWrapper">
          <div className="header">
            <div className="header-icon">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7ShkOWVLRTefW_Bjijoh1mRXeVgt0dgHm5tSV0J2w9-d934P4qTVEEZ3oMWp-3mkfLOY&usqp=CAU" />
            </div>
            <h1>Life Style</h1>
          </div>

          {loading ? (
            <Loading heading="Latest Post" />
          ) : (
            <Category
              heading="Latest Post"
              firstPostId={latest[0]._id}
              firstPostThumbnail={latest[0].thumbnail}
              firstPostCategory={latest[0].category}
              firstPostTitle={latest[0].title}
              secondPostId={latest[1]._id}
              secondPostThumbnail={latest[1].thumbnail}
              secondPostCategory={latest[1].category}
              secondPostTitle={latest[1].title}
              thirdPostId={latest[0]._id}
              thirdPostThumbnail={latest[0].thumbnail}
              thirdPostCategory={latest[0].category}
              thirdPostTitle={latest[0].title}
            />
          )}

          {loading ? (
            <Loading heading="Most Popular Post" />
          ) : (
            <Category
              heading="Most Views"
              firstPostId={mostViews[0]._id}
              firstPostThumbnail={latest[0].thumbnail}
              firstPostCategory={mostViews[0].category}
              firstPostTitle={mostViews[0].title}
              secondPostId={mostViews[1]._id}
              secondPostThumbnail={mostViews[1].thumbnail}
              secondPostCategory={mostViews[1].category}
              secondPostTitle={mostViews[1].title}
              thirdPostId={mostViews[0]._id}
              thirdPostThumbnail={mostViews[0].thumbnail}
              thirdPostCategory={mostViews[0].category}
              thirdPostTitle={mostViews[0].title}
            />
          )}

          {loading ? <h1>Loading</h1> :
            <div className="mainPostWrapper">
              <SectionHeading heading="Life Style" />
              <div className="horizontalPostWrapper">
                {allArticle.map((value, index) => {
                  return (
                    <HorizontalPost
                      id={value._id}
                      thumbnail={value.thumbnail}
                      writer={value.writer}
                      title={value.title}
                      sumary={value.sumary}
                    />
                  )
                })}
              </div>
            </div>
          }


        </div>
      </div>
    </>
  );
}

export default LifeStyle;
