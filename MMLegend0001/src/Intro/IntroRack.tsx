import {useCurrentFrame, interpolate, interpolateColors, Img} from 'remotion';
import rack from "../assets/rack.gif";

export const IntroRack: React.FC = () => {
	const frame = useCurrentFrame();
  const opacity = interpolate(frame, [20, 50, 80, 100], [0, 1, 1, 0]);
  const backgroundRack = interpolateColors(frame, [0, 40, 100], ["white", "white", "#121634"]);
	return (
    <div className='flex w-full h-full'
      style={{
        backgroundColor: backgroundRack
      }}>
      <Img
        src={rack}
        style={{
          opacity: opacity
        }}
        className="m-auto"/>;
    </div>
	);
};

