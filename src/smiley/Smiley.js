import React from "react";

import BackgroundCircle from "./BackgroundCircle";
import Eyes from "./Eyes";
import Mouth from "./Mouth";

const color = "yellow";
const outline = "black";
const radius = 50;

const Smiley = ({ strokeWidth }) => {
  return (
    <>
      <BackgroundCircle
        radiusofBC="220"
        color={color}
        outline={outline}
        strokeWidth={strokeWidth}
      />
      <Eyes radius={radius} />
      <Mouth />
    </>
  );
};

export default Smiley;
