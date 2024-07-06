import { Outlet } from "react-router-dom";
import Navber from "../Components/Navber/Navber";


const Root = () => {
    return (
            <div className="max-w-7xl mx-auto bg-[#100616]">
                <Navber/>
                <Outlet/>
            </div>
    );
};

export default Root;