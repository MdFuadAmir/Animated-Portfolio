import Client from "../Client/Client";
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
        </div>
    );
};

export default Home;