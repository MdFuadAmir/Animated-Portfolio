import { Link } from "react-router-dom";
import { TfiMenu } from "react-icons/tfi";
import logo from "../../assets/sddefault-removebg-preview.png"
import "../Navber/navber.css"

const links = [
    {
        id:1,
        path:"/",
        name:<p className="group relative">
        <span>Home</span>
        <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-gradient-to-l from-purple-600 to-gray-900 group-hover:w-full"></span>
        </p>
    },
    {
        id:2,
        path:"/services",
        name:<p className="group relative">
        <span>Services</span>
        <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-gradient-to-l from-purple-600 to-gray-900 group-hover:w-full"></span>
        </p>
    },
    {
        id:3,
        path:"/works",
        name:<p className="group relative">
        <span>Works</span>
        <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-gradient-to-l from-purple-600 to-gray-900 group-hover:w-full"></span>
        </p>
    },
    {
        id:4,
        path:"/resume",
        name:<p className="group relative">
        <span>Resume</span>
        <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-gradient-to-l from-purple-600 to-gray-900 group-hover:w-full"></span>
        </p>
    },
    {
        id:5,
        path:"/skill",
        name:<p className="group relative">
        <span>Skill</span>
        <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-gradient-to-l from-purple-600 to-gray-900 group-hover:w-full"></span>
        </p>
    },
    {
        id:6,
        path:"/testmonials",
        name:<p className="group relative">
        <span>Trestmonials</span>
        <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-gradient-to-l from-purple-600 to-gray-900 group-hover:w-full"></span>
        </p>
    },
    {
        id:7,
        path:"/contact",
        name:<p className="group relative">
        <span>Contact</span>
        <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-gradient-to-l from-purple-600 to-gray-900 group-hover:w-full"></span>
        </p>
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