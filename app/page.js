import Image from "next/image";
import Navbar from "./components/Navbar";
import HomeMain from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
export default function Home() {
  return (
    <main className="">
      <Navbar />
      <HomeMain />
      <About />
      <Skills />
      <Work />
      <Contact />
    </main>
  );
}
