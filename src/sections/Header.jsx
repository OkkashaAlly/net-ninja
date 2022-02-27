import React from "react";
import NavItem from "../components/shared/NavItem";

function Header() {
  const items = [
    {
      id: 1,
      text: `About The Book`,
      href: `#topics`,
      styles: ``,
      ancorStyles: "nav-link",
    },
    {
      id: 2,
      text: `Reviews`,
      href: `#reviews`,
      styles: ``,
      ancorStyles: "nav-link",
    },
    {
      id: 3,
      text: `Get In Touch`,
      href: `#contact`,
      styles: ``,
      ancorStyles: "nav-link",
    },
    {
      id: 4,
      text: `Pricing`,
      href: `#pricing`,
      styles: `d-md-none`,
      ancorStyles: "nav-link",
    },

    {
      id: 5,
      text: `Pricing`,
      href: `#pricing`,
      styles: `ms-2 d-none d-md-inline`,
      ancorStyles: "btn btn-secondary",
    },
  ];

  return (
    <header>
      <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-dark ">
        <div className="container-xl">
          <a href="#intro" className="navbar-brand">
            <span className="text-secondary fw-bold">
              <i className="bi bi-book-half pe-2"></i>
              Net Ninja - the Book
            </span>
          </a>
          {/* toggle btn for mobile nav  */}
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main-nav"
            // aria-controls="main-nav"
            // aria-expanded="false"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          {/* navbar list  */}
          <div
            className="collapse navbar-collapse justify-content-end ps-2"
            id="main-nav"
          >
            <ul className="navbar-nav ">
              {items.map(item => (
                <NavItem key={item.id} item={item} />
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
