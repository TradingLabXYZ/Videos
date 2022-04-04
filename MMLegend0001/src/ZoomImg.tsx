import React from "react";
import { interpolate, useCurrentFrame, Img } from "remotion";
import Whale from "./assets/whale.png";

export const ZoomImg: React.FC = () => {
  const frame = useCurrentFrame();

  return (
      <Img src={Whale} className="m-auto"
        style={{
          transform: `scale(${interpolate(frame, [0, 40, 50], [0, 1.5, 50])})`
        }}
      />
  );
};
