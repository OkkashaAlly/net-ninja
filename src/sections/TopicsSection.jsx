import React from "react";
import TextCenter from "../components/shared/TextCenter";
import picture from "../assets/kindle.png";
import Accordion from "../components/Accordion";

function TopicsSection() {
  return (
    <section id="topics">
      <div className="container-md">
        <TextCenter
          heading={"Inside the Book..."}
          text={"A quick glance at the topics you will learn"}
        />
        <div className="row my-5 g-5 justify-content-around align-items-center">
          <div className="col-6 col-lg-4">
            <img src={picture} className="img-fluid" alt="ebook" />
          </div>
          <div className="col-lg-6">
            <Accordion />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopicsSection;
