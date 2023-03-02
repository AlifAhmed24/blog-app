import React from "react";
import HomeSlider from "../home-slider/home-slider.jsx";
import RecentPost from "../recent-post/recent-post.jsx";
import PopulerPost from "../populer-post/populer-post.jsx";
import CategoryPost from "../category-post/category-post.jsx";
import "./home.css";



function Home() {
  return (
    <>
      <div className="container">
        <HomeSlider />
        <RecentPost 
        thumbnail1="https://thumbs.dreamstime.com/b/technology-screen-man-city-background-blurred-178329479.jpg"
        category1="TEHCNOLOGY"
        title1="Beyond Tickets: How Customer Support Teams Impact Revenue
                        (Featuring Litmus)"
        desc1="Join us for a webinar on March 9 at 2pm ET where Litmus and Help
                    Scout chat about how customer support teams can drive new business,
                    improve customer retention, and deepen brand engagement."

        thumbnail2="https://thumbs.dreamstime.com/b/technology-screen-man-city-background-blurred-178329479.jpg"
        category2="TEHCNOLOGY"
        title2="Beyond Tickets: How Customer Support Teams Impact Revenue
                        (Featuring Litmus)"
       

        thumbnail3="https://thumbs.dreamstime.com/b/technology-screen-man-city-background-blurred-178329479.jpg"
        category3="TEHCNOLOGY"
        title3="Beyond Tickets: How Customer Support Teams Impact Revenue
                        (Featuring Litmus)"
        />
        {/* <Ad /> */}
        <PopulerPost />
        <CategoryPost />
      </div>
    </>
  );
}

export default Home;
