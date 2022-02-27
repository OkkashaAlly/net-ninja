import React from "react";

function StarRating({ stars }) {
  let iteration = [];

  for (let i = 0; i < stars; i++) {
    const current = i + 1;
    iteration.push(current);
  }

  return (
    <div className="pb-2">
      {iteration.map(el => (
        <i key={el} className="bi bi-star-fill altdark"></i>
      ))}
    </div>
  );
}

export default StarRating;
