"use client";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import Clients from "@/components/Clients";
import MarkettingLamp from "@/components/MarkettingLamp";
import Footer from "@/components/Footer";
import Process from "@/components/Process";
import { TracingBeam } from "@/components/accternity/TracingBeam";
import { FloatingNav } from "@/components/accternity/FloatingNav";

import { navItems } from "@/data";

export default function Home() {
  return (
    <>
      <Hero />
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <TracingBeam>
          <div className="max-w-7xl w-full">
            <FloatingNav navItems={navItems} />
            <Grid />
            <MarkettingLamp />
            <RecentProjects />
            {/* <Clients /> */}
            <Experience />
            <Process />
            <Footer />
          </div>
        </TracingBeam>
      </main>
    </>
  );
}
