import { useCurrentFrame, interpolate, Series, Audio, Video, staticFile } from 'remotion';
import audio from "./assets/presentationAudio.mp3";
const video = staticFile("/presentationVideo.webm");
const exploreVideo = staticFile("/exploreVideo.webm");
const letsGoBackVideo = staticFile("/letsGoBackVideo.webm");

export const Main: React.FC = () => {
	const frame = useCurrentFrame();
	return (
    <div>
      <Series>

        {/* Intro section */}
        <Series.Sequence durationInFrames={9486}>
          <Video src={video} volume={0}/>
          <Audio src={audio} volume={1}/>
        </Series.Sequence>

        {/* Demo - Insert Trade */}
        <Series.Sequence durationInFrames={3800}>
          <div
            style={{opacity: interpolate(frame, [12000, 12010, 12500], [0, 1, 0])}}
            className="font-white text-4xl absolute bottom-0 mx-12 text-center bg-red-800">
            The total portfolio has not been correctly updated. Bug has been fixed.
          </div>
          <Video src={video} volume={0} startFrom={12550}/>
          <Audio src={audio} volume={1} startFrom={12550}/>
        </Series.Sequence>

        {/* Demo - Insert a second Trade */}
        <Series.Sequence durationInFrames={2880}>
          <Video src={video} volume={0} startFrom={17000}/>
          <Audio src={audio} volume={1} startFrom={17000}/>
        </Series.Sequence>

        {/* Demo - Privacy */}
        <Series.Sequence durationInFrames={3600}> 
          <div
            style={{opacity: interpolate(frame, [17980, 17990, 18100], [0, 1, 0])}}
            className="font-white text-4xl absolute bottom-0 mx-12 text-center bg-red-800">
            The message should have been: "This account is private, you can't access these infos." Bug has been fixed.
          </div>
          <Video src={video} volume={0} startFrom={20200}/>
          <Audio src={audio} volume={1} startFrom={20200}/>
        </Series.Sequence>

        {/* Explore Section */}
        <Series.Sequence durationInFrames={1371}> 
          <Video volume={0.8} src={exploreVideo}/>
        </Series.Sequence>

        {/* Explore Section */}
        <Series.Sequence durationInFrames={150}> 
          <Video volume={0.8} src={letsGoBackVideo}/>
        </Series.Sequence>

        {/* Marketing  + Decentralization */}
        <Series.Sequence durationInFrames={17780}> 
          <div
            style={{opacity: interpolate(frame, [35549, 35560, 37000], [0, 1, 0])}}
            className="font-white text-4xl absolute bottom-0 mx-12 text-center bg-red-800">
            EARN should be replaced with "Fee", and LEARN should be replaced with "Knowledge"
          </div>
          <Video src={video} volume={0} startFrom={25200}/>
          <Audio src={audio} volume={1} startFrom={25200}/>
        </Series.Sequence>

        {/* First question about the ongling competition */}
        <Series.Sequence durationInFrames={5440}> 
          <div
            style={{opacity: interpolate(frame, [39000, 39010, 39500], [0, 1, 0])}}
            className="font-white text-4xl absolute bottom-0 w-full text-center bg-green-800">
            Q: Can you tell us a bit more about the ongoing competition?
          </div>
          <div
            style={{opacity: interpolate(frame, [39600, 39610, 40000], [0, 1, 0])}}
            className="font-white text-4xl absolute bottom-0 w-full text-center bg-green-800">
            Q: How long the competition will last?
          </div>
          <Video src={video} volume={0} startFrom={44000}/>
          <Audio src={audio} volume={1} startFrom={44000}/>
        </Series.Sequence>

        {/* Second question */}
        <Series.Sequence durationInFrames={1800}> 
          <div
            style={{opacity: interpolate(frame, [44511, 44520, 45000], [0, 1, 0])}}
            className="font-white text-4xl absolute bottom-0 w-full text-center bg-green-800">
            Q: What about connecting Metafora to TradingLab?
          </div>
          <Video src={video} volume={0} startFrom={49200}/>
          <Audio src={audio} volume={1} startFrom={49200}/>
        </Series.Sequence>

        {/* Third question*/}
        <Series.Sequence durationInFrames={3100}> 
          <div
            style={{opacity: interpolate(frame, [46276, 46280, 47000], [0, 1, 0])}}
            className="font-white text-4xl absolute bottom-0 w-full text-center bg-green-800">
            Q: Does the platform require manual input?
          </div>
          <div
            style={{opacity: interpolate(frame, [47000, 47010, 48000], [0, 1, 0])}}
            className="font-white text-4xl absolute bottom-0 w-full text-center bg-green-800">
            Q: Do you plan to connect TradingLab with exchanges?
          </div>
          <Video src={video} volume={0} startFrom={51100}/>
          <Audio src={audio} volume={1} startFrom={51100}/>
        </Series.Sequence>

        {/* Fourth question */}
        <Series.Sequence durationInFrames={1343}> 
          <div
            style={{opacity: interpolate(frame, [49500, 49510, 50000], [0, 1, 0])}}
            className="font-white text-4xl absolute bottom-0 w-full text-center bg-green-800">
            Q: Can I be notified when my trade reaches a cetain threshold?
          </div>
          <Video src={video} volume={0} startFrom={55500}/>
          <Audio src={audio} volume={1} startFrom={55500}/>
        </Series.Sequence>

        {/* Fifth question and goodbye */}
        <Series.Sequence durationInFrames={1600}> 
          <div
            style={{opacity: interpolate(frame, [50900, 50910, 51000], [0, 1, 0])}}
            className="font-white text-4xl absolute bottom-0 w-full text-center bg-green-800">
            Q: Can you make a video about OpenZeppeling and smart contract?
          </div>
          <Video src={video} volume={0} startFrom={57500}/>
          <Audio src={audio} volume={1} startFrom={57500}/>
        </Series.Sequence>
      </Series>
    </div>
	);
};
