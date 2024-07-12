import { FaPhoneAlt } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { IoLocationSharp } from "react-icons/io5";

const HomeContact = () => {
    return (
        <div className="max-w-5xl mx-auto py-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center">
                <div className="p-4">
                <h1 className="bg-gradient-to-r from-purple-600 via-purple-400 to-white inline-block text-transparent bg-clip-text text-4xl md:text-6xl font-bold">Let’s work together!</h1>
                <p className="text-white pr-12 mt-4 mb-8">I design and code beautifully simple things and I love what I do. Just simple like that!</p>
                {/* form */}
                <form action="">

                </form>
                
                </div>
                <div className=" space-y-12">
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