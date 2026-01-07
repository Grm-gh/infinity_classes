import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ResultPage from "./pages/ResultPage";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Books from "./pages/Books";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/results" element={<ResultPage />} />
      </Routes>

      <Footer />
    </>
  );
}
