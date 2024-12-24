import {Link} from "react-router-dom";

const menuItems = [
    { id: 1, name: "Home", link: "#home" },
    { id: 2, name: "About", link: "#home" },
    { id: 3, name: "Skills", link: "#skills" },
]

const Navbar = () => {
    return (
        <header className="px-8 py-6 bg-white fixed top-0 left-0 w-full z-50">
            <nav className="flex items-center justify-between">
                <div className="font-bold text-md">Logo</div>
                <ul className="flex items-center justify-between gap-4">
                    {menuItems.map((item) => (
                        <li key={item.id}>
                            <Link to={`/${item.link}`}>
                                <h4 className="nav-link">{item.name}</h4>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;