import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/common/Layout";
import NotFound from "./pages/common/NotFount";
import About from "./pages/About";
import Home from "./pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "about",
                element: <About />,
            },
        ],
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}
