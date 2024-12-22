import {useEffect, useState} from "react";
import {calculateAge} from "../../utils/dateUtils.js";

const About = ({ personaData }) => {
    const [age, setAge] = useState(0);

    useEffect(() => {
       if (personaData && personaData?.birthDate) {
           setAge(calculateAge(personaData?.birthDate));
       }
    }, [personaData])

    return (
        <>
            <section id="about" className="bg-black text-white px-[1rem] py-section mb-section min-h-svh">
                <h3 className="h3  mb-[2rem] text-center">About me</h3>
                <p className="">
                    I am a {age ? age : ""} year old software development student from <span className="border-b-2 border-blue-300 border-dotted ">Rhenen</span>.
                    Experienced in Frontend and Backend software development.
                </p>
            </section>
        </>
    )
}

export default About;