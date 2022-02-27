import React from "react";

function ToolTip({ children, placement, text }) {
  return (
    <span
      className="tt"
      data-bs-toggle="tooltip"
      data-bs-placement={placement}
      title={text}
    >
      {children}
    </span>
  );
}

export default ToolTip;
