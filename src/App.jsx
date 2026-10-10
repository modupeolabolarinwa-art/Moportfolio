import Loader from "./components/Loader.jsx";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Marquee from "./components/Marquee.jsx";
import Work from "./components/Work.jsx";
import Skills from "./components/Skills.jsx";
import Toolkit from "./components/Toolkit.jsx";
import Sidequests from "./components/Sidequests.jsx";
import About from "./components/About.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Loader />
      <a className="skip" href="#work">Skip to content</a>
      <Nav />
      <main id="top">
        <Hero />
        <Marquee />
        <Work />
        <Skills />
        <Toolkit />
        <Sidequests />
        <About />
      </main>
      <Footer />
    </>
  );
}
