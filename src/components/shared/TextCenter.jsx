import React from "react";

function TextCenter({ heading, text, icon }) {
  return (
    <div className="text-center">
      <h2>
        {icon}
        {heading}
      </h2>
      <p className="lead text-muted">{text}</p>
    </div>
  );
}

export default TextCenter;
