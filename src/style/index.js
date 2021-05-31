import { motion } from "framer-motion";
import styled, { createGlobalStyle } from "styled-components";

import CoustomFont from "../assets/font/RobotoMono-VariableFont_wght.ttf";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family:Roboto Mono ;
        src: url(${CoustomFont});
    }
    body {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Roboto Mono', monospace;
        background-color: #000;
        color: #fff;
        width:100%;
    }
`;
export const AppbarWrapper = styled(motion.div)`
    background-color: #fff;
    color: #000;
    padding: 0.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
export const AppbarLogo = styled(motion.h1)`
    margin: 0;
    font-size: 3rem;
    font-weight: bolder;
    cursor: pointer;
    letter-spacing: 1.2rem;
    @media (max-width: 960px) {
        font-size: 1.2rem;
    }
`;
export const AppbarLinks = styled.ul`
    display: flex;
    flex-direction: row;
    list-style: none;
    @media (max-width: 960px) {
        display: none;
    }
`;
export const AppbarLink = styled.li`
    font-size: 0.8rem;
    font-weight: bold;
    margin: 0 1rem;
    letter-spacing: 0.1rem;
    cursor: pointer;
`;
export const ButtonWrapper = styled(motion.div)`
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
    @media (max-width: 960px) {
        font-size: 1rem;
    }
`;
export const JumbotronWrapper = styled.div`
    margin: 2rem 8rem;
    @media (max-width: 960px) {
        margin: 9rem 5rem;
    }
`;
export const MotionTypoWrapper = styled(motion.div)`
    padding: 1.2rem 0;
    overflow: hidden;
    cursor: pointer;
    position: relative;
`;
export const TitleRest = styled(motion.h1)`
    margin: 0;
    font-size: 4rem;
    font-weight: bold;
    @media (max-width: 960px) {
        font-size: 1.2rem;
    }
`;
export const TitleHover = styled(motion.h1)`
    margin: 0;
    font-size: 4rem;
    font-style: italic;
    font-weight: 100;
    height: 0;
    @media (max-width: 960px) {
        font-size: 1.2rem;
    }
`;
export const BackgroundElementWrapper = styled.video`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
`;
