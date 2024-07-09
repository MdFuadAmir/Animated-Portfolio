import image1 from"../../assets/figma.png"
import image2 from"../../assets/diamond.png"
import image3 from"../../assets/adobe.svg.png"
import image4 from"../../assets/wordpress.png"
import image5 from"../../assets/react.png"
import image6 from"../../assets/java.webp"
const skills =[
    {
        id:1,
        name:"Figma",
        persentage:"92%",
        img:image1
    },
    {
        id:2,
        name:"Sketch",
        persentage:"80%",
        img:image2
    },
    {
        id:3,
        name:"XD",
        persentage:"85%",
        img:image3
    },
    {
        id:4,
        name:"WordPress",
        persentage:"99%",
        img:image4
    },
    {
        id:5,
        name:"React",
        persentage:"89%",
        img:image5
    },
    {
        id:6,
        name:"JavaScript",
        persentage:"93%",
        img:image6
    },
]

const Skill = () => {
    return (
        <div className="py-24">
            {/* header */}
            <div className="flex flex-col justify-center text-center items-center space-y-3">
                <h1 className="bg-gradient-to-r from-purple-700 via-purple-500 to-white inline-block text-transparent bg-clip-text text-4xl md:text-6xl font-bold">My Skills</h1>
                <p className="w-full md:w-1/2 flex text-center text-white">We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
            </div>
            {/* cards */}
            <div className="mt-12 max-w-5xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 px-4">
                    {
                        skills.map((skill) => <div key={skill.id} className="flex flex-col items-center space-y-2">
                            <div className="flex flex-col items-center space-y-4 p-8 group bg-[#150c1c] rounded-2xl hover:bg-purple-800 hover:bg-opacity-30 duration-500 hover:border-2 border-purple-800">
                                <img src={skill.img} alt="" className="w-32"/>
                                <h2 className="text-2xl font-bold text-gray-600 group-hover:text-purple-600 duration-500">{skill.persentage}</h2>
                            </div>
                            <p className=" text-purple-600">{skill.name}</p>
                        </div>)
                    }

                </div>
            </div>
            
        </div>
    );
};

export default Skill;