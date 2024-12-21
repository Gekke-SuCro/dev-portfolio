import ProgrammerImg from "../../assets/img/working-at-home.png"
import ChevronSVG from "../../assets/img/chevron-down.svg"

const Hero = ({ personaData }) => {
    return (
        <>
            <section id="home" className="container h-svh text-center">

                {/* Intro */}
                <div className="flex flex-col sm:flex-row-reverse items-center justify-center flex-grow mt-8">
                    <img
                        className="w-40 mx-auto"
                        src={ProgrammerImg}
                        alt="Tech Boy"
                    />
                    <div>
                        <h1 className="text-4xl font-black">{personaData?.fullName}</h1>
                        <p className="text-2xl font-bold">{personaData?.branche}</p>
                        {/*<button className="mt-6 py-2 px-4 rounded-md bg-accent text-white">Contact me</button>*/}
                    </div>
                </div>

                {/* Chevron */}
                <div>
                    <p className="font-light text-sm mb-6">
                        <span className="text-accent">&#34;</span>
                        Transforming ideas into software solutions
                        <span className="text-accent">&#34;</span>
                    </p>
                    <a href="#about">
                        <img
                            className="w-12 h-12 mx-auto animate-bounce cursor-pointer"
                            src={ChevronSVG}
                            alt="Chevron"
                        />
                    </a>
                </div>
            </section>
        </>
    )
}

export default Hero;