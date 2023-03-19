import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import "./post.css";

function Post(props) {


    function handleDelete(){
        const deletePost = async () => {
          try {
            const del = await axios.delete(`${process.env.REACT_APP_API_URL}article/delete/${props.id}`);
            console.log('deleted')
          } catch (error) {
            console.log(error)
          }
          console.log(props.id)
          window.location.reload()
          
        }
        deletePost();
    }





    return (
        <div className="verticalPost">
        <div className="postAction">
                <h1>{props.views} views</h1>
                <div className="action">
                    {/* <Link to={`/cpanel:201/update/${props.id}`}>
                        <span class="material-symbols-outlined">edit</span>
                    </Link> */}
                   
                        <span onClick={handleDelete} class="material-symbols-outlined">delete</span>
                    
                </div>
            </div>
            <Link to={`/${props.category}/${props.id}`} >
                <div className="imgWrapper">
                    <img src={props.thumbnail} alt="" />
                </div>
                <div className="postInfo">
                    <span>{props.category}</span>
                    <h1>{props.title}</h1>
                </div>
            </Link>
            
        </div>
    );
}

export default Post;
