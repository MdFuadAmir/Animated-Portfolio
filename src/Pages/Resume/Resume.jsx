import pic from"../../assets/fuad-removebg-preview.png"

const Resume = () => {
    return (
        <div>
            {/* header */}
            <div className="flex flex-col justify-center text-center items-center space-y-3 my-12">
                <h1 className="bg-gradient-to-r from-purple-700 via-purple-500 to-white inline-block text-transparent bg-clip-text text-4xl md:text-6xl font-bold">Resume</h1>
            </div>
            {/* resume section */}
            <div className="max-w-4xl mx-auto p-4 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2">
                {/* lrft side */}
                <div className="bg-gray-900 p-4">
                    <div className="flex justify-center">
                    <img src={pic} alt="" className="w-32 h-32 rounded-full bg-black p-2"/>
                    </div>
                    <div className="mt-6">
                        <h1 className="text-white font-bold text-2xl border-b">Contact</h1>
                        <div className="mt-4 space-y-4">
                            <div>
                            <h1 className="text-white text-xl font-bold">Phone</h1>
                            <p className="text-white">+88017******31</p>
                            </div>
                            <div>
                            <h1 className="text-white text-xl font-bold">Email</h1>
                            <p className="text-white">mdfuadamir@gmail.com</p>
                            </div>
                            <div>
                            <h1 className="text-white text-xl font-bold">Address</h1>
                            <p className="text-white">Kushtia,bangladesh</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6">
                        <h1 className="text-white font-bold text-2xl border-b">Education</h1>
                        <div className="mt-4 space-y-4">
                            <div>
                            <h1 className="text-white text-xl font-bold">JSC</h1>
                            <p className="text-white">2018</p>
                            </div>
                            <div>
                            <h1 className="text-white text-xl font-bold">SSC</h1>
                            <p className="text-white">2019-2020</p>
                            </div>
                            <div>
                            <h1 className="text-white text-xl font-bold">Diploma</h1>
                            <p className="text-white">2021-2024</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6">
                        <h1 className="text-white font-bold text-2xl border-b">Expertise</h1>
                        <div className="mt-4 space-y-4 text-white">
                          <li>UX/UI</li>
                          <li>Visual Design</li>
                          <li>Web Design</li>
                          <li>App Design</li>
                          <li>Web Development</li>
                          <li>App Develpoment</li>
                          <li>Graphic Designer</li>
                        </div>
                    </div>
                    <div className="mt-6">
                    <h1 className="text-white font-bold text-2xl border-b">Language</h1>
                    <div className="mt-4 space-y-4 text-white">
                          <p>English</p>
                          <p>Bangla</p>
                        </div>

                    </div>
                </div>
                {/* right side */}
                <div className="bg-slate-200 px-4 py-8">
                    <div>
                        <h1 className="text-4xl font-bold font-mono">Fuad Amir</h1>
                        <p className="font-mono">Web Developer</p>
                        <p className="mt-4 text-gray-700">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore eos pariatur perferendis placeat illum itaque dignissimos? Tenetur eius praesentium asperiores!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore eos pariatur perferendis placeat illum itaque dignissimos? Tenetur eius praesentium asperiores!</p>
                    </div>
                    <div className="mt-12">
                    <h1 className="font-bold text-2xl border-b border-black">Experience</h1>
                    <div className="mt-6">
                        <p className="font-bold text-gray-600">2020-2021</p>
                        <p className="text-gray-500 text-sm">Company Name | 123 Anywhere St., Any City</p>
                        <h1 className="text-xl mt-2 font-bold text-gray-600">Job position here</h1>
                        <p className="text-sm text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, rerum commodi, officia, velit esse amet voluptatem tempore officiis repudiandae quibusdam ea odit aut nulla sint doloribus? Molestias beatae id repellat.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore eos pariatur perferendis placeat illum itaque dignissimos? Tenetur eius praesentium asperiores!</p>
                    </div>
                    <div className="mt-6">
                        <p className="font-bold text-gray-600">2022-2023</p>
                        <p className="text-gray-500 text-sm">Company Name | 123 Anywhere St., Any City</p>
                        <h1 className="text-xl mt-2 font-bold text-gray-600">Job position here</h1>
                        <p className="text-sm text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, rerum commodi, officia, velit esse amet voluptatem tempore officiis repudiandae quibusdam ea odit aut nulla sint doloribus? Molestias beatae id repellat.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore eos pariatur perferendis placeat illum itaque dignissimos? Tenetur eius praesentium asperiores!</p>
                    </div>
                    <div className="mt-6">
                        <p className="font-bold text-gray-600">2024</p>
                        <p className="text-gray-500 text-sm">Company Name | 123 Anywhere St., Any City</p>
                        <h1 className="text-xl mt-2 font-bold text-gray-600">Job position here</h1>
                        <p className="text-sm text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, rerum commodi, officia, velit esse amet voluptatem tempore officiis repudiandae quibusdam ea odit aut nulla sint doloribus? Molestias beatae id repellat.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore eos pariatur perferendis placeat illum itaque dignissimos? Tenetur eius praesentium asperiores!</p>
                    </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Resume;