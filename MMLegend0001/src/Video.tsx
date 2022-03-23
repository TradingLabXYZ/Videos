import "./style.css";
import {Composition} from 'remotion';
import {MMLegend00001} from './MMLegend00001';

export const RemoticonVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="MMLegend00001"
				component={MMLegend00001}
				durationInFrames={1200}
				fps={30}
				width={1280}
				height={720}
			/>
		</>
	);
};
