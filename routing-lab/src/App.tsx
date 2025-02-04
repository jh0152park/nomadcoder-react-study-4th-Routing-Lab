import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/common/Layout";
import NotFound from "./pages/common/NotFount";
import About from "./pages/About";
import Home from "./pages/Home";
import Author from "./pages/Author";
import Book from "./pages/Book";
import DetailOption from "./pages/DetailOption";

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
            {
                path: "author/:name",
                element: <Author />,
            },
            {
                path: "author/:name/:book",
                element: <Book />,
            },
            {
                path: "author/:name/:book/chapters",
                element: (
                    <Book>
                        <DetailOption option="Chapters" />
                    </Book>
                ),
            },
            {
                path: "author/:name/:book/characters",
                element: (
                    <Book>
                        <DetailOption option="Characters" />
                    </Book>
                ),
            },
        ],
    },
]);

export default function App() {
    return <RouterProvider router={router} />;
}
