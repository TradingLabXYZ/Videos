import "./style.css";
import {Composition} from 'remotion';
import {DiscordPresentation} from './DiscordPresentation';
import {Intro} from './Intro';
import {Main} from './Main';
import {Outro} from './Outro';

export const RemoticonVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="DiscordPresentation"
				component={DiscordPresentation}
				durationInFrames={53250}
				fps={30}
				width={1150}
				height={720}
			/>
			<Composition
				id="Intro"
				component={Intro}
				durationInFrames={600}
				fps={30}
				width={1280}
				height={720}
			/>
			<Composition
				id="Main"
				component={Main}
				durationInFrames={60000}
				fps={30}
				width={1150}
				height={720}
			/>
			<Composition
				id="Outro"
				component={Outro}
				durationInFrames={300}
				fps={30}
				width={1280}
				height={720}
			/>
		</>
	);
};
