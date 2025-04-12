import React from "react";
import { Link } from "react-router-dom";

function Welcome(){
  return (
    <div className="Welcome">
      
      <div className="heading">
        <p style={{ margin: 0 }}>BODH</p>
        <nav className="navbar">
            <Link className="anc" to="/login">Login</Link>
            <Link className="anc" to="/signup">Signup</Link>
        </nav>
      </div>

      
      <section className="hero">
        <p className="l1">Welcome to BODH</p>
        <p className="l2">Your gateway to knowledge mastery.</p>
      </section>

      
      <div className="images">
        <div className="img1">
          <p>Interactive Courses</p>
        </div>
        <div className="img2">
          <p>Learn from Industry-Level Experts</p>
        </div>
        <div className="img3">
          <p>Access to Unlimited Resources</p>
        </div>
      </div>

      
      <footer>
        <p style={{ margin: 0 }}>&copy; 2025 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Welcome;
