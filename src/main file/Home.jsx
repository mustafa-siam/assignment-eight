import Books from "../Book file/Books";
import Banner from "./Banner";

const Home = () => {
    return (
        <div className="space-y-16">
            <Banner></Banner>
            <Books></Books>
        </div>
    );
};

export default Home;