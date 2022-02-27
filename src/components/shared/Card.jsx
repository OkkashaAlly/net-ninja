import React from "react";

function Card({ card }) {
  return (
    <div
      className={`card border-${
        card.border.width +
        (card.border.width > 0 ? " border-" + card.border.color : "")
      }`}
    >
      {" "}
      {card.header.type && (
        <div className="card-header text-center text-primary">
          {card.header.text}
        </div>
      )}
      <div className="card-body py-4 text-center">
        <h4 className="card-title">{card.title}</h4>
        <h5 className="lead card-subtitle">{card.subtitle}</h5>
        <p className="display-5 my-4 text-primary fw-bold">{card.price}</p>
        <p className="card-text mx-1 text-muted d-none d-lg-block">
          {card.text}
        </p>
        <a href={card.href} className="btn btn-outline-primary btn-lg mt-3">
          {card.btn}
        </a>
      </div>
    </div>
  );
}

export default Card;
