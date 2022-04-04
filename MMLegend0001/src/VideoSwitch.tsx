import React from "react";
import { interpolate, useCurrentFrame, Sequence, Video } from "remotion";
import RecapTableVideo from "./assets/recapTable.webm";
import WelcomeVideo from "./assets/welcome.webm";

export const VideoSwitch: React.FC = () => {
  const frame = useCurrentFrame();
  return <div>
    <Sequence from={0} durationInFrames={200}>
      <Video
        src ={WelcomeVideo}
        style = {{
          opacity: interpolate(frame, [0, 150, 200], [1, 1, 0.1])
        }}
      />
    </Sequence>
    <Sequence from={150} durationInFrames={200}>
      <Video
        src ={RecapTableVideo}
        style = {{
          opacity: interpolate(frame, [150, 200, 400], [0.1, 1, 1])
        }}
      />
    </Sequence>
  </div>
};
