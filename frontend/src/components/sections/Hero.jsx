import ProgrammerImg from "../../assets/img/working-at-home.png"
import ChevronSVG from "../../assets/img/chevron-down.svg"

const Hero = ({ personaData }) => {
    return (
        <>
            <section className="container min-h-svh text-center">

                {/* Intro */}
                <div className="flex flex-col items-center justify-center flex-grow">
                    <img
                        className="w-40 mx-auto"
                        src={ProgrammerImg}
                        alt="Tech Boy"
                    />
                    <h1 className="text-4xl font-bold">{personaData?.fullName}</h1>
                    <p className="text-2xl font-medium">{personaData?.branche}</p>
                    <button className="mt-6 py-2 px-4 rounded-md bg-gray-900 text-gray-200">Contact me</button>
                </div>

                {/* Chevron */}
                <div className="mb-6">
                    <p className="font-light text-sm mb-6">Transforming ideas into software solutions</p>
                    <img
                        className="w-12 h-12 mx-auto animate-bounce cursor-pointer"
                        src={ChevronSVG}
                        alt="Chevron"
                    />
                </div>
            </section>
        </>
    )
}

export default Hero;