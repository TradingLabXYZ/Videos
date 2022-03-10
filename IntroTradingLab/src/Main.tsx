import {AbsoluteFill, Video} from 'remotion';
import speach from "./assets/speach.webm";

export const Main: React.FC = () => {
	return (
    <AbsoluteFill>
      <Video
        src={speach}
      />
    </AbsoluteFill>
	);
};
