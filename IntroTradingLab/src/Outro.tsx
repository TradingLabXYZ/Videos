import {Sequence, Audio, interpolate, useCurrentFrame} from 'remotion';
import {OutroRack} from './Outro/OutroRack';
import bubbles from "./Intro/bubbles.mp4";

export const Outro: React.FC = () => {
  const frame = useCurrentFrame();
	return (
		<div>
      <Sequence from={0} durationInFrames={200}>
        <Audio
          src={bubbles}
          volume={interpolate(frame, [0, 100, 150, 200], [0.01, 0.6, 0.6, 0.01], {
            extrapolateLeft: "clamp",
          })}
        />
        <OutroRack/>
      </Sequence>
		</div>
	);
};
