import {Series} from 'remotion';
import {Intro} from './Intro';
import {Welcome} from './Welcome';
import {Whales} from './Whales';
import {Etherscan} from './Etherscan';
import {Extraction} from './Extraction';
import {RecapTable} from './RecapTable';

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
      <Series.Sequence durationInFrames={418}>
        <RecapTable/>
      </Series.Sequence>
		</Series>
	);
};

