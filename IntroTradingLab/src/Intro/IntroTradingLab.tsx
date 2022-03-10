import {useCurrentFrame, interpolate, Img} from 'remotion';
import logo from "../assets/logo.gif";

export const IntroTradingLab: React.FC = () => {
	const frame = useCurrentFrame();
  const opacityLogo = interpolate(frame, [0, 100, 130, 150], [0, 1, 1, 0]);
	const opacityTitle = interpolate(frame, [0, 100, 130, 150], [0, 1, 1, 0]);
	const opacitySubtitle = interpolate(frame, [70, 100, 140, 200], [0, 1, 1, 0]);
	return (
    <div className='flex flex-col justify-center w-full h-full align-bottom items-center font-bold space-y-4'
      style={{
        backgroundColor: "#121634"
      }}
    >
      <div className='flex flex-row space-x-8'>
        <div
          style={{
            opacity: opacityLogo
          }}
        >
          <Img src={logo} className="h-24"/>;
        </div>
        <div
          className='text-8xl'
          style={{
            color: "#C901A1",
            opacity: opacityTitle
          }}
        >
          TradingLab
        </div>
      </div>
      <div
        className='text-6xl'
        style={{
          color: "#C901A1",
          opacity: opacitySubtitle
        }}
      >
        presents
      </div>
    </div>
	);
};

