import backgroundVideo from "../assets/video/backround.mp4";
import { BackgroundElementWrapper } from "../style";

const BackgroundElement = () => {
    return <BackgroundElementWrapper src={backgroundVideo} autoPlay loop />;
};

export default BackgroundElement;
