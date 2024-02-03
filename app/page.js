import Image from "next/image";
import Navbar from "./components/Navbar";
import HomeMain from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
export default function Home() {
  return (
    <main className="">
      <Navbar />
      <HomeMain />
      <About />
      <Skills />
      <Work />
      {/* <h1 className="text-2xl font-bold">Hello</h1> */}
    </main>
  );
}
