import Gallery from "../../assets/img/gallery.png"
import { IoChevronDownCircleOutline } from "react-icons/io5";

// eslint-disable-next-line react/prop-types
const HeroButton = ({ text }) => {
    return (
        <button className="px-3 py-2">{text}</button>
    )
}

const Hero = () => {
    return (
        <>
            <div className="mx-auto w-full flex-grow mt-section flex flex-col justify-center items-center">
                <div>
                    <img src={Gallery} alt="me" className="w-48"/>
                </div>
                <div className="flex flex-col gap-2 leading-tight">
                    <span>Hi, I&#39;m</span>
                    <h1 className="font-poppins">Jayden Roeper</h1>
                    <h2 className="font-sourceCodePro text-accent">Full-stack Developer</h2>
                </div>
                <div className="flex gap-2 leading-tight mx-auto mt-8">
                    <HeroButton text="Contact me"/>
                    <HeroButton text="Projects"/>
                </div>
            </div>
            <div className="mb-6">
                <IoChevronDownCircleOutline size={32} className="mx-auto"/>
            </div>
        </>
    )
}

export default Hero;