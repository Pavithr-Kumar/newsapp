import React from "react";

function Square({ value, chooseSquare }) {
  return (
    <div
      onClick={chooseSquare}
      className="border border-black basis-1/3 grid place-items-center text-4xl cursor-pointer active:bg-opacity-100"
    >
      {value}
    </div>
  );
}

export default Square;
