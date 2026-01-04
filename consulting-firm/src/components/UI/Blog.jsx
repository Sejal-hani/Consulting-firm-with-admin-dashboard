import React, { useState } from "react";
import "../../styles/Blog.css";

import videoImg from "../../images/video.png";
import articleImg from "../../images/article.png";
import caseStudyImg from "../../images/case-study.png";

const blogData = [
{ imgUrl: videoImg, title: "Video Insights", desc: "Watch expert-led videos showcasing our solutions, processes, and real-world results." },
{ imgUrl: articleImg, title: "Expert Articles", desc: "Read in-depth articles on technology trends, digital transformation, and best practices." },
{ imgUrl: caseStudyImg, title: "Client Case Studies", desc: "Explore how we’ve helped businesses solve challenges and achieve measurable outcomes." },
];

const Blog = () => {
  const [active, setActive] = useState(1); // Start with the middle one

  const next = () => setActive((prev) => (prev === blogData.length - 1 ? 0 : prev + 1));
  const prev = () => setActive((prev) => (prev === 0 ? blogData.length - 1 : prev - 1));

  return (
    <section className="blog" id= 'blog'>
      <div className="container">
        <div className="blog__top-content">
          <h6 className="subtitle">Insights & Resources</h6>

<h2>Explore Insights, Case Studies & <span className="highlight">Expert Perspectives</span></h2>
        </div>

        <div className="blog__carousel">
          <button className="nav-btn left" onClick={prev}>‹</button>

          <div className="blog__track">
            {blogData.map((item, index) => {
              // Logic to determine if slide is active, left, or right
              let position = "nextSlide"; 
              if (index === active) {
                position = "activeSlide";
              } else if (
                index === active - 1 || 
                (active === 0 && index === blogData.length - 1)
              ) {
                position = "lastSlide";
              }

              return (
                <div
                  key={index}
                  className={`blog__item ${position}`}
                  onClick={() => setActive(index)} // Trigger on CLICK
                >
                  <h3>{item.title}</h3>
                  <div className="blog__img">
                    <img src={item.imgUrl} alt={item.title} />
                  </div>
                  <p className="blog__desc">{item.desc}</p>
                 <span className="learn__more">Read More →</span>

                </div>
              );
            })}
          </div>

          <button className="nav-btn right" onClick={next}>›</button>
        </div>
      </div>
    </section>
  );
};

export default Blog;