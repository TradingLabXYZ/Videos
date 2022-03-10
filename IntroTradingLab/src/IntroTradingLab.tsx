import {Sequence} from 'remotion';
import {Intro} from './Intro';
import {Main} from './Main';
import {Outro} from './Outro';

export const IntroTradingLab: React.FC = () => {
	return (
		<div>
      <div>
        <Sequence from={0} durationInFrames={400}>
          <Intro/>
        </Sequence>
        <Sequence from={395} durationInFrames={4011}>
          <Main/>
        </Sequence>
        <Sequence from={4411} durationInFrames={600}>
          <Outro/>
        </Sequence>
      </div>
		</div>
	);
};
