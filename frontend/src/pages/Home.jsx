import Hero from "../components/home/Hero";
import QuoteSection from "../components/home/QuoteSection";
import Principal from "../components/home/Principal";
import Interview from "../components/home/Interview";
import Courses from "../components/home/Courses";
//import StudyMaterial from "../components/home/StudyMaterial";
import Blogs from "../components/home/Blogs";
import Faculty from "../components/home/Faculty";

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <QuoteSection />
      <Principal />
      <Interview />
      <Courses />
    </div>
  );
}
