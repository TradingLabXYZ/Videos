import {useCurrentFrame, interpolate, interpolateColors, Img} from 'remotion';
import thumbnail from "./thumbnail.png";

export const IntroThumbnail: React.FC = () => {
	const frame = useCurrentFrame();
  const background = interpolateColors(frame, [0, 50], ["#121634", "black"]);
  const opacityImg = interpolate(frame, [50, 100], [0, 1]);
	return (
    <div
      className="w-full"
      style={{
        backgroundColor: background
      }}
    >
      <div
        style={{
          opacity: opacityImg
        }}>
        CIAO
          <Img src={thumbnail} className="h-fit"/>;
      </div>
    </div>
	);
};

