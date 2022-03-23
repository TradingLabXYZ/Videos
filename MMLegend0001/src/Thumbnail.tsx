import {useCurrentFrame, interpolate, Img} from 'remotion';
import ThumbnailImg from "./assets/thumbnail.png";

export const Thumbnail: React.FC = () => {
  	const frame = useCurrentFrame();
  	const opacityImg = interpolate(frame, [0, 40, 80, 120, 150, 200], [0, 0.4, 0.8, 1, 0.6, 0]);
    return (
      <div className="bg-black"
        style = {{
          opacity: opacityImg
        }}
      >
        <Img src={ThumbnailImg} />;
      </div>
    )
};

