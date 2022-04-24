import {useCurrentFrame, interpolate} from 'remotion';

export const IntroDisclaimer: React.FC = () => {
	const frame = useCurrentFrame();
	return (
    <div className='text-magentashine bg-universe flex'>
      <div className='m-auto w-4/6 space-y-8'>
        <div className='text-5xl font-bold text-center'>
          DISCLAIMER
        </div>
        <div className='text-4xl m-auto text-justify'>
          This video is the recording of TradingLab presentation of 23 April 2022 on MillionToken discord.
          Unfortunately audience's audio is not available, so the final questions will be written as text.
          During the presentation a few bugs/improvements were visibile, we are working on it.
          Moreover, due to minor technical issues, this video has been slightly adjusted.
        </div>
        <div className='text-4xl font-bold'>
          Finally, one more big thank you to the MillionToken community for the warm and kind support.
        </div>
      </div>
    </div>
	);
};

