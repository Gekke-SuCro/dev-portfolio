import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./views/HomePage";
import './assets/styles/layout.css'
import './assets/styles/typography.css'

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
