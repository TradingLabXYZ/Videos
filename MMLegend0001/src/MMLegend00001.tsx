import {Series} from 'remotion';
import {Intro} from './Intro';
import {Welcome} from './Welcome';
import {Whales} from './Whales';
import {Etherscan} from './Etherscan';
import {Extraction} from './Extraction';
import {RecapTable} from './RecapTable';
import {ZoomImg} from './ZoomImg';
import {CircleMovementImg} from './CircleMovementImg';
import {WordIn} from './WordIn';
import {VideoSwitch} from './VideoSwitch';

export const MMLegend00001: React.FC = () => {
	return (
		<Series>
      <Series.Sequence durationInFrames={300}>
        <Intro/>
      </Series.Sequence>
      <Series.Sequence durationInFrames={880}>
        <Welcome/>
      </Series.Sequence>
      <Series.Sequence durationInFrames={100}>
        <Whales direction={1}/>
      </Series.Sequence>
      <Series.Sequence durationInFrames={2020}>
        <Etherscan/>
      </Series.Sequence>
      <Series.Sequence durationInFrames={100}>
        <Whales direction={-1}/>
      </Series.Sequence>
      <Series.Sequence durationInFrames={1486}>
        <Extraction/>
      </Series.Sequence>
      <Series.Sequence durationInFrames={845}>
        <RecapTable/>
      </Series.Sequence>
      <Series.Sequence durationInFrames={50}>
        <ZoomImg/>
      </Series.Sequence>
      <Series.Sequence durationInFrames={200}>
        <CircleMovementImg/>
      </Series.Sequence>
      <Series.Sequence durationInFrames={200}>
        <WordIn/>
      </Series.Sequence>
      <Series.Sequence durationInFrames={400}>
        <VideoSwitch/>
      </Series.Sequence>
		</Series>
	);
};

