import React from "react";

export default function Burger(props) {
  return (
    <div className="burger">
      {props.ingredients.map((i, index) => (
        <div key={index} onClick={() => props.onRemove(index)} className={i}>
          {i}
        </div>
      ))}
    </div>
  );
}
