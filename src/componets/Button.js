import styled from "styled-components";
import { motion } from "framer-motion";

const restVariant = {
    rest: {
        height: "auto",
    },
    hover: {
        height: 0,
    },
};

const hoverVariant = {
    rest: {
        height: 0,
    },
    hover: {
        height: "auto",
    },
};

const animationConfig = { ease: "easeOut", duration: 0.2 };

const Button = ({ children }) => {
    return (
        <ButtonWrapper initial='rest' whileHover='hover'>
            <motion.div
                className='rest'
                variants={restVariant}
                transition={animationConfig}>
                <span>{children}</span>
            </motion.div>
            <motion.div
                className='hover'
                variants={hoverVariant}
                transition={animationConfig}>
                <span>{children}</span>
            </motion.div>
        </ButtonWrapper>
    );
};

export default Button;

const ButtonWrapper = styled(motion.div)`
    position: relative;
    cursor: pointer;
    font-size: 2rem;
    font-weight: bold;
    overflow: hidden;
    .rest {
        background-color: white;
        color: black;
        display: block;
        padding: 0 1rem;
    }
    .hover {
        background-color: black;
        color: white;
        height: 0;
        padding: 0 1rem;
    }
`;
