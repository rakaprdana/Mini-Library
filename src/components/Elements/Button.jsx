// Button.js
import React from "react";

const Button = (props) => {
  const { onClick, text } = props;
  return (
    <button
      onClick={onClick}
      className="bg-amber-500 font-poppins font-semibold text-sm text-slate-200 hover:bg-amber-600 px-10 py-2 rounded-full hover:scale-110 hover:duration-300"
    >
      {text}
    </button>
  );
};

export default Button;
