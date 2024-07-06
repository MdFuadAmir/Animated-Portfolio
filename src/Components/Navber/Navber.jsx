import { Link } from "react-router-dom";
import { TfiMenu } from "react-icons/tfi";
import logo from "../../assets/sddefault-removebg-preview.png"
import "../Navber/navber.css"

const links = [
    {
        id:1,
        path:"/",
        name:"Home"
    },
    {
        id:2,
        path:"/services",
        name:"Services"
    },
    {
        id:3,
        path:"/works",
        name:"Works"
    },
    {
        id:4,
        path:"/resume",
        name:"Resume"
    },
    {
        id:5,
        path:"/skill",
        name:"Skill"
    },
    {
        id:6,
        path:"/testmonials",
        name:"Testmonials"
    },
    {
        id:7,
        path:"/contact",
        name:"Contact"
    },
]
const Navber = () => {
    return (
        <div className="px-4 md:px-12">
            <div className="navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <TfiMenu color="white" size={20}/>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-4 shadow gap-6 text-white bg-gray-900 border-2 border-purple-700 text-center font-bold">
        {
            links.map((link) => <Link key={link.id} to={link.path}>{link.name}</Link>)
        }
      </ul>
    </div>
    <img src={logo} alt="" className="w-24"/>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-6 text-white font-bold">
        {
            links.map((link) => <Link key={link.id} to={link.path}>{link.name}</Link>)
        }
    </ul>
  </div>
  <div className="navbar-end">
    <button className="btn border-none font-bold text-white px-6 rounded-full bg-gradient-to-r from-purple-800 to-gray-800 hover:from-gray-800 hover:to-purple-800 duration-500">Hire Me!</button>
  </div>
</div>
        </div>
    );
};

export default Navber;