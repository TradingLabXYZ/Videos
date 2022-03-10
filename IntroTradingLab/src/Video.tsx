import "./style.css";
import {Composition} from 'remotion';
import {IntroTradingLab} from './IntroTradingLab';
import {Intro} from './Intro';
import {Main} from './Main';
import {Outro} from './Outro';

export const RemoticonVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="IntroTradingLab"
				component={IntroTradingLab}
				durationInFrames={4611}
				fps={30}
				width={1280}
				height={720}
			/>
			<Composition
				id="Intro"
				component={Intro}
				durationInFrames={400}
				fps={30}
				width={1280}
				height={720}
			/>
			<Composition
				id="Main"
				component={Main}
				durationInFrames={4011}
				fps={30}
				width={1280}
				height={720}
			/>
			<Composition
				id="Outro"
				component={Outro}
				durationInFrames={200}
				fps={30}
				width={1280}
				height={720}
			/>
		</>
	);
};
