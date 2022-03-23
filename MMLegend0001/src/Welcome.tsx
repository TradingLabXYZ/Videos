import {Video} from 'remotion';
import WelcomeVideo from "./assets/welcome.mp4";

export const Welcome: React.FC = () => {
    return <Video src={WelcomeVideo} />;
};

