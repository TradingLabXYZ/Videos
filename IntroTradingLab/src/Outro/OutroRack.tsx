import {useCurrentFrame, interpolate, interpolateColors, Img} from 'remotion';
import rack from "./rack.gif";

export const OutroRack: React.FC = () => {
	const frame = useCurrentFrame();
  const opacity = interpolate(frame, [20, 100, 140, 180], [1, 0.8, 0.5, 0]);
  const backgroundRack = interpolateColors(frame, [0, 80, 200], ["#121634", "#121634", "white"]);
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

