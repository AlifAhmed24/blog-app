import React from 'react';
import SectionHeading from '../../section-heading/section-heading';
import VerticalPost from '../../vertical-post/vertical-post.jsx';
import './category.css';

function Category(props){
    return (
        <div class="category-wrapper">
            <SectionHeading heading={props.heading}/>
            <div className='v-p-g'>
            <VerticalPost 
            thumbnail={props.firstPostThumbnail}
            category={props.firstPostCategory}
            title={props.firstPostTitle}
            />

            <VerticalPost 
            thumbnail={props.secondPostThumbnail}
            category={props.secondPostCategory}
            title={props.secondPostTitle}
            />

            <VerticalPost 
            thumbnail={props.thirdPostThumbnail}
            category={props.thirdPostCategory}
            title={props.thirdPostTitle}
            />
            
            
            </div>
        </div>
    )
}

export default Category;