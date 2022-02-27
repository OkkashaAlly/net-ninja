import React from "react";
import ListGroupItem from "./shared/ListGroupItem";

function ListGroup() {
  const reviews = [
    {
      id: 1,
      heading: "A must buy for every aspiring web dev",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
      officiis numquam iste!`,
      by: "Mario",
      stars: 5,
    },
    {
      id: 2,
      heading: "It have worthy content",
      text: `Ddolor sit amet consectetur adipisicing elit. Recusandae
      officiis numquam iste dolor sit amet consectetur adipisicing elit. Recusandae
      officiis numquam iste orem ipsum !`,
      by: "Jason",
      stars: 4,
    },
    {
      id: 3,
      heading: "I recommend to any one needing to be a ninja",
      text: `Lorem ipsum dolor sit `,
      by: "Aguero",
      stars: 4,
    },
    {
      id: 4,
      heading: "Superb",
      text: `Officiis numquam isteLorem ipsum dolor sit amet consectetur fficiis numquam iste adipisicing elit. Recusandae
      o!`,
      by: "Fatma",
      stars: 5,
    },
  ];

  return (
    <div className="list-group">
      {reviews.map(review => (
        <ListGroupItem key={review.id} item={review} />
      ))}
    </div>
  );
}

export default ListGroup;
