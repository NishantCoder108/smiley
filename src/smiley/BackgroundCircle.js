import React from "react";

const BackgroundCircle = ({ radiusofBC, color, outline, strokeWidth }) => {
  return (
    <>
      <circle
        r={radiusofBC}
        fill={color}
        stroke={outline}
        stroke-width={strokeWidth}
      />
    </>
  );
};

export default BackgroundCircle;
