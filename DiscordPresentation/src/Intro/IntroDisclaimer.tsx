import {useCurrentFrame, interpolate} from 'remotion';

export const IntroDisclaimer: React.FC = () => {
	const frame = useCurrentFrame();
	const opacityText = interpolate(frame, [0, 50], [0, 1]);
	return (
    <div className='m-auto text-magentashine bg-universe space-y-4 text-center'
      style={{
        opacity: opacityText
      }}
    >
      <div className='text-5xl font-bold py-5'>
        DISCLAIMER
      </div>
      <div className='text-4xl w-5/6 m-auto text-justify'>
        This video is the recording of TradingLab presentation of 23 April 2022 on MillionToken discord.
        Unfortunately audience's audio is not available, so the questions raised will be reported as text.
        Moreover, due to minor technical issues, this video has been slightly adjusted.
      </div>
      <div className='text-4xl w-5/6 m-auto font-bold'>
        Finally, one more big thank you to the MillionToken community for the warm and kind support.
      </div>
    </div>
	);
};

