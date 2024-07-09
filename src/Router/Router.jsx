import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Components/Home/Home";
import Services from "../Pages/Services/Services";
import Skills from "../Pages/Skills/Skills";


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
        ]
    }
])
export default router;