import  {useState} from "react";
import {Link} from "react-router-dom";
import { RiMenuFill, RiMenu3Line  } from "react-icons/ri";

const menuItems = [
    { id: 1, name: "Home", link: "#home" },
    { id: 2, name: "About", link: "#home" },
    { id: 3, name: "Skills", link: "#skills" },
    { id: 4, name: "Projects", link: "#projects" },
    { id: 5, name: "Contact", link: "#contact" },
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="px-8 py-6 bg-white fixed top-0 left-0 w-full z-50">
            <nav className="flex items-center justify-between">
                <div className="font-bold text-xl">Logo</div>
                <div className={`${isOpen ? "left-1/3" : "left-[200svw]"} transition-all duration-2/00 ease-in 
                bg-accent bg-opacity-90 fixed top-0 w-2/3 h-full md:relative md:left-0 md:bg-white
                flex justify-center items-center`}>
                    <ul className={`flex flex-col max-md:flex-wrap px-8 max-md:py-28 items-center justify-center md:justify-end gap-8 w-full
                    sm:flex-row`}>
                        {menuItems.map((item) => (
                            <li key={item.id}>
                                <Link to={`/${item.link}`}>
                                    <h4 className="font-poppins max-md:text-base max-md:text-white max-md:font-bold flex gap-2 items-center">
                                        <span className="text-sm md:text-accent italic">0{item.id}</span> {item.name}
                                    </h4>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={`md:hidden z-50 ${isOpen ? "text-white" : "text-black"}`} onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <RiMenu3Line size={40}/> : <RiMenuFill size={40}/>}
                </div>
            </nav>
        </header>
    )
}

export default Navbar;