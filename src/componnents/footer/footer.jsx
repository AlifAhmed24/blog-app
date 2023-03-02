import React from 'react';
import './footer.css';

function Footer(){
    return (
        <div className='footer'>
            <div className='container'>
                <div className='footerWrapper'>
                <div className='navigation'>
                <h1 className='footerHeading'>Navigation</h1>
                <a href="#">Home</a>
                <a href="#">Lif Style</a>
                <a href="#">Healt</a>
                <a href="#">Fashion</a>
                <a href="#">Food and Cooking</a>
                <a href="#">Business</a>
                <a href="#">Sport</a>
                <a href="#">Education</a>
            </div>
            <div className='related'>
                <h1 className='footerHeading'>Related</h1>
                <a href="#">Recent Post</a>
                <a href="#">Popular Post</a>
                <a href="#">All Post</a>
                <a href="#">Category</a>
                <a href="#">Search</a>
                <a href="#">Register</a>
                <a href="#">Login</a>
            </div>
            <div className='cotact'>
            <h1 className='footerHeading'>Contact</h1>
                <a href="#">topictrove@gmail.com</a>
                <a href="#">+0926546168655</a>
            </div>
            {/* <div className='newsletter'>
                <input type="text" placeholder="Type your email adress" name="newsletterInput" />
                <button type="submit" value="submit">Submit</button>

            </div>  */}
                </div>
            </div>
        </div>
    )
}

export default Footer;