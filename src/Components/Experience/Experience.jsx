import { FaGraduationCap } from "react-icons/fa6";
import { LuBadgeCheck } from "react-icons/lu";
const experiencedata =[
    {
        id:1,
        date:"2024 - Present",
        name:"LEAD DEVELOPER",
        location:"Blockdots, London"
    },
    {
        id:2,
        date:"2023-2024",
        name:"FULL STACK WEB DEVELOPER",
        location:"Parsons, The New School"
    },
    {
        id:3,
        date:"2022-2023",
        name:"UI DESIGNER",
        location:"House of Life, Leeds"
    },
    {
        id:4,
        date:"2021-2022",
        name:"JUNIOR GRAPHICS DESIGNER",
        location:"Theme Junction, Bursa"
    },
]
const educationdata =[
    {
        id:1,
        date:"2020-2024",
        name:"PROGRAMMING COURSE",
        location:"Programming Hero"
    },
    {
        id:2,
        date:"2019-2020",
        name:"GRAPHIC DESIGN COURSE",
        location:"Creative it instute"
    },
    {
        id:3,
        date:"2020-2023",
        name:"WEB DESIGN COURSE",
        location:"Programming Hero"
    },
    {
        id:4,
        date:"2016-2020",
        name:"DESIGN & TECHNOLOGY",
        location:"Parsons, The New School"
    },
]
const Experience = () => {
    return (
        <div className="bg-black py-12 mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:max-w-5xl mx-auto px-4">
                <div className=" space-y-12">
                <div className="flex items-center gap-4">
                    <FaGraduationCap size={40} color="white"/>
                    <h1 className="bg-gradient-to-r from-purple-700 via-purple-500 to-white bg-clip-text text-transparent  text-3xl md:text-5xl font-bold inline-block">My Experience</h1>
                </div>
                <div className="space-y-6">
                    {
                        experiencedata.map((exdata) => <div key={exdata.id}className="">
                            <div className="bg-[#100616] p-6 rounded-2xl space-y-3 group hover:bg-gradient-to-r from-purple-500 to-purple-950 duration-500">
                            <h2 className="text-2xl font-bold text-purple-500 group-hover:text-white duration-500">{exdata.date}</h2>
                            <h1 className="text-3xl font-bold text-white">{exdata.name}</h1>
                            <p className="text-white">{exdata.location}</p>
                            </div>
                        </div>)
                    }
                </div>
                </div>
                <div className="space-y-12 mt-12 md:mt-0">
                <div className="flex items-center gap-4">
                    <LuBadgeCheck size={40} color="white"/>
                    <h1 className="bg-gradient-to-r from-purple-700 via-purple-500 to-white bg-clip-text text-transparent  text-3xl md:text-5xl font-bold inline-block">My Education</h1>
                </div>
                <div className="space-y-6">
                    {
                        educationdata.map((eddata) => <div key={eddata.id}className="">
                            <div className="bg-[#100616] p-6 rounded-2xl space-y-3 group hover:bg-gradient-to-r from-purple-500 to-purple-950 duration-500">
                            <h2 className="text-2xl font-bold text-purple-500 group-hover:text-white duration-500">{eddata.date}</h2>
                            <h1 className="text-3xl font-bold text-white">{eddata.name}</h1>
                            <p className="text-white">{eddata.location}</p>
                            </div>
                        </div>)
                    }
                </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;