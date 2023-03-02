import React from "react";
import "../life-style/life-style.css";
import RecentPost from "../recent-post/recent-post.jsx";
import PopulerPost from "../populer-post/populer-post";
import SectionHeading from "../section-heading/section-heading";
import HorizontalPost from "../horizontal-post/horizontal-post";

function FoodAndCooking() {
  return (
    <>
      <div className="container">
        <div className="lifeStyleWrapper">
          <div className="header">
            <div className="header-icon">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7ShkOWVLRTefW_Bjijoh1mRXeVgt0dgHm5tSV0J2w9-d934P4qTVEEZ3oMWp-3mkfLOY&usqp=CAU" />
            </div>
            <h1>Food and Cooking</h1>
          </div>
          <RecentPost
            thumbnail1="https://thumbs.dreamstime.com/b/technology-screen-man-city-background-blurred-178329479.jpg"
            category1="FOOD AND COOKING"
            title1="Beyond Tickets: How Customer Support Teams Impact Revenue
                        (Featuring Litmus)"
            desc1="Join us for a webinar on March 9 at 2pm ET where Litmus and Help
                    Scout chat about how customer support teams can drive new business,
                    improve customer retention, and deepen brand engagement."
            thumbnail2="https://thumbs.dreamstime.com/b/technology-screen-man-city-background-blurred-178329479.jpg"
            category2="FOOD AND COOKING"
            title2="Beyond Tickets: How Customer Support Teams Impact Revenue
                        (Featuring Litmus)"
            thumbnail3="https://thumbs.dreamstime.com/b/technology-screen-man-city-background-blurred-178329479.jpg"
            category3="FOOD AND COOKING"
            title3="Beyond Tickets: How Customer Support Teams Impact Revenue
                        (Featuring Litmus)"
          />

          <PopulerPost />
          <div className="mainPostWrapper">
            <SectionHeading heading="Food and Cooking" />
            <HorizontalPost />
          </div>
        </div>
      </div>
    </>
  );
}

export default FoodAndCooking;
