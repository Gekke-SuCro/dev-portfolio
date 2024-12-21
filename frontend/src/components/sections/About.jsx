import {useEffect, useState} from "react";
import {calculateAge} from "../../utils/dateUtils.js";

const About = ({ personaData }) => {
    const [age, setAge] = useState(0);

    useEffect(() => {
       if (personaData && personaData?.birthDate) {
           setAge(calculateAge(personaData?.birthDate));
       }
    })

    return (
        <>
            <section className="bg-black text-white py-[5rem] px-[1rem]">
                <h3 className="h3 text-center">About me</h3>
                <p className="text-center">
                    I am a {age ? age : ""} year old software development student from <span className="border-b-2 border-blue-300 border-dotted ">Rhenen</span>.
                    Experienced in Frontend and Backend software development.
                </p>
            </section>
        </>
    )
}

export default About;