import {Video} from 'remotion';
import WelcomeVideo from "./assets/welcome.webm";

export const Welcome: React.FC = () => {
    return <Video src={WelcomeVideo} />;
};

