import { CarouselPlugin } from "@/components/carousel";
import { Navbar } from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 via-purple-400 to-indigo-400 text-white">
      <h3></h3>
      <CarouselPlugin />
    </div>
  );
}
