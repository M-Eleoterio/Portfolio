import { createBrowserRouter } from "react-router-dom";
import Home from "./views/home";
import Projects from "./views/projects";
import Contact from "./views/contact";

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
        element: <Contact />
    }
])