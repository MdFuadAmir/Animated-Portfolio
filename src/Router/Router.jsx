import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Components/Home/Home";
import Services from "../Pages/Services/Services";
import Skills from "../Pages/Skills/Skills";
import Contact from "../Pages/Contact/Contact ";
import Works from "../Pages/Works/Works";
import Testmonial from "../Pages/Testmonial/Testmonial";
import Resume from "../Pages/Resume/Resume";


const router = createBrowserRouter([
    {
        path: "/",
        element:<Root/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/services",
                element:<Services/>
            },
            {
                path:"/skill",
                element:<Skills/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/works",
                element:<Works/>
            },
            {
                path:"/works",
                element:<Works/>
            },
            {
                path:"/testmonials",
                element:<Testmonial/>
            },
            {
                path:"/resume",
                element:<Resume/>
            },
        ]
    }
])
export default router;