import GalleryImg from "../../assets/img/gallery.png"
import ChevronSVG from "../../assets/img/chevron-down.svg"

const Hero = ({ personaData }) => {
    return (
        <>
            <section id="home" className="container h-svh items-center">
                {/* Intro */}
                <div className="flex flex-col sm:flex-row-reverse sm:gap-6 lg:gap-12 xl:gap-24 items-center justify-center flex-grow mt-8">
                    <img
                        className="w-32  lg:w-80 xl:w-96 mx-auto"
                        src={GalleryImg}
                        alt="Tech Boy"
                    />
                    <div className="text-center leading-loose">
                        <h1 className="font-medium text-4xl md:text-5xl">{personaData?.fullName}</h1>
                        <p className="font-light text-2xl md:text-3xl">{personaData?.branche}</p>
                    </div>
                </div>

                {/* Chevron */}
                <div>
                    <div>
                        <p className="font-light text-sm mb-6">
                            <span className="text-accent">&#34;</span>
                            Transforming ideas into software solutions
                            <span className="text-accent">&#34;</span>
                        </p>
                        {/*<button className="mt-6 py-2 px-4 rounded-md bg-accent text-white mx-auto">Contact me</button>*/}
                    </div>
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