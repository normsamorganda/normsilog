import Image from "next/image";
import Navbar from "./components/Navbar";
import HomeMain from "./components/Home";
export default function Home() {
  return (
    <main className="">
      <Navbar />
      <HomeMain />
      <h1 className="text-2xl font-bold">Hello</h1>
    </main>
  );
}
