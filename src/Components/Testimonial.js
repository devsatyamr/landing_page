import React from "react";
import ProfilePic from "../Assets/Devsatyam.jpeg";
import ProfilePic1 from "../Assets/Suvadra2.jpg";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Feedback</p>
        <h1 className="primary-heading">What Is Your Opinion </h1>
        <p className="primary-text">
          Share Your Opinions with us. We respect constructive criticisms.
        </p>
      </div>
      <div className="feed">
        <div className="testimonial-section-bottom">
        
        <img className="pp" src={ProfilePic} alt="" />
        <p>
          INSTITUTE OF ENGINEERING & MANAGEMENT
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Devsatyam Ray</h2>
      </div>
        <div className="testimonial-section-bottom">
        
        <img className="pp" src={ProfilePic1} alt="" />
        <p>
          VIDYASAGAR COLLEGE
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Suvadra Roy Chowdhury</h2>
      </div>
    </div>
    </div>
  );
};

export default Testimonial;
