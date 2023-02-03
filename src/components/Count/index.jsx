import "./style.scss";

const Count = () => {
  return (
    <div className="items counter-wrapper">
      <div className="items__control" data-action="minus">
        -
      </div>
      <div className="items__current" data-counter>
        1
      </div>
      <div className="items__control" data-action="plus">
        +
      </div>
    </div>
  );
};

export default Count;
