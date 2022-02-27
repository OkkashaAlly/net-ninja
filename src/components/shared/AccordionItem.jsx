import React from "react";

function AccordionItem({ item }) {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={item.headingID}>
        <button
          className={item.collapse}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={"#" + item.targetID}
          aria-expanded={item.expand}
          aria-controls="collapseOne"
        >
          {item.buttonTxt}
        </button>
      </h2>
      <div
        id={item.targetID}
        className={"accordion-collapse collapse " + item.show}
        aria-labelledby={item.headingID}
        data-bs-parent={"#" + item.parentID}
      >
        <div className="accordion-body">{item.bodyTxt}</div>
      </div>
    </div>
  );
}

export default AccordionItem;
