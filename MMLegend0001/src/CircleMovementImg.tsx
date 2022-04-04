import React from "react";
import { useCurrentFrame, Img } from "remotion";
import Whale from "./assets/whale.png";

export const CircleMovementImg: React.FC = () => {
  const frame = useCurrentFrame();
  const y = Math.sin(frame / 10) * 100 + 200;
  const x = Math.cos(frame / 10) * 100 + 100;

  return (
      <Img src={Whale}
        style={{
          position: "absolute",
          top: `${y}px`,
          left: `${x}px`,
        }}
      />
  );
};
