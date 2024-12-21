import {useEffect, useState} from "react";
import {calculateAge} from "../../utils/dateUtils.js";

const About = () => {
    const [currentYear, setCurrentYear] = useState(2024);

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, [])

    return (
        <>
            <footer className="p-[1rem] text-center text-sm text-darkGrey">
                <span>&#169; {currentYear} - {currentYear + 1}</span>
            </footer>
        </>
    )
}

export default About;