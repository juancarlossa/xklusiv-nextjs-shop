import { BackgroundBeamsDemo } from "@/components/background-beams";
import { ModeToggle } from "@/components/dark-mode-toggle";
import { Navbar } from "@/components/navbar";
import { ThreeDCardDemo } from "@/components/three-d-card";
import Image from "next/image";


export default function Home () {
  return (
    <div className="flex flex-col min-h-screen mx-5">

      <header className="grid grid-cols-3 w-full py-3">
        <Navbar className="flex justify-start" />
        <div className="flex items-center justify-center w-full">
          <Image
            alt="logo"
            height={140}
            src="/images/logo-xklusiv-transparent.png"
            width={140}
          />
        </div>
        <div className="flex items-center justify-end w-full">
          <ModeToggle />
        </div>
      </header>

      <main className="flex flex-col flex-grow items-center justify-center">
        <BackgroundBeamsDemo className="flex flex-grow">
          !main
        </BackgroundBeamsDemo>
        <ThreeDCardDemo />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        !footer
      </footer>
    </div>
  );
}
