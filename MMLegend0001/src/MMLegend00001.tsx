import {Series} from 'remotion';
import {Intro} from './Intro';
import {Thumbnail} from './Thumbnail';
import {Welcome} from './Welcome';

export const MMLegend00001: React.FC = () => {
	return (
		<Series>
      <Series.Sequence durationInFrames={400}>
        <Intro/>
      </Series.Sequence>
      <Series.Sequence durationInFrames={200}>
        <Thumbnail/>
      </Series.Sequence>
      <Series.Sequence durationInFrames={400}>
        <Welcome/>
      </Series.Sequence>
		</Series>
	);
};

