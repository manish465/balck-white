import styled from "styled-components";
import { motion } from "framer-motion";
import Button from "./Button";

const Appbar = () => {
    return (
        <AppbarWrapper>
            <AppbarLogo>BDST</AppbarLogo>
            <AppbarLinks>
                <AppbarLink>find more</AppbarLink>
                <AppbarLink>create</AppbarLink>
                <AppbarLink>contact us</AppbarLink>
                <AppbarLink>about us</AppbarLink>
                <AppbarLink>our work</AppbarLink>
            </AppbarLinks>
            <Button>Login</Button>
        </AppbarWrapper>
    );
};

export default Appbar;

const AppbarWrapper = styled(motion.div)`
    background-color: #fff;
    color: #000;
    padding: 0.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
const AppbarLogo = styled(motion.h1)`
    margin: 0;
    font-size: 3rem;
    font-weight: bolder;
    cursor: pointer;
    letter-spacing: 1.2rem;
`;
const AppbarLinks = styled(motion.ul)`
    display: flex;
    flex-direction: row;
    list-style: none;
`;
const AppbarLink = styled(motion.li)`
    font-size: 0.8rem;
    font-weight: bold;
    margin: 0 1rem;
    letter-spacing: 0.1rem;
    cursor: pointer;
`;
