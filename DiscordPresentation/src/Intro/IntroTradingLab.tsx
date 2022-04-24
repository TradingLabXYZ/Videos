import {useCurrentFrame, interpolate, Img} from 'remotion';
import logo from "../assets/logo.gif";

export const IntroTradingLab: React.FC = () => {
	const frame = useCurrentFrame();
	const opacityTitle = interpolate(frame, [0, 100, 130, 150], [0, 1, 1, 0]);
	const opacitySubtitle = interpolate(frame, [70, 100, 140, 200], [0, 1, 1, 0]);
	return (
    <div className='flex flex-col w-full h-full font-bold text-magentashine bg-universe'>
      <div className="m-auto">
        <div
          className='flex flex-row text-9xl'
          style={{
            opacity: opacityTitle
          }}
        >
          <Img src={logo} className="h-24"/>
          TradingLab
        </div>
        <div
          className='text-6xl text-center'
          style={{
            opacity: opacitySubtitle
          }}
        >
        </div>
        <div 
          className='text-center mt-5 text-5xl'
          style={{
            opacity: opacitySubtitle
          }}
        >
          <div>
            Million Token Community presentation
          </div>
          <div>
            23rd April 2022
          </div>
        </div>
      </div>
    </div>
	);
};

