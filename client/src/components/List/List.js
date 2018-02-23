import React from "react";

export const List = ({ children }) => {
  return (
      <ul className="list-group">
        {children}
      </ul>
  );
};
