import React from 'react';
import './post.css';

function Post(props){
    return (
        <a href="#" className='vertical-post'>
            <div className='thumbnail'>
                <img src={props.img} alt="" />
            </div>
            <div className='info'>
                <h1>{props.title}</h1>
            </div>
        </a>
    )
}

export default Post;