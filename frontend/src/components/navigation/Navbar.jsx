import React, {useEffect, useState} from "react";

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
                   <div className={`fixed top-0 ${isOpen ? "left-1/3" : "left-[100vw]"} sm:block transition-all duration-300 bg-white opacity-95 w-2/3 h-full flex flex-col pt-[7rem] px-[2rem]`}>
                       <ul className={`items-center`}>
                           Nav list
                       </ul>
                   </div>
               </nav>
           </header>
        </>
    )
}

export default Navbar;