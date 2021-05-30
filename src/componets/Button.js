import styled from "styled-components";
import { motion } from "framer-motion";

const Button = ({ children }) => {
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

    return (
        <ButtonWrapper initial='rest' whileHover='hover'>
            <motion.div className='rest' variants={restVariant}>
                <span>{children}</span>
            </motion.div>
            <motion.div className='hover' variants={hoverVariant}>
                <span>{children}</span>
            </motion.div>
        </ButtonWrapper>
    );
};

export default Button;

const ButtonWrapper = styled(motion.div)`
    position: relative;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: bold;
    border: 0.2rem solid black;
    overflow: hidden;
    padding: 0.5rem;
    .rest {
        background-color: white;
        color: black;
        display: block;
    }
    .hover {
        background-color: black;
        color: white;
        height: 0;
    }
`;
