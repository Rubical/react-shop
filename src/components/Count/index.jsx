import { useState } from "react";
import CartItem from "../CartItem";
import "./style.scss";

const Count = ({ increaseCount, decreaseCount, count, id }) => {
  return (
    <div className="items counter-wrapper">
      <div
        className="items__control"
        data-action="minus"
        onClick={() => {
          decreaseCount(id);
        }}
      >
        -
      </div>
      <div className="items__current" data-counter>
        {count}
      </div>
      <div
        className="items__control"
        data-action="plus"
        onClick={() => increaseCount(id)}
      >
        +
      </div>
    </div>
  );
};

export default Count;
