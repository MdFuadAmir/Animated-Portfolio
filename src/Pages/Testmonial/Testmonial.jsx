import image1 from"../../assets/profile1.jpg"
import image2 from"../../assets/profile2.jpg"
import image3 from"../../assets/profile3.jpeg"
import image4 from"../../assets/profile4.jpeg"
import image5 from"../../assets/profile5.jpeg"
import image6 from"../../assets/profile6.jpeg"
const clientList =[
    {
        id:1,
        name:"Maruf Hasan",
        date:"2/12/2022",
        img:image1,
        discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur illo quas dolorum architecto deserunt ipsum repellat eveniet laborum assumenda quidem et, nulla nam quaerat iure officiis recusandae itaque iste voluptatibus?"
    },
    {
        id:2,
        name:"Arafa Amir",
        date:"12/4/2023",
        img:image2,
        discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur illo quas dolorum architecto deserunt ipsum repellat eveniet laborum assumenda quidem et, nulla nam quaerat iure officiis recusandae itaque iste voluptatibus?"
    },
    {
        id:3,
        name:"Arefin Kalam",
        date:"23/7/2024",
        img:image3,
        discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur illo quas dolorum architecto deserunt ipsum repellat eveniet laborum assumenda quidem et, nulla nam quaerat iure officiis recusandae itaque iste voluptatibus?"
    },
    {
        id:4,
        name:"Abdullah Zubair",
        date:"4/5/2019",
        img:image4,
        discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur illo quas dolorum architecto deserunt ipsum repellat eveniet laborum assumenda quidem et, nulla nam quaerat iure officiis recusandae itaque iste voluptatibus?"
    },
    {
        id:5,
        name:"Habib Ullah",
        date:"7/4/2019",
        img:image5,
        discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur illo quas dolorum architecto deserunt ipsum repellat eveniet laborum assumenda quidem et, nulla nam quaerat iure officiis recusandae itaque iste voluptatibus?"
    },
    {
        id:6,
        name:"Sanaulla",
        date:"27/8/2021",
        img:image6,
        discription:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur illo quas dolorum architecto deserunt ipsum repellat eveniet laborum assumenda quidem et, nulla nam quaerat iure officiis recusandae itaque iste voluptatibus?"
    },
]

const Testmonial = () => {
    return (
        <div>
            {/* header */}
            <div className="flex flex-col justify-center text-center items-center space-y-3 my-12">
                <h1 className="bg-gradient-to-r from-purple-700 via-purple-500 to-white inline-block text-transparent bg-clip-text text-4xl md:text-6xl font-bold">What Client Say</h1>
            </div>
            {/* card */}
            <div className="max-w-5xl mx-auto p-4 mb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {
                        clientList.map((data)=> <div key={data.id} className="p-4 border rounded-2xl space-y-4 group hover:bg-purple-500 hover:bg-opacity-20 duration-500 hover:border-purple-700">
                            <div className="flex gap-4 items-center">
                                <img src={data.img} alt="" className="w-24 h-24 rounded-full shadow-lg"/>
                                <div>
                                <h1 className="text-3xl font-bold text-purple-500 group-hover:text-white">{data.name}</h1>
                                <p className="text-gray-600 group-hover:text-white">{data.date}</p>
                                </div>
                            </div>
                            <p className="text-gray-500 group-hover:text-white">{data.discription}</p>
                            
                        </div>)
                    }
                </div>

            </div>
            
        </div>
    );
};

export default Testmonial;