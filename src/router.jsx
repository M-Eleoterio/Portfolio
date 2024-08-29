import { createBrowserRouter } from "react-router-dom";
import Home from "./views/home";

export const router = createBrowserRouter([
    /* HOME */
    {
        path: "/",
        element: <Home />
    }, 
    /* CONTACT */
    {
        path: "/contact",
        element: <h1>Contact</h1>
    }, 
    /* PROJECTS */
    {
        path: "/projects",
        element: <h1>Projects</h1>
    }
])