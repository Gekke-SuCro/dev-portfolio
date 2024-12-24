import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./views/HomePage";
import './styles/layout.css'

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
