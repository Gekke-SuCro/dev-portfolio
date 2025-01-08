import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import "../assets/styles/views/HomePage.css"

const HomePage = () => {
    return (
        <>
            {/* Navbar */}
            <Navbar />

            {/* Main content */}
            <main>
                {/* Hero */}
                <section className="section flex flex-col gap-4 h-svh">
                    <Hero />
                </section>
            </main>

            {/* Footer */}
            <footer>
                Footer
            </footer>
        </>
    )
}

export default HomePage;