import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ResultPage from "./pages/ResultPage";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Books from "./pages/Books";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactUs";
import AboutDetails from "./pages/AboutDetails";

export default function App() {
  return (
    <>
      {/* Navbar always visible */}
      <Navbar />

      {/* Push content below fixed navbar */}
      <div className="pt-20 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/results" element={<ResultPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path='/about-details' element={<AboutDetails />} />
        </Routes>
      </div>

      {/* Footer always visible */}
      <Footer />
    </>
  );
}
