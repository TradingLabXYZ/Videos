import {useCurrentFrame, interpolate, interpolateColors, Img} from 'remotion';
import rack from "./rack.gif";
import logo from "./logo.gif";

export const OutroTradingLab: React.FC = () => {
	const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 10, 20], [0, 0.5, 1]);
  const opacityLogo = interpolate(frame, [0, 100, 130, 150], [0, 1, 1, 0]);
	const opacityTitle = interpolate(frame, [0, 100, 130, 150], [0, 1, 1, 0]);
	return (
    <div className='flex flex-col justify-center w-full h-full align-bottom items-center font-bold space-y-4'
      style={{
        backgroundColor: "#121634",
        color: "#C901A1"
      }}
    >
      <div className="text-center"
        style={{
          opacity: opacityLogo
        }}
      >
        <div className='flex flex-row space-x-8'>
          <div
            style={{
            }}
          >
            <Img src={logo} className="h-24"/>
          </div>
          <div className='text-8xl'>
            TradingLab
          </div>
        </div>
        <div className="mt-8 text-6xl">
          An Hyperhybrid
        </div>
        <div className="mt-1 text-6xl">
          Crypto Trading Laboratory
        </div>
      </div>
    </div>
	);
};

