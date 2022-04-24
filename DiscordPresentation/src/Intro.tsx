import {Sequence, Audio, interpolate, useCurrentFrame } from 'remotion';
import {IntroTradingLab} from './Intro/IntroTradingLab';
import {IntroRack} from './Intro/IntroRack';
import {IntroDisclaimer} from './Intro/IntroDisclaimer';
import bubbles from "./assets/bubbles.mp4";

export const Intro: React.FC = () => {
	const frame = useCurrentFrame();
  const audioInter = interpolate(frame, [0, 200, 550], [0.1, 0.8, 0.1])
	return (
    <div>
      <Audio
        src={bubbles}
        volume={audioInter}
        endAt={580}
      />
      <Sequence from={0} durationInFrames={200}>
        <IntroRack/>
      </Sequence>
      <Sequence from={200} durationInFrames={200}>
        <IntroTradingLab/>
      </Sequence>
      <Sequence from={400} durationInFrames={200}>
        <IntroDisclaimer/>
      </Sequence>
    </div>
	);
};
