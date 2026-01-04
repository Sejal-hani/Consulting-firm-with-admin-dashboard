import React from "react";
import "../../styles/Blog.css";

import videoImg from "../../images/video.png";
import articleImg from "../../images/article.png";
import caseStudyImg from "../../images/case-study.png";

const blogData = [
  {
    imgUrl: videoImg,
    title: "Video",
    desc: "To know about our work, watch some videos.",
    linkUrl: "#",
  },
  {
    imgUrl: articleImg,
    title: "Articles",
    desc: "Do you want to read articles about our work?",
    linkUrl: "#",
  },
  {
    imgUrl: caseStudyImg,
    title: "Case Study",
    desc: "Check out case studies of our previous work.",
    linkUrl: "#",
  },
];

const Blog = () => {
  return (
    <section className="blog">
      <div className="container">
        {/* Top Content */}
        <div className="blog__top-content">
          <h6 className="subtitle">Our Blog</h6>
          <h2>
            Let's have a look from our <span className="highlight">Blog</span>
          </h2>
        </div>

        {/* Blog Cards */}
        <div className="blog__wrapper">
          {blogData.map((item, index) => (
            <div className="blog__item" key={index}>
              {/* INNER WRAPPER — THIS IS IMPORTANT */}
              <div className="blog__inner">
                <h3>{item.title}</h3>

                <div className="blog__img">
                  <img src={item.imgUrl} alt={item.title} />
                </div>

                <p className="description blog__desc">{item.desc}</p>

                <a href={item.linkUrl} className="learn__more">
                  <i className="ri-arrow-right-line"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
