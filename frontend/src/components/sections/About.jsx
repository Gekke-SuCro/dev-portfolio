import {useEffect, useState} from "react";
import {calculateAge} from "../../utils/dateUtils.js";
import GalleryImg from "../../assets/img/gallery.png";

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
                <div>
                    <h3 className="h3 mb-[2rem] text-center">About me</h3>
                    <p className="">
                        I am a {age ? age : ""} year old software development student from <span
                        className="border-b-2 border-blue-300 border-dotted ">Rhenen</span>.
                        Experienced in Frontend and Backend software development.
                    </p>
                </div>
                <img
                    className="w-40 sm:w-60 lg:w-80 xl:w-96 mx-auto"
                    src={GalleryImg}
                    alt="Tech Boy"
                />
            </section>
        </>
    )
}

export default About;