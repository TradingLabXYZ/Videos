import { Sequence } from 'remotion';
import {Intro} from './Intro';
import {Main} from './Main';
import {Outro} from './Outro';

export const DiscordPresentation: React.FC = () => {
	return (
    <>
      <Sequence from={0}>
        <Intro/>
      </Sequence>
      <Sequence from={600}>
        <Main/>
      </Sequence>
      <Sequence from={52950}>
        <Outro/>
      </Sequence>
    </>
	);
};
