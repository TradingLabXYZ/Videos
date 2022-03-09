import "./style.css";
import {Composition} from 'remotion';
import {Intro} from './Intro';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="Empty"
				component={Intro}
				durationInFrames={600}
				fps={30}
				width={1280}
				height={720}
			/>
		</>
	);
};
