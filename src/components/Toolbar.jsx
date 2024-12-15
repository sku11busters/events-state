import React from "react";

export const Toolbar = ({ filters, selected, onSelectFilter }) => {
  return (
    <div>
      {filters.map((filter) => (
        <button
          key={filter}
          className={filter === selected ? "activeBtn" : ""}
          onClick={() => onSelectFilter(filter)}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};
