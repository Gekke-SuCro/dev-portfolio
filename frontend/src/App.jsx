import HomePage from "./views/HomePage";
import Footer from "./components/navigation/Footer";
import Navbar from "./components/navigation/Navbar";

function App() {

  return (
    <>
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main>
            <HomePage />
        </main>

        {/* Footer */}
        <Footer />
    </>
  )
}

export default App
