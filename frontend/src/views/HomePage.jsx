import "../styles/HomePage.css"
import Navbar from "../components/Navbar.jsx";

const HomePage = () => {
    return (
        <>
            {/* Navbar */}
            <Navbar />

            {/* Main content */}
            <main className="mt-28">
                {/* Hero */}
                <section className="section">
                    <h1 className="font-poppins">Jayden Roeper</h1>
                    <h2 className="font-sourceCodePro text-accent">Full-stack Developer</h2>
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