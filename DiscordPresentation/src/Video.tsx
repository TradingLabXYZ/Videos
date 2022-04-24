import "./style.css";
import {Composition} from 'remotion';
import {Intro} from './Intro';

export const RemoticonVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="Intro"
				component={Intro}
				durationInFrames={800}
				fps={30}
				width={1280}
				height={720}
			/>
		</>
	);
};
