import {Series} from 'remotion';
import {Intro} from './Intro';
import {Welcome} from './Welcome';
import {Whales} from './Whales';

export const MMLegend00001: React.FC = () => {
	return (
		<Series>
      <Series.Sequence durationInFrames={300}>
        <Intro/>
      </Series.Sequence>
      <Series.Sequence durationInFrames={880}>
        <Welcome/>
      </Series.Sequence>
      <Series.Sequence durationInFrames={50}>
        <Whales/>
      </Series.Sequence>
		</Series>
	);
};

