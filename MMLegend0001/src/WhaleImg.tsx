import React from "react";
import { interpolate, spring, useCurrentFrame, useVideoConfig, Img } from "remotion";
import Whale from "./assets/whale.png";

export const WhaleImg: React.FC<{
  delay: number;
  y: string;
  size: number;
}> = ({ delay, y, size }) => {
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

  return (
    <Img src={Whale}
      style={{
        width: 100,
        position: "absolute",
        top: y,
        left: position * 100 + "%",
        transform: `scale(${size})`,
      }}
    />
  );
};
