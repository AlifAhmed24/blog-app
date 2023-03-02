import React from 'react';
import {Link} from 'react-router-dom';
import './primary-post.css'

function PrimaryPost(props) {
    return (
        <Link to="/technology/sfdsfdsfsdfsdfsdf" target="_blank" className="primary-post">
            <div className="p-p">
                <div className="img-wrapper">
                <img
                    src={props.thumbnail}
                    alt="image"
                />
                </div>
                <div className="p-p-h">
                    <span>{props.category}</span>
                    <h1>{props.title}</h1>
                </div>
                <p>{props.desc}</p>
            </div>
        </Link>
    )
}


export default PrimaryPost;