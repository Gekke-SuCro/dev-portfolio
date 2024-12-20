import {useEffect, useState} from "react";

import {fetchJson} from "../utils/jsonFetchUtils";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About.jsx";

const HomePage = () => {
    const [personaData, setPersonaData] = useState({
        fullName: "",
        branche: ""
    });

    useEffect(() => {
        const loadPersonaData = async () => {
            try {
                const data = await fetchJson("persona");
                setPersonaData(data);
            } catch (error) {
                console.error("Error fetching persona data:", error);
            }
        }

        loadPersonaData();
    }, [])

    return (
        <>
            <Hero personaData={personaData} />
            <About personaData={personaData} />

            {/* Skills* */}
            {/* Projects* */}
            {/* Contact* */}
        </>
    )
}

export default HomePage;