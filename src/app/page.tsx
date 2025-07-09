import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}