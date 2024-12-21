import React, {useEffect, useState} from "react";

const menuItems = [
    {id: 1, name: "Home", link: "#home"},
    {id: 2, name: "About", link: "#about"}
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    useEffect(() => {
    }, []);

    return (
        <>
           <header className={`z-10 p-[2rem] fixed top-0 left-0 right-0 bg-white`}>
               <nav className="flex justify-between items-center w-full">
                   <div>
                       Logo
                   </div>
                   <div className="sm:hidden z-20">
                       <button onClick={toggle} className="relative">
                           <i className={`fa-solid ${isOpen ? "fa-bars-staggered" : "fa-bars"} fa-2x`}></i>
                       </button>
                   </div>
                   <div className={`${isOpen ? "left-0" : "left-[100vw]"} max-sm:fixed top-0 left-0
                   max-sm:w-full h-full max-sm:bg-white max-sm:flex max-sm:flex-col max-sm:items-center`
                   }>
                       <ul className={`flex gap-[1rem] max-sm:flex-col items-center max-sm:mt-[7rem]`}>
                           {menuItems.map((item, i) => (
                               <li key={i}>
                                   <a href={`${item?.link}`}>{item?.name}</a>
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