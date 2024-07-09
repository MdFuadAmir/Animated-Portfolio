import Client from "../Client/Client";
import Experience from "../Experience/Experience";
import Hero from "../Hero/Hero";
import "../Navber/navber.css"
import Quality from "../Quality/Quality";
import RecentWorks from "../RecentWorks/RecentWorks";
import Skill from "../Skill/Skill";

const Home = () => {
    return (
        <div className="">
            <Hero/>
            <Client/>
            <Quality/>
            <RecentWorks/>
            <Experience/>
            <Skill/>
        </div>
    );
};

export default Home;