import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";


const router = createBrowserRouter([
    {
        path: "/",
        element:<Root/>,
        children:[
            {
                path:"/",
                element: <div>This is home</div>
            }
        ]
    }
])
export default router;