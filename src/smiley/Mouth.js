import React from "react";
import { arc } from "d3";

const Mouth = () => {
  const mouthArc = arc()
    .innerRadius(120)
    .outerRadius(140)
    .startAngle(Math.PI / 2)
    .endAngle((Math.PI * 3) / 2);
  return (
    <>
      <path d={mouthArc()} />
    </>
  );
};

export default Mouth;
