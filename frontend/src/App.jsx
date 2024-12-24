import HomePage from "./views/HomePage";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        errorElement: <span>Oops! Something went wrong</span>
    }
])

function App() {
    return <RouterProvider router={router} />;
}

export default App
