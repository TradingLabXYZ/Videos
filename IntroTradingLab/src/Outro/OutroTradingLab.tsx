import {useCurrentFrame, interpolateColors, Img} from 'remotion';
import logo from "../assets/logo.gif";

export const OutroTradingLab: React.FC = () => {
	const frame = useCurrentFrame();
  const backgroundColor = interpolateColors(frame, [0, 80, 100], ["black", "#121634", "#121634"]);
	return (
      <div className='flex flex-row items-center justify-center w-full align-middle space-x-8'
        style={{
          backgroundColor: backgroundColor,
          color: "#C901A1"
        }}
      >
        <Img src={logo} className="h-48"/>
        <div className='font-bold text-9xl'>
          TradingLab
        </div>
      </div>
	);
};

