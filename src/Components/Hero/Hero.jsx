import image from "../../assets/fuad-removebg-preview.png"

const Hero = () => {
    return (
        <div className="px-4 md:px-12 py-6 mt-6">
            <div className="flex flex-col-reverse md:flex-row text-white gap-6 items-center">
                <div className="w-full md:w-1/2 pl-0 lg:pl-12">
                <h1 className="text-3xl font-bold font-mono">I am Fuad</h1>
                <div className="space-y-2 mt-3">
                <h1 className="text-4xl md:text-6xl font-bold">Web</h1>
                <h1 className="text-4xl md:text-6xl font-bold">Developer +</h1>
                <h1 className="text-4xl md:text-6xl font-bold">UX Designer</h1>
                </div>
                <p className=" mt-6 text-lg font-medium">I break down complex user experinece problems to  create integritiy focussed solutions that connect billions of people</p>
                <div>


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