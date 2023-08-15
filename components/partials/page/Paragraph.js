import React from "react";

const Paragraph = ({ text }) => {
  return text.map((item) => {
    return (
      <React.Fragment key={item}>
        <p>{item}</p>
      </React.Fragment>
    );
  });
};

export default Paragraph;
