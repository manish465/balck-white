import {
    animationConfig,
    typoHoverVariant,
    typoRestVariant,
} from "../animation";
import { MotionTypoWrapper, TitleHover, TitleRest } from "../style";

const MotionTypo = ({ title_1, title_2 }) => {
    return (
        <MotionTypoWrapper initial='rest' whileHover='hover' animate='rest'>
            <TitleRest variants={typoRestVariant} transition={animationConfig}>
                {title_1}
            </TitleRest>
            <TitleHover
                variants={typoHoverVariant}
                transition={animationConfig}>
                {title_2}
            </TitleHover>
        </MotionTypoWrapper>
    );
};

export default MotionTypo;
