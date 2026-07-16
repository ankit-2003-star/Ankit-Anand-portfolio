import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Focus from "./components/Focus";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <>
      <div className="grid-bg" />
      <div className="noise" />
      <Nav />
      <main>
        <Hero />
        <About />
        <Focus />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
