import React from "react";
import { useCurrentFrame, Img, AbsoluteFill } from "remotion";
import Whale from "./assets/whale.png";

export const WordIn: React.FC = () => {
  const frame = useCurrentFrame();

  var text = ["C", "I", "A", "O", " A ", "T", "U", "T", "T", "I"];

  var range = 100 / (text.length + 1); 

  var actual = Math.floor(frame / range);

  console.log(frame, range, actual);

  var display_text = text.slice(0, actual) 

  return (
    <AbsoluteFill className="text-gray-200 bg-blue-900 text-8xl">
      <div className="m-auto">
        {display_text}
      </div>
    </AbsoluteFill>
  );
};
