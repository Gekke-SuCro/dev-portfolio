import GalleryImg from "../../assets/img/gallery.png"
import ChevronSVG from "../../assets/img/chevron-down.svg"

const Hero = ({ personaData }) => {
    return (
        <>
            <section id="home" className="container h-svh items-center">
                {/* Intro */}
                <div className="flex flex-col lg:flex-row-reverse md:gap-6 items-center justify-center flex-grow mt-8">
                    <img
                        className="w-40 sm:w-60 lg:w-80 mx-auto"
                        src={GalleryImg}
                        alt="Tech Boy"
                    />
                    <div className="text-center">
                        <h1 className="font-medium text-4xl">{personaData?.fullName}</h1>
                        <p className="font-light text-2xl">{personaData?.branche}</p>
                        <button className="mt-6 py-2 px-4 rounded-md bg-accent text-white">Contact me</button>
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