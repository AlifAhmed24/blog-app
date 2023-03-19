import React from "react";
import {Link} from 'react-router-dom'
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footerWrapper">
          <div className="navigation">
            <h1 className="footerHeading">Navigation</h1>
            <Link to="/">Home</Link>
            <Link to="/lifestyle">Life Style</Link>
            <Link to="/health">Health</Link>
            <Link to="/fashion">Fashion</Link>
            <Link to="/foodandcooking">Food and Cooking</Link>
            <Link to="/technology">Technology</Link>
            <Link to="/business">Business</Link>
            <Link to="/sports">Sports</Link>
            <Link to="/education">Education</Link>
          </div>
          <div className="related">
            <h1 className="footerHeading">Related</h1>
            <a href="/#hLpost">Recent Post</a>
            <a href="/#mVpost">Popular Post</a>
            <a href="#">All Post</a>
            <a href="#">Category</a>
            <a href="#">Search</a>
            <a href="#">Register</a>
            <a href="#">Login</a>
          </div>
          <div className="cotact">
            <h1 className="footerHeading">Contact</h1>
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
  );
}

export default Footer;
