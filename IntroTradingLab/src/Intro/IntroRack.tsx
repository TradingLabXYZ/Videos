import {useCurrentFrame, interpolate, interpolateColors, Img} from 'remotion';
import rack from "../assets/rack.gif";

export const IntroRack: React.FC = () => {
	const frame = useCurrentFrame();
  const opacity = interpolate(frame, [20, 100, 140, 180], [0, 1, 1, 0]);
  const backgroundRack = interpolateColors(frame, [0, 80, 200], ["white", "#121634", "#121634"]);
	return (
    <div className='flex flex-col justify-center w-full h-full align-bottom items-center font-bold space-y-4'
      style={{
        backgroundColor: backgroundRack
      }}
    >
      <div className='flex flex-row space-x-8'
        style={{
          backgroundColor: backgroundRack
        }}
      >
        <div
          style={{
            opacity: opacity
          }}
        >
          <Img src={rack} className="h-fit"/>;
        </div>
      </div>
    </div>
	);
};

