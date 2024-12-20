import {useEffect, useState} from "react";

import "../assets/styles/HomePage.css"
import ProgrammerImg from "../assets/img/working-at-home.png"

import {fetchJson} from "../utils/jsonFetchUtils.js";

const HomePage = () => {
    const [personalData, setPersonalData] = useState({});

    useEffect(() => {
        const loadPersonalData = async () => {
            const data = await fetchJson("persona");
            setPersonalData(data);
        }

        loadPersonalData();
    }, [])

    return (
        <>
            {/* Intro Section */}
            <section className="section mx-[1rem] text-center">
                <img
                    className="max-w-[128px] mx-auto"
                    src={ProgrammerImg}
                    alt="Tech Boy"
                />
                <h1 className="text-4xl font-bold">{personalData?.fullName}</h1>
                <p className="text-2xl font-medium">{personalData?.branche}</p>
            </section>
        </>
    )
}

export default HomePage;