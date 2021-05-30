import MotionTypo from "./MotionTypo";
import { JumbotronWrapper } from "../style";

const typoData = [
    { title_1: "Why We Make", title_2: "Our Philosophy" },
    { title_1: "The Thing We Make", title_2: "Our Work" },
    { title_1: "Says a Lot", title_2: "Media & Mentions" },
    { title_1: "About Us", title_2: "Everything Else" },
];

const Jumbotron = () => {
    return (
        <JumbotronWrapper>
            {typoData.map((data, key) => (
                <MotionTypo
                    key={key}
                    title_1={data.title_1}
                    title_2={data.title_2}
                />
            ))}
        </JumbotronWrapper>
    );
};

export default Jumbotron;
