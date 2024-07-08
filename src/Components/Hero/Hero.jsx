import image from "../../assets/fuad-removebg-preview.png"
import { IoCloudDownloadOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa6";
import { FaBasketball } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="px-4 md:px-12 py-6 mt-6">
            <div className="flex flex-col-reverse md:flex-row text-white gap-6 items-center">
                <div className="w-full md:w-1/2 pl-0 lg:pl-12">
                <h1 className="text-3xl font-bold font-mono">I am Fuad</h1>
                <div className="space-y-2 mt-3 flex flex-col">
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-purple-300 to-white inline-block text-transparent bg-clip-text">Web</h1>
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-purple-300 to-white inline-block text-transparent bg-clip-text">Developer +</h1>
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-purple-300 to-white inline-block text-transparent bg-clip-text">UX Designer</h1>
                </div>
                <p className=" mt-6 text-lg font-medium">I break down complex user experinece problems to  create integritiy focussed solutions that connect billions of people</p>
                <div className="mt-12 flex flex-col-reverse lg:flex-row gap-8 items-center">
                    <div>
                    <button className="btn btn-outline text-purple-700 text-lg font-bold rounded-full px-6 flex items-center gap-4 hover:bg-purple-500">Downloade CV<IoCloudDownloadOutline/></button>
                    </div>
                    <div className="flex gap-6">
                        <Link>
                        <FaFacebookF size={40} className="p-2 text-purple-500 border rounded-full border-purple-500 hover:text-white"/>
                        </Link>
                        <Link>
                        <FaBasketball size={40} className="p-2 text-purple-500 border rounded-full border-purple-500 hover:text-white"/>
                        </Link>
                        <Link>
                        <FaLinkedinIn size={40} className="p-2 text-purple-500 border rounded-full border-purple-500 hover:text-white"/>
                        </Link>
                        <Link>
                        <IoLogoGithub size={40} className="p-2 text-purple-500 border rounded-full border-purple-500 hover:text-white"/>
                        </Link>
                    </div> 
                </div>
                </div>
                {/* right side image */}
                <div className="w-full md:w-1/2">
                <img src={image} alt="" className="rounded-3xl  bg-gradient-to-b from-gray-800 to-black border-2 border-purple-800 border-opacity-40 hover:border-purple-800 duration-300 rotate-6 hover:rotate-0 translate-x-0 md:translate-x-6"/>
                </div>
            </div>
        </div>
    );
};

export default Hero;