import { AppbarLink, AppbarLinks, AppbarLogo, AppbarWrapper } from "../style";
import Button from "./Button";
import { animationConfig, appbarLogoVariant } from "../animation";

const Appbar = () => {
    return (
        <AppbarWrapper>
            <AppbarLogo
                initial='rest'
                whileHover='hover'
                variants={appbarLogoVariant}
                transition={animationConfig}>
                BDST
            </AppbarLogo>
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
