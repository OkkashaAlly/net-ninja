import React from "react";
import ListGroup from "../components/ListGroup";
import TextCenter from "../components/shared/TextCenter";

function ReviewsSection() {
  const icon = <i className="bi bi-stars altdark"></i>;

  return (
    <section id="reviews" className="altlight">
      <div className="container-lg">
        <TextCenter
          icon={icon}
          heading={"Book Review"}
          text={"What my student have said about the book..."}
        />
        <div className="row justify-content-center my-5">
          <div className="col-lg-8">
            <ListGroup />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReviewsSection;
