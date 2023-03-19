import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Sidebar from "./sidebar/sidebar";
import Write from '../componnents/write/write.jsx';
import './adminDashboard.css'
import Post from './cpanel-post/post.jsx'

export default function AdminDashboard() {
  const [article, setArticle] = useState('');
  const [loading, setLoadinng] = useState(true);
 
  const cpanel = useLocation().pathname.split('/');
  const cPath = cpanel[cpanel.length - 1]
  console.log(cPath)
  const writePath = useLocation().pathname.split('/')[2];
  const articleCategory = useLocation().pathname.split('/')[3];

  useEffect(() => {
    const fethData = async () => {
      setLoadinng(true)
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}article/getall/category/${articleCategory}/views`)
        setArticle(res.data);
        setLoadinng(false)
      } catch (error) {
        setLoadinng(false)
      }
    }

    fethData();
  }, [articleCategory]);

 

  return (
    <div className="cpanelWrapper">
      <Sidebar />
      <div className="cpanel-content">
        {writePath === 'write' || cPath === "cpanel:201"? <Write /> :
          <div>
            <div className="cpanelPostWrapper">
              {loading ? <h1>Loading</h1> :
                (article.map((value, index) => {
                  return (
                    <Post
                      key={index}
                      id={value._id}
                      thumbnail={value.thumbnail}
                      category={value.category}
                      title={value.title}
                      views={value.views}
                    />
                  )
                }))
              }
            </div>
          </div>
        }
      </div>
    </div>
  )
}