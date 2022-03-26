import { random, Img } from "remotion";
import React, { useMemo } from "react";
import { WhaleImg } from "./WhaleImg";
import DeepOcean from "./assets/deepOcean.jpg";

const dropCount = 10;

export const Whales: React.FC<{
  direction: number;
}> = ({direction}) => {
  const drops = useMemo(() => {
    return new Array(dropCount).fill(true).map((_, i) => {
      const y = random("y" + i) * 100 + "%";
      const delay = random("delay" + i) * 60;
      const size = random("size" + i) + 5;
      return { y, delay, size, direction };
    });
  }, []);
  return (
    <div>
      <Img src={DeepOcean} className="w-full h-screen bg-center bg-cover"/>
      <div className="bg-white">
        {drops.map((d) => {
          return <WhaleImg y={d.y} delay={d.delay} size={d.size} direction={d.direction}/>;
        })}
      </div>
    </div>
  );
};
