import { motion } from "framer-motion";

import { ButtonWrapper } from "../style";
import {
    animationConfig,
    buttonHoverVariant,
    buttonRestVariant,
} from "../animation";

const Button = ({ children }) => {
    return (
        <ButtonWrapper initial='rest' whileHover='hover'>
            <motion.div
                className='rest'
                variants={buttonRestVariant}
                transition={animationConfig}>
                <span>{children}</span>
            </motion.div>
            <motion.div
                className='hover'
                variants={buttonHoverVariant}
                transition={animationConfig}>
                <span>{children}</span>
            </motion.div>
        </ButtonWrapper>
    );
};

export default Button;
