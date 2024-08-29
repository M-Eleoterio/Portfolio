import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    /* HOME */
    {
        path: "/",
        element: <h1>Home</h1>
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