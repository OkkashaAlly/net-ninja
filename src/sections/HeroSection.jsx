import React from "react";
import bookCover from "../assets/ebook-cover.png";
import ToolTip from "../components/ToolTip";

function HeroSection() {
  return (
    <section id="hero" className="hero__section">
      <div className="container-lg">
        <div className="row justify-content-center">
          <div className="col-md-5 text-center text-md-start mb-md-0 mb-3">
            <div className="hero__section_info">
              <h1 className="display-2">Black-Belt</h1>
              <h2 className="display-5 text-muted">Your Coding Skills</h2>
              <p className="lead my-4 text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <a href="#pricing" className="btn btn-secondary btn-lg">
                Buy Now
              </a>
              <a
                className="d-block mt-3"
                data-bs-toggle="offcanvas"
                href="#sidebar"
                role="button"
                aria-controls="sidebar"
              >
                Explore my other books
              </a>
            </div>
          </div>
          <div className="col-md-5 text-center">
            <ToolTip placement={"bottom"} text={"Net Ninja Book Cover"}>
              <img className="img-fluid" src={bookCover} alt="ebook" />
            </ToolTip>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
