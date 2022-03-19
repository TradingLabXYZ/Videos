import {Sequence, Audio, interpolate, useCurrentFrame } from 'remotion';
import {IntroTradingLab} from './Intro/IntroTradingLab';
import {IntroRack} from './Intro/IntroRack';
import bubbles from "./assets/bubbles.mp4";

export const Intro: React.FC = () => {
	const frame = useCurrentFrame();
  const audioInter = interpolate(frame, [0, 200, 350, 400], [0.01, 0.8, 0.7, 0.01], {extrapolateLeft: "clamp"})
	return (
		<div>
      <div>
        <Audio
          src={bubbles}
          volume={audioInter}
        />
        <Sequence from={0} durationInFrames={200}>
          <IntroRack/>
        </Sequence>
        <Sequence from={200} durationInFrames={400}>
          <IntroTradingLab/>
        </Sequence>
      </div>
		</div>
	);
};
