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
				fps={30}
				width={1280}
				height={720}
			/>
			<Composition
				id="Extraction"
				component={Extraction}
				durationInFrames={1486}
				fps={30}
				width={1280}
				height={720}
			/>
			<Composition
				id="RecapTable"
				component={RecapTable}
				durationInFrames={418}
				fps={30}
				width={1280}
				height={720}
			/>
		</>
	);
};
