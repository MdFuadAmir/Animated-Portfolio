import { Link } from "react-router-dom"
import image1 from "../../assets/p1 (1).jpg"
import image2 from "../../assets/p2 (1).jpg"
import image3 from "../../assets/p3 (1).jpg"
import image4 from "../../assets/p4 (1).jpg"
import image5 from "../../assets/p5 (1).jpg"
import image6 from "../../assets/p6 (1).jpg"
import { FiArrowDownRight } from "react-icons/fi";


const datalist =[
    {
        id:1,
        name:"Lichu-portfolio",
        discription:"An expense tracker app that helps users keep track of their expenses, set budgets, and analyze spending habits.",
        img: image1,
        path: "https://lichu.surge.sh/" 
    },
    {
        id:2,
        name:"Restaurant-tutorial",
        discription:"A fitness tracker app designed to help users track their workouts, set fitness goals, and monitor progress.",
        img: image2,
        path:"https://kushtia-cafa.surge.sh/" 
    },
    {
        id:3,
        name:"Rent-home-bd ",
        discription:"A task management app that enables users to create, organize, and prioritize tasks, set deadlines, and collaborate with team members.",
        img: image3,
        path:"https://disturbed-treatment.surge.sh/" 
    },
    {
        id:4,
        name:"E-Shop-Bd ",
        discription:"A recipe sharing app where users can discover new recipes, share their own recipes, and interact with other food enthusiasts.",
        img: image4,
        path:"https://eshopbd.surge.sh/" 
    },
    {
        id:5,
        name:"Educational-system",
        discription:"A weather forecast app that provides users with real-time weather updates, forecasts, and weather alerts for their location.",
        img: image5,
        path:"https://lucky-talk.surge.sh/" 
    },
    {
        id:6,
        name:"your-wish",
        discription:"A finance management app that helps users manage their finances, track expenses, set financial goals, and analyze spending patterns.",
        img: image6,
        path:"https://mdfuadamir.github.io/your-wish/" 
    },
]

const RecentWorks = () => {
    return (
        <div className="py-12">
            {/* header */}
            <div className="flex flex-col justify-center text-center items-center space-y-3">
                <h1 className="bg-gradient-to-r from-purple-700 via-purple-500 to-white inline-block text-transparent bg-clip-text text-4xl md:text-6xl font-bold">My Recent Works</h1>
                <p className="w-full md:w-1/2 flex text-center text-white">We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
            </div>
            {/* cards */}
            <div className="mt-12 max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {
                        datalist.map((data) => <div key={data.id} className="p-6 bg-[#140b1c] rounded-xl">
                            <img src={data.img} alt="" className=" rounded-2xl"/>
                            <div className="mt-4">
                            <div className="flex items-center bg-gradient-to-r from-purple-500 via-purple-700 to-purple-900 p-4 rounded-xl ">
                                <div className=" space-y-3">
                                    <h1 className="text-4xl font-bold  text-white">
                                    <Link to={data.path}>{data.name}</Link>
                                    </h1>
                                    <p className="text-white text-sm">{data.discription}</p>
                                </div>
                                <FiArrowDownRight size={100} color="white"/>
                            </div>
                            </div> 
                        </div>)
                    }
                </div>
            </div>

            
        </div>
    );
};

export default RecentWorks;