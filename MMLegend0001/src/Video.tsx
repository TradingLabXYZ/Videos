import "./style.css";
import {Composition} from 'remotion';
import {MMLegend00001} from './MMLegend00001';
import {Extraction} from './Extraction';
import {RecapTable} from './RecapTable';
import {ZoomImg} from './ZoomImg';
import {CircleMovementImg} from './CircleMovementImg';
import {WordIn} from './WordIn';
import {VideoSwitch} from './VideoSwitch';

export const RemoticonVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="MMLegend00001"
				component={MMLegend00001}
				durationInFrames={10000}
				fps={60}
				width={1920}
				height={1200}
			/>
			<Composition
				id="Extraction"
				component={Extraction}
				durationInFrames={1486}
				fps={60}
				width={1920}
				height={1200}
			/>
			<Composition
				id="RecapTable"
				component={RecapTable}
				durationInFrames={845}
				fps={60}
				width={1920}
				height={1200}
			/>
			<Composition
				id="ZoomImg"
				component={ZoomImg}
				durationInFrames={50}
				fps={60}
				width={1920}
				height={1200}
			/>
			<Composition
				id="CircleMovementImg"
				component={CircleMovementImg}
				durationInFrames={200}
				fps={60}
				width={1920}
				height={1200}
			/>
			<Composition
				id="WordIn"
				component={WordIn}
				durationInFrames={200}
				fps={60}
				width={1920}
				height={1200}
			/>
			<Composition
				id="VideoSwitch"
				component={VideoSwitch}
				durationInFrames={400}
				fps={60}
				width={1920}
				height={1200}
			/>
		</>
	);
};
