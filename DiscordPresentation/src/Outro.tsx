import {Sequence } from 'remotion';
import {OutroTradingLab} from './Outro/OutroTradingLab';

export const Outro: React.FC = () => {
	return (
    <div>
      <Sequence from={0} durationInFrames={300}>
        <OutroTradingLab/>
      </Sequence>
		</div>
	);
};
