import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import About from "../components/sections/About";
import Skills from "../components/sections/Skills";
import Experience from "../components/sections/Experience";
import Certifications from "../components/sections/Certifications";
import Projects from "../components/sections/Projects";
import Testimonials from "../components/sections/Testimonials";
import Contact from "../components/sections/Contact";
import BackToTop from "../components/ui/BackToTop";

export default function HomePage() {
  return (
    <>
      <Header />
      <main role="main">
      <About />
      <Skills />
        <Experience />
        <Certifications />
      <Projects />
        <Testimonials />
      <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}