import {Sequence} from 'remotion';
import {Intro} from './Intro';
import {Outro} from './Outro';

export const IntroTradingLab: React.FC = () => {
	return (
		<div>
      <div>
        <Sequence from={0} durationInFrames={400}>
          <Intro/>
        </Sequence>
        <Sequence from={400} durationInFrames={600}>
          <Outro/>
        </Sequence>
      </div>
		</div>
	);
};
