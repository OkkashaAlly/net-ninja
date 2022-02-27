import React from "react";

function NavItem({ item }) {
  return (
    <li className={`nav-item ${item.styles}`}>
      <a className={item.ancorStyles} href={item.href}>
        {item.text}
      </a>
    </li>
  );
}

export default NavItem;
