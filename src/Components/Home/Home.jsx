import Client from "../Client/Client";
import Experience from "../Experience/Experience";
import Hero from "../Hero/Hero";
import "../Navber/navber.css"
import Quality from "../Quality/Quality";
import RecentWorks from "../RecentWorks/RecentWorks";

const Home = () => {
    return (
        <div className="">
            <Hero/>
            <Client/>
            <Quality/>
            <RecentWorks/>
            <Experience/>
        </div>
    );
};

export default Home;