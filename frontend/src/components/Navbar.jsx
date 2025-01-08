import {useState} from "react";
import {Link} from "react-router-dom";
import {RiMenuFill, RiMenu3Line} from "react-icons/ri";
import "../assets/styles/Navbar.css"

const menuItems = [{id: 1, name: "Home", link: "#home"}, {id: 2, name: "About", link: "#home"}, {
    id: 3, name: "Skills", link: "#skills"
}, {id: 4, name: "Projects", link: "#projects"}, {id: 5, name: "Contact", link: "#contact"},]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (<header className="px-4 py-8 bg-white fixed left-0 top-0 w-full">
        <navbar className="flex justify-between items-center">
            <div>Logo</div>
            <div className={`menu-container transform ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
                <ul className="menu-list">
                    {menuItems.map((item) => (
                        <li className="menu-item" key={item.id}>
                            <Link to={item.link}>
                                <h4>
                                    <span>0{item.id}</span>{" "}{item.name}
                                </h4>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <button className={`menu-toggle ${isOpen ? "text-white" : "text-black"}`}
                    onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <RiMenu3Line size={40}/> : <RiMenuFill size={40}/>}
            </button>
        </navbar>
    </header>);
}

export default Navbar;