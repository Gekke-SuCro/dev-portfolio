import  {useState} from "react";
import {Link} from "react-router-dom";
import { RiMenuFill, RiMenu3Line  } from "react-icons/ri";

const menuItems = [
    { id: 1, name: "Home", link: "#home" },
    { id: 2, name: "About", link: "#home" },
    { id: 3, name: "Skills", link: "#skills" },
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="px-8 py-6 bg-white fixed top-0 left-0 w-full z-50">
            <nav className="flex items-center justify-between">
                <div className="font-bold text-xl">Logo</div>
                <div className={`${isOpen ? "left-1/3" : "left-full"} transition-all duration-2/00 ease-in 
                bg-accent bg-opacity-90 fixed top-0 w-2/3 h-full`}>
                    <ul className={`flex flex-col items-center justify-center gap-8 w-full h-full`}>
                        {menuItems.map((item) => (
                            <li key={item.id}>
                                <Link to={`/${item.link}`}>
                                    <h4 className="text-xl text-white font-bold">{item.name}</h4>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={`z-50 ${isOpen ? "text-white" : "text-black"}`} onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <RiMenu3Line size={40}/> : <RiMenuFill size={40}/>}
                </div>
            </nav>
        </header>
    )
}

export default Navbar;