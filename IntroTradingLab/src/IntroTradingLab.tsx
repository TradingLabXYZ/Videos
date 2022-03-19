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
        <Sequence from={400} durationInFrames={3830}>
          <Main/>
        </Sequence>
        <Sequence from={4230} durationInFrames={4330}>
          <Outro/>
        </Sequence>
      </div>
		</div>
	);
};
