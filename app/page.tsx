"use client";

import {
  Hero,
  Grid,
  Experience,
  RecentProjects,
  MarkettingLamp,
  Footer,
  Process,
} from "../components";
import { TracingBeam } from "@/components/accternity/TracingBeam";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initialize the state
    handleResize();

    // Add event listener to handle resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Hero />
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="relative w-full flex justify-center">
          <div className="max-w-7xl w-full">
            {isMobile ? (
              <>
                <Grid />
                <RecentProjects />
                <Experience />
                <Process />
                <Footer />
              </>
            ) : (
              <TracingBeam className="relative">
                <Grid />
                <MarkettingLamp />
                <RecentProjects />
                <Experience />
                <Process />
                <Footer />
              </TracingBeam>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
