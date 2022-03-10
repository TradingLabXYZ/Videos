import {Sequence, Audio, interpolate, useCurrentFrame} from 'remotion';
import {OutroRack} from './Outro/OutroRack';
import {OutroTradingLab} from './Outro/OutroTradingLab';
import bubbles from "./Intro/bubbles.mp4";

export const Outro: React.FC = () => {
  const frame = useCurrentFrame();
	return (
		<div>
      <Sequence from={0} durationInFrames={200}>
        <OutroTradingLab/>
      </Sequence>
		</div>
	);
};
