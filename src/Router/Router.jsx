import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Components/Home/Home";
import Services from "../Pages/Services/Services";


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
        ]
    }
])
export default router;