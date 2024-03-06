import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/common/Layout";
import NotFound from "./pages/common/NotFount";
import About from "./pages/About";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <NotFound />,
        children: [
            // {
            //   path: "",
            //   element: ""
            // },
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
