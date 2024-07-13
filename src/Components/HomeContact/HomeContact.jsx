import { FaPhoneAlt } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { IoLocationSharp } from "react-icons/io5";

const HomeContact = () => {
    return (
        <div className="max-w-5xl mx-auto py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center">
                <div className="p-4 bg-black rounded-2xl">
                <h1 className="bg-gradient-to-r from-purple-600 via-purple-400 to-white inline-block text-transparent bg-clip-text text-4xl md:text-6xl font-bold">Let’s work together!</h1>
                <p className="text-white pr-12 mt-4 mb-8">I design and code beautifully simple things and I love what I do. Just simple like that!</p>
                {/* form  start*/}
                <form>
                    <div className="space-y-4">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <input type="text" placeholder="First name" className="input input-bordered input-accent w-full max-w-xs border-none bg-gray-800 duration-500"/>
                    <input type="text" placeholder="Last name" className="input input-bordered input-accent w-full max-w-xs border-none bg-gray-800 duration-500"/>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <input type="text" placeholder="First name" className="input input-bordered input-accent w-full max-w-xs border-none bg-gray-800 duration-500"/>
                    <input type="text" placeholder="Last name" className="input input-bordered input-accent w-full max-w-xs border-none bg-gray-800 duration-500"/>
                    </div>
                    <select className="select select-info w-full bg-gray-800 text-gray-400 border-none">
                        <option disabled selected>Choose Service</option>
                        <option>Branding Design</option>
                        <option>Web Design</option>
                        <option>App Design</option>
                        <option>UI/UX Design</option>
                        <option>Web Development</option>
                    </select>
                    <textarea className="textarea textarea-info w-full min-h-[200px] bg-gray-800 border-none" placeholder="Massage"></textarea>
                    </div>
                    <button className="btn border-none font-bold text-white px-8 mt-6 rounded-full bg-gradient-to-r from-purple-800 to-gray-800 hover:from-gray-800 hover:to-purple-800 duration-500">Send Massage</button>
                </form>
                {/* form end */}
                </div>
                {/* right side */}
                <div className="p-4 space-y-12">
                <div className="flex gap-4 items-center">
                <FaPhoneAlt size={40} className="bg-gradient-to-b from-purple-800 to-purple-600 p-2 rounded-full text-white"/>
                    
                        <div className="text-white">
                        <p>Phone</p>
                        <p className="text-xl">+88017******31</p>
                        </div>
                </div>
                <div className="flex gap-4 items-center">
                <TfiEmail size={40} className="bg-gradient-to-b from-purple-800 to-purple-600 p-2 rounded-full text-white"/>
                        <div className="text-white">
                        <p>Email</p>
                        <p className="text-xl">mdfuadamir@gmail.com</p>
                        </div>
                </div>
                <div className="flex gap-4 items-center">
                <IoLocationSharp size={40} className="bg-gradient-to-b from-purple-800 to-purple-600 p-2 rounded-full text-white"/>
                        <div className="text-white">
                        <p>Address</p>
                        <p className="text-xl">Kushtia,bangladesh</p>
                        </div>
                </div>
                </div>

            </div>
            
        </div>
    );
};

export default HomeContact;