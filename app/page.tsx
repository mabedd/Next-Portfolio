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

export default function Home() {
  return (
    <>
      <Hero />
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="relative w-full flex justify-center">
          <div className="max-w-7xl w-full">
            <Grid />
            <MarkettingLamp />
            <RecentProjects />
            <Experience />
            <Process />
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
}
