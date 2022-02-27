import React from "react";
import DropDown from "./DropDown";

function OffCanvas() {
  return (
    <div
      className="offcanvas offcanvas-start"
      data-bs-scroll="true"
      tabIndex="-1"
      id="sidebar"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title">My Other Books</h5>
        <button
          type="button"
          className="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          deserunt est ullam laudantium, odio tenetur natus similique
          dignissimos cumque sit veniam nobis saepe.
        </p>
        <DropDown />
      </div>
    </div>
  );
}

export default OffCanvas;
