import React from "react";

function DropDown() {
  return (
    <>
      <div className="dropdown mt-3">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="book-dropdown"
          data-bs-toggle="dropdown"
        >
          Choose a book title
        </button>
        <ul className="dropdown-menu" aria-labelledby="book-dropdown">
          <li>
            <button className="dropdown-item">Become React superhero </button>
          </li>
          <li>
            <button className="dropdown-item">Conquering Vue.js</button>
          </li>
          <li>
            <button className="dropdown-item">Levelup your Next.js</button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default DropDown;
