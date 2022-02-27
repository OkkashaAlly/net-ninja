import React from "react";
import StarRating from "../StarRating";

function ListGroupItem({ item }) {
  return (
    <div className="list-group-item py-3">
      <StarRating stars={item.stars} />
      <h5 className="mb-1">{item.heading}</h5>
      <p className="mb-1">{item.text}</p>
      <small>Reviewed by: {item.by}</small>
    </div>
  );
}

export default ListGroupItem;
