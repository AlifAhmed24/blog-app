import React, { useState, useEffect } from "react";
import axios from "axios";
import HomeSlider from "../home-slider/home-slider.jsx";
import CategoryPost from "../category-post/category-post.jsx";
import VerticalPost from "../vertical-post/vertical-post.jsx";
import SectionHeading from "../section-heading/section-heading.jsx";
import Category from "../category-post/category/category.jsx";
import Loading from "../loading/loading.jsx";
import "./home.css";




function Home() {
  const [homeLatestPost, sethomeLatestPost] = useState("");
  const [mostViews, setMostViews] = useState("");
  console.log(homeLatestPost)
  
  const [isLoading, setIsLoading] = useState(true);
  console.log(process.env.REACT_APP_API_URL)
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(`${process.env.REACT_APP_API_URL}article/`);
        sethomeLatestPost(res.data);

        const res2 = await axios.get(`${process.env.REACT_APP_API_URL}article/get/views/`);
        setMostViews(res2.data);

        setIsLoading(false);
      } catch (error) {
        setIsLoading(true);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="container">
        {isLoading ? (
          <Loading heading="Latest Post" />
        ) : (
          <div class="category-wrapper">
            <SectionHeading heading="Latest Post" />
            <div id="hLpost" className="v-p-g">
              {homeLatestPost.map((latest, index) => (
                <VerticalPost
                  key={latest._id}
                  id={latest._id}
                  thumbnail={latest.thumbnail}
                  category={latest.category}
                  title={latest.title}
                />
              ))}
            </div>
          </div>
        )}

        

        {isLoading ? (
          <Loading heading="Most Views" />
        ) : (
          <div id="mVpost"  class="category-wrapper">
            <SectionHeading heading="Most Views" />
            <div className="v-p-g">
              {mostViews.map((mostViews, index) => (
                <VerticalPost
                  key={mostViews._id}
                  id={mostViews._id}
                  thumbnail={mostViews.thumbnail}
                  category={mostViews.category}
                  title={mostViews.title}
                />
              ))}
            </div>
          </div>
        )}
       

        <CategoryPost />
      </div>
    </>
  );
}

export default Home;
