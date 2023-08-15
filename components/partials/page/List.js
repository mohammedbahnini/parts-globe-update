import React from "react";

const List = ({ list }) => {
  return (
    <ul>
      {list.map((item) => {
        return (
          <React.Fragment key={item}>
            <li>{item}</li>
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default List;
