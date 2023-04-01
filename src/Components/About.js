import React from "react";
import AboutBackground from "../Assets/iPhone 14 - 1.png";
import AboutBackgroundImage from "../Assets/61d2f93392b57c0004c64747.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          NEXT IS NEW
        </h1>
        <p className="primary-text">
        Welcome to our mobile shop, where you can find the latest and greatest mobile devices on the market! Our shop is a one-stop destination for all your mobile needs, whether you're looking for a smartphone, tablet, or accessories to enhance your mobile experience. Our knowledgeable and friendly staff are always on hand to help you find the perfect device to fit your lifestyle and budget.  
        </p>
        <p className="primary-text">
        We stock a wide range of brands and models, so you can be sure to find the perfect fit for you.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button1">Learn More</button>
          <button className="watch-video-button" >
            <BsFillPlayCircleFill /> Watch Our Latest Model
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
