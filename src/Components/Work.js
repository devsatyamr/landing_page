import React from "react";
import Latest from "../Assets/pngwing.com (4).png";
import Replace from "../Assets/pngwing.com (2).png";
import allitems from "../Assets/pngwing.com (3).png";

const Work = () => {
  const workInfoData = [
    {
      image: Latest,
      title: "Latest Models",
      text: "Latest and fresh models are available at the earliest.",
    },
    {
      image: Replace,
      title: "Replace old, Get new!",
      text: "Replace your old phones and get a new mobile at a discount.",
    },
    {
      image: allitems,
      title: "All in one place",
      text: "All items of mobile repairing are available at our store. BUY NOW!",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Who we are?</p>
        <h1 className="primary-heading">Introduction</h1>
        <p className="primary-text">
          We provide latest models of mobile phones and also second hand phones which are in a very good condition.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
