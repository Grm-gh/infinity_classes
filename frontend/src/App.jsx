import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ResultPage from "./pages/ResultPage";

function Home() {
  return <div className="min-h-screen bg-lightbg"></div>;
}

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<ResultPage />} />
      </Routes>
    </>
  );
}
