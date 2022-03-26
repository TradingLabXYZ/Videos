import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig, Img } from "remotion";
import Whale from "./assets/whale.png";

export const WhaleImg: React.FC<{
  delay: number;
  y: string;
  size: number;
  direction: number;
}> = ({ delay, y, size, direction }) => {
  const { fps } = useVideoConfig();
  const frame = useCurrentFrame();

  const whale = spring({
    fps,
    frame: frame - delay,
    config: {
      mass: 50,
    },
  });

  const position = interpolate(whale, [0, 1], [-1, 2]);

  let x = '';
  if (direction > 0) {
    x = position * 100 + "%";
  } else {
    x = 100 - position * 100 + "%";
  }

  return (
    <Img src={Whale}
      style={{
        width: 100,
        position: "absolute",
        top: y,
        left: x,
        transform: `scale(${size}) scaleX(${direction})`,
      }}
    />
  );
};
