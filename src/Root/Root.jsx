import { Outlet } from "react-router-dom";
import Navber from "../Components/Navber/Navber";
import Footer from "../Components/Footer/Footer";


const Root = () => {
    return (
            <div className="max-w-7xl mx-auto bg-[#100616]">
                <Navber/>
                <Outlet/>
                <Footer/>
            </div>
    );
};

export default Root;