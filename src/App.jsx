import { useState, useCallback } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Focus from "./components/Focus";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BootSequence from "./components/BootSequence";
import ScrollProgress from "./components/ScrollProgress";
import "./App.css";

export default function App() {
  const [booted, setBooted] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const [navMenuHeight, setNavMenuHeight] = useState(0);

  const handleDone = useCallback(() => setBooted(true), []);
  const handleToggleNav = useCallback(() => setNavOpen((open) => !open), []);
  const handleCloseNav = useCallback(() => setNavOpen(false), []);
  const handleNavHeightChange = useCallback((height) => setNavMenuHeight(height), []);

  return (
    <>
      <BootSequence onDone={handleDone} />
      <div className={`site ${booted ? "site-visible" : ""}`}>
        <ScrollProgress />
        <div className="grid-bg" />
        <div className="noise" />
        <Nav
          open={navOpen}
          onToggle={handleToggleNav}
          onClose={handleCloseNav}
          onHeightChange={handleNavHeightChange}
        />
        <div
          className={`page-content ${navOpen ? "nav-open" : ""}`}
          style={{ "--nav-menu-height": `${navMenuHeight}px` }}
        >
          <main>
            <Hero />
            <About />
            <Timeline />
            <Focus />
            <Skills />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
