import Client from "../Client/Client";
import Hero from "../Hero/Hero";
import "../Navber/navber.css"
import Quality from "../Quality/Quality";

const Home = () => {
    return (
        <div className="">
            <Hero/>
            <Client/>
            <Quality/>
        </div>
    );
};

export default Home;