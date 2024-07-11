import image1 from "../../assets/b1.jpg"
import image2 from "../../assets/b2.jpg"
import image3 from "../../assets/b3.jpg"
import image4 from "../../assets/b4.jpg"
import image5 from "../../assets/b5.png"
import image6 from "../../assets/b6.jpg"
import image7 from "../../assets/b7.jpg"
import image8 from "../../assets/b8.jpg"
import { FaRegComments } from "react-icons/fa";
import { CiCalendar } from "react-icons/ci";
const blogdata = [
    {
        id:1,
        name:"Top 10 UI UX Designers",
        types:<button className="btn border-none font-bold text-white px-6 rounded-full bg-gradient-to-r from-purple-800 to-gray-800 hover:from-gray-800 hover:to-purple-800 duration-500">TUTORIAL</button>,
        date:"Oct 01, 2022",
        comment:"Comment(0)",
        img:image1
    },
    {
        id:2,
        name:"App Development Guides",
        types:<button className="btn border-none font-bold text-white px-6 rounded-full bg-gradient-to-r from-purple-800 to-gray-800 hover:from-gray-800 hover:to-purple-800 duration-500">TIPS</button>,
        date:"Nov 01, 2022",
        comment:"Comment(7)",
        img:image2
    },
    {
        id:3,
        name:"Learn Graphic Design Free",
        types:<button className="btn border-none font-bold text-white px-6 rounded-full bg-gradient-to-r from-purple-800 to-gray-800 hover:from-gray-800 hover:to-purple-800 duration-500">FREEBIES</button>,
        date:"Dec 01, 2022",
        comment:"Comment(5)",
        img:image3
    },
    {
        id:4,
        name:"Web Design Basics",
        types:<button className="btn border-none font-bold text-white px-6 rounded-full bg-gradient-to-r from-purple-800 to-gray-800 hover:from-gray-800 hover:to-purple-800 duration-500">TUTORIAL</button>,
        date:"Jan 01, 2023",
        comment:"Comment(0)",
        img:image4
    },
    {
        id:5,
        name:"SEO Strategies",
        types:<button className="btn border-none font-bold text-white px-6 rounded-full bg-gradient-to-r from-purple-800 to-gray-800 hover:from-gray-800 hover:to-purple-800 duration-500">FREEBIES</button>,
        date:"Feb 01, 2023",
        comment:"Comment(10)",
        img:image5
    },
    {
        id:6,
        name:"Introduction To JavaScript",
        types:<button className="btn border-none font-bold text-white px-6 rounded-full bg-gradient-to-r from-purple-800 to-gray-800 hover:from-gray-800 hover:to-purple-800 duration-500">TIPS</button>,
        date:"Mar 01, 2023",
        comment:"Comment(9)",
        img:image6
    },
    {
        id:7,
        name:"Responsive Web Design",
        types:<button className="btn border-none font-bold text-white px-6 rounded-full bg-gradient-to-r from-purple-800 to-gray-800 hover:from-gray-800 hover:to-purple-800 duration-500">TIPS</button>,
        date:"Apr 01, 2023",
        comment:"Comment(20)",
        img:image7
    },
    {
        id:8,
        name:"CSS Flexbox Tutorial",
        types:<button className="btn border-none font-bold text-white px-6 rounded-full bg-gradient-to-r from-purple-800 to-gray-800 hover:from-gray-800 hover:to-purple-800 duration-500">TUTORIAL</button>,
        date:"May 01, 2023",
        comment:"Comment(25)",
        img:image8
    },

]

const Blog = () => {
    return (
        <div className="bg-black py-12">
            {/* header */}
            <div className="flex flex-col justify-center text-center items-center space-y-3">
                <h1 className="bg-gradient-to-r from-purple-700 via-purple-500 to-white inline-block text-transparent bg-clip-text text-4xl md:text-6xl font-bold">Recent Blogs</h1>
                <p className="w-full md:w-1/2 flex text-center text-white">We put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.</p>
            </div>
            <div className="py-12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
                {
                    blogdata.map((blog) => <div key={blog.id}>
                        <div style={{backgroundImage:`url(${blog.img})`}} className="p-4 rounded-2xl hover:scale-105 overflow-hidden duration-500 group bg-no-repeat bg-cover h-[320px] flex-col flex justify-between">
                            <div>{blog.types}</div>
                            <div className="p-4 rounded-2xl bg-purple-900 group-hover:bg-gradient-to-r from-purple-500 to-purple-700 duration-1000 space-y-3">
                                <div className="flex items-center gap-2 text-purple-500 font-bold group-hover:text-white"><CiCalendar size={20}/>{blog.date}</div>
                                <div className="flex items-center gap-2 text-purple-500 font-bold group-hover:text-white"><FaRegComments size={20}/> {blog.comment}</div>
                                <div className="text-white font-bold text-2xl">{blog.name}</div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            
        </div>
    );
};

export default Blog;