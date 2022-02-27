import React from "react";
import AccordionItem from "./shared/AccordionItem";

function Accordion() {
  const items = [
    {
      id: 1,
      show: "show",
      expand: true,
      collapse: "accordion-button",
      headingID: "heading-1",
      parentID: "chapters",
      targetID: "chapter-1",
      buttonTxt: "Chapter 1 - Your First Web Page",
      bodyTxt: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
      molestias nisi unde laudantium minima reprehenderit doloribus corrupti
      ut sapiente ratione inventore deleniti asperiores, perferendis veritatis
      numquam voluptatum vel! Perspiciatis, labore.`,
    },
    {
      id: 2,
      show: "",
      expand: false,
      collapse: "accordion-button collapsed",
      headingID: "heading-2",
      parentID: "chapters",
      targetID: "chapter-2",
      buttonTxt: "Chapter 2 - Mastering CSS",
      bodyTxt: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
      molestias nisi unde laudantium minima reprehenderit doloribus corrupti
      ut sapiente ratione inventore deleniti asperiores, perferendis veritatis
      numquam voluptatum vel! Perspiciatis, labore.`,
    },
    {
      id: 3,
      show: "",
      expand: false,
      collapse: "accordion-button collapsed",
      headingID: "heading-3",
      parentID: "chapters",
      targetID: "chapter-3",
      buttonTxt: "Chapter 3 - The Power Of JavaScript",
      bodyTxt: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
      molestias nisi unde laudantium minima reprehenderit doloribus corrupti
      ut sapiente ratione inventore deleniti asperiores, perferendis veritatis
      numquam voluptatum vel! Perspiciatis, labore.`,
    },
    {
      id: 4,
      show: "",
      expand: false,
      collapse: "accordion-button collapsed",
      headingID: "heading-4",
      parentID: "chapters",
      targetID: "chapter-4",
      buttonTxt: "Chapter 4 - Storing data (Firebase DataBase)",
      bodyTxt: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
      molestias nisi unde laudantium minima reprehenderit doloribus corrupti
      ut sapiente ratione inventore deleniti asperiores, perferendis veritatis
      numquam voluptatum vel! Perspiciatis, labore.`,
    },
    {
      id: 5,
      show: "",
      expand: false,
      collapse: "accordion-button collapsed",
      headingID: "heading-5",
      parentID: "chapters",
      targetID: "chapter-5",
      buttonTxt: "Chapter 5 - User Authentication",
      bodyTxt: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
      molestias nisi unde laudantium minima reprehenderit doloribus corrupti
      ut sapiente ratione inventore deleniti asperiores, perferendis veritatis
      numquam voluptatum vel! Perspiciatis, labore.`,
    },
  ];
  return (
    <div className="accordion" id="chapters">
      {items.map(item => (
        <AccordionItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Accordion;
