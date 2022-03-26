import "./style.css";
import {Composition} from 'remotion';
import {MMLegend00001} from './MMLegend00001';
import {Extraction} from './Extraction';
import {RecapTable} from './RecapTable';

export const RemoticonVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="MMLegend00001"
				component={MMLegend00001}
				durationInFrames={5000}
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
				durationInFrames={418}
				fps={60}
				width={1920}
				height={1200}
			/>
		</>
	);
};
