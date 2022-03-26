import {Sequence, Audio, interpolate, useCurrentFrame } from 'remotion';
import {IntroTradingLab} from './Intro/IntroTradingLab';
import {IntroRack} from './Intro/IntroRack';
import bubbles from "./assets/bubbles.webm";

export const Intro: React.FC = () => {
	const frame = useCurrentFrame();
  const audioInter = interpolate(frame, [0, 100, 200, 300], [0.01, 0.8, 0.7, 0.01], {extrapolateLeft: "clamp"})
	return (
		<div>
      <div>
        <Audio
          src={bubbles}
          volume={audioInter}
        />
        <Sequence from={0} durationInFrames={100}>
          <IntroRack/>
        </Sequence>
        <Sequence from={100} durationInFrames={300}>
          <IntroTradingLab/>
        </Sequence>
      </div>
		</div>
	);
};
