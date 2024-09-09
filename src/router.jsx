import { createBrowserRouter } from "react-router-dom";
import Home from "./views/home";
import Projects from "./views/projects";

export const router = createBrowserRouter([
    /* HOME */
    {
        path: "/",
        element: <Home />
    }, 
    /* CONTACT */
    {
        path: "/projects",
        element: <Projects />
    }, 
    /* PROJECTS */
    {
        path: "/contact",
        element: <h1>Contact</h1>
    }
])