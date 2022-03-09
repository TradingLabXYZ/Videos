import {Sequence, Audio, interpolate, useCurrentFrame} from 'remotion';
import {IntroTradingLab} from './Intro/IntroTradingLab';
import {IntroRack} from './Intro/IntroRack';
import bubbles from "./Intro/bubbles.mp4";

export const Intro: React.FC = () => {
  const frame = useCurrentFrame();
	return (
		<div>
      <div>
        <Sequence from={0} durationInFrames={200}>
          <Audio
            src={bubbles}
            volume={interpolate(frame, [0, 100, 150, 200], [0.01, 0.6, 0.6, 0.01], {
              extrapolateLeft: "clamp",
            })}
          />
          <IntroRack/>
        </Sequence>
        <Sequence from={200} durationInFrames={400}>
          <IntroTradingLab/>
        </Sequence>
      </div>
		</div>
	);
};
