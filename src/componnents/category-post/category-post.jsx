import React, { useEffect, useState } from "react";
import axios from "axios";
import Category from "./category/category.jsx";
import Ad from "../horizontal-ads/ad.jsx";
import "./category-post.css";
import Loading from "../loading/loading.jsx";
import VerticalPost from "../vertical-post/vertical-post.jsx";
import SectionHeading from './../section-heading/section-heading';


function CategoryPost() {
  const [lifeStyle, setLifeStyle] = useState([]);
  const [health, setHealth] = useState("");
  const [fashion, setFashion] = useState("");
  const [food, setFood] = useState("");
  const [technology, setTechnology] = useState("");
  const [business, setBusiness] = useState("");
  const [sports, setSports] = useState("");
  const [education, setEducation] = useState("");
  const [loading, setLoading] = useState(true);
  console.log(health)

  useEffect(() => {
    const fetchLifeStyle = async () => {
      try {
        setLoading(true);
        const lifeStyle = await axios.get(`${process.env.REACT_APP_API_URL}article/get/category/Life Style`);
        setLifeStyle(lifeStyle.data);

        const health = await axios.get(`${process.env.REACT_APP_API_URL}article/get/category/Health`);
        setHealth(health.data);

        const fashion = await axios.get(`${process.env.REACT_APP_API_URL}article/get/category/Fashion`);
        setFashion(fashion.data);

        const food = await axios.get(`${process.env.REACT_APP_API_URL}article/get/category/Food And Cooking`);
        setFood(food.data);

        const technology = await axios.get(`${process.env.REACT_APP_API_URL}article/get/category/Technology`);
        setTechnology(technology.data);

        const business = await axios.get(`${process.env.REACT_APP_API_URL}article/get/category/Business`);
        setBusiness(business.data);

        const sports = await axios.get(`${process.env.REACT_APP_API_URL}article/get/category/Sports`);
        setSports(sports.data);

        const education = await axios.get(`${process.env.REACT_APP_API_URL}article/get/category/Education`);
        setEducation(education.data);

        setLoading(false);
      } catch (error) {
        console.log(error)
      }
    };

    fetchLifeStyle();
  }, []);





  return (
    <div className="categoryWrapper">
      <h1>Discover the latest in...</h1>
      {loading ? (
          <Loading heading="Life Style" />
        ) : (
          <div class="category-wrapper">
            <SectionHeading heading="Life Style" />
            <div className="v-p-g">
              {lifeStyle.map((lifeStyle, index) => (
                <VerticalPost
                  key={lifeStyle._id}
                  id={lifeStyle._id}
                  thumbnail={lifeStyle.thumbnail}
                  category={lifeStyle.category}
                  title={lifeStyle.title}
                />
              ))}
            </div>
          </div>
        )}


        {loading ? (
          <Loading heading="Health" />
        ) : (
          <div class="category-wrapper">
            <SectionHeading heading="Health" />
            <div className="v-p-g">
              {health.map((health, index) => (
                <VerticalPost
                  key={health._id}
                  id={health._id}
                  thumbnail={health.thumbnail}
                  category={health.category}
                  title={health.title}
                />
              ))}
            </div>
          </div>
        )}
        

      <Ad />

      {loading ? (
          <Loading heading="Fashion" />
        ) : (
          <div class="category-wrapper">
            <SectionHeading heading="Fashion" />
            <div className="v-p-g">
              {fashion.map((fashion, index) => (
                <VerticalPost
                  key={fashion._id}
                  id={fashion._id}
                  thumbnail={fashion.thumbnail}
                  category={fashion.category}
                  title={fashion.title}
                />
              ))}
            </div>
          </div>
        )}

        {loading ? (
          <Loading heading="Food And Cooking" />
        ) : (
          <div class="category-wrapper">
            <SectionHeading heading="Food And Cooking" />
            <div className="v-p-g">
              {food.map((food, index) => (
                <VerticalPost
                  key={food._id}
                  id={food._id}
                  thumbnail={food.thumbnail}
                  category={food.category}
                  title={food.title}
                />
              ))}
            </div>
          </div>
        )}


      <Ad />

      {loading ? (
          <Loading heading="Technology" />
        ) : (
          <div class="category-wrapper">
            <SectionHeading heading="Technology" />
            <div className="v-p-g">
              {technology.map((technology, index) => (
                <VerticalPost
                  key={technology._id}
                  id={technology._id}
                  thumbnail={technology.thumbnail}
                  category={technology.category}
                  title={technology.title}
                />
              ))}
            </div>
          </div>
        )}


        {loading ? (
          <Loading heading="Business" />
        ) : (
          <div class="category-wrapper">
            <SectionHeading heading="Business" />
            <div className="v-p-g">
              {business.map((business, index) => (
                <VerticalPost
                  key={business._id}
                  id={business._id}
                  thumbnail={business.thumbnail}
                  category={business.category}
                  title={business.title}
                />
              ))}
            </div>
          </div>
        )}

      <Ad />

      {loading ? (
          <Loading heading="Sports" />
        ) : (
          <div class="category-wrapper">
            <SectionHeading heading="Sports" />
            <div className="v-p-g">
              {sports.map((sports, index) => (
                <VerticalPost
                  key={sports._id}
                  id={sports._id}
                  thumbnail={sports.thumbnail}
                  category={sports.category}
                  title={sports.title}
                />
              ))}
            </div>
          </div>
        )}

        <Ad />

        {loading ? (
          <Loading heading="Education" />
        ) : (
          <div class="category-wrapper">
            <SectionHeading heading="Education" />
            <div className="v-p-g">
              {education.map((education, index) => (
                <VerticalPost
                  key={education._id}
                  id={education._id}
                  thumbnail={education.thumbnail}
                  category={education.category}
                  title={education.title}
                />
              ))}
            </div>
          </div>
        )}
      
    </div>
  );
}

export default CategoryPost;
