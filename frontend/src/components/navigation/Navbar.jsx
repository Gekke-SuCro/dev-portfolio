import React, {useEffect, useState} from "react";
import "../../assets/styles/Navbar.css";

const menuItems = [
    {id: 1, name: "Home", link: "#home"},
    {id: 2, name: "About", link: "#about"},
    {id: 3, name: "Experience", link: "#"},
    {id: 4, name: "Work", link: "#"},
    {id: 5, name: "Contact", link: "#"}
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    useEffect(() => {
    }, []);

    return (
        <>
           <header className={`z-10 px-8 py-6 fixed top-0 left-0 right-0 bg-white`}>
               <nav className="flex justify-between items-center w-full">
                   <div className="z-20">
                       <span className="font-bold text-lg">JR</span>
                   </div>
                   <div className="md:hidden z-20">
                       <button id="menu-toggle" onClick={toggle} className="relative">
                           <i className={`fa-solid ${isOpen ? "fa-bars-staggered" : "fa-bars"} fa-2x`}></i>
                       </button>
                   </div>
                   <div className={`${isOpen ? "isOpen" : ""} nav-menu max-md:isMobile`
                   }>
                       <ul className={`flex gap-[2rem] max-md:flex-col items-center max-md:mt-[7rem] text-center`}>
                           {menuItems.map((item, i) => (
                               <li key={i}>
                                   <a href={`${item?.link}`} onClick={toggle}>
                                       <div className="flex flex-col md:flex-row md:gap-1 md:items-center">
                                           <span className="italic font-light text-sm md:text-accent">0{item.id}</span><h4>{item?.name}</h4>
                                       </div>
                                   < /a>
                               </li>
                           ))}
                       </ul>
                   </div>
               </nav>
           </header>
        </>
    )
}

export default Navbar;