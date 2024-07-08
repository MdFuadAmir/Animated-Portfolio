import { FiArrowDownRight } from "react-icons/fi";

const Quality = () => {
    return (
        <div className="bg-black py-12">
            {/* header */}
            <div className="flex flex-col justify-center text-center items-center space-y-3">
                <h1 className="bg-gradient-to-r from-purple-700 via-purple-500 to-white inline-block text-transparent bg-clip-text text-4xl md:text-6xl font-bold">My Quality Services</h1>
                <p className="w-full md:w-1/2 flex text-center text-white">We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
            </div>
            {/* cards */}
            <div className="mt-12 max-w-5xl mx-auto space-y-8">
                {/* card 1 */}
                <div className="flex flex-col md:flex-row items-center justify-between border-b border-purple-700 p-4 group gap-6 hover:scale-105 duration-500">
                    <div>
                        <p className="font-bold text-xl text-purple-500">01</p>
                        <h1 className="font-bold text-2xl md:text-3xl text-white">Branding Design</h1>
                    </div>
                    <div className="w-full md:w-1/2 text-white"><p>I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people</p></div>
                    <div className="text-purple-500 group-hover:-rotate-90 duration-500 group-hover:text-white">
                        <FiArrowDownRight size={40}/>
                    </div>
                </div>
                {/* card 2 */}
                <div className="flex flex-col md:flex-row items-center justify-between border-b border-purple-700 p-4 group gap-6 hover:scale-105 duration-500">
                    <div>
                        <p className="font-bold text-xl text-purple-500">02</p>
                        <h1 className="font-bold text-2xl md:text-3xl text-white">Web Design</h1>
                    </div>
                    <div className="w-full md:w-1/2 text-white"><p>I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people</p></div>
                    <div className="text-purple-500 group-hover:-rotate-90 duration-500 group-hover:text-white">
                        <FiArrowDownRight size={40}/>
                    </div>
                </div>
                {/* card 3 */}
                <div className="flex flex-col md:flex-row items-center justify-between border-b border-purple-700 p-4 group gap-6 hover:scale-105 duration-500">
                    <div>
                        <p className="font-bold text-xl text-purple-500">03</p>
                        <h1 className="font-bold text-2xl md:text-3xl text-white">UI/UX Design</h1>
                    </div>
                    <div className="w-full md:w-1/2 text-white"><p>I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people</p></div>
                    <div className="text-purple-500 group-hover:-rotate-90 duration-500 group-hover:text-white">
                        <FiArrowDownRight size={40}/>
                    </div>
                </div>
                {/* card 4 */}
                <div className="flex flex-col md:flex-row items-center justify-between border-b border-purple-700 p-4 group gap-6 hover:scale-105 duration-500">
                    <div>
                        <p className="font-bold text-xl text-purple-500">04</p>
                        <h1 className="font-bold text-2xl md:text-3xl text-white">Graphics Design</h1>
                    </div>
                    <div className="w-full md:w-1/2 text-white"><p>I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people</p></div>
                    <div className="text-purple-500 group-hover:-rotate-90 duration-500 group-hover:text-white">
                        <FiArrowDownRight size={40}/>
                    </div>
                </div>
            
            </div>
            
        </div>
    );
};

export default Quality;