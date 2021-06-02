import React from "react";

const Eyes = (props) => {
  return (
    <>
      <circle r={props.radius} cx={+90} cy={-90} />
      <circle r={props.radius} cx={-90} cy={-90} />
    </>
  );
};

export default Eyes;
