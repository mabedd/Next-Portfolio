import IconCloudDemo from "./IconCloud";
import BoxReveal from "./accternity/TextBoxReveal";

export default function TechStack() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center text-white">
      <div className="flex-1 p-8">
        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <p className="text-[3.5rem] font-semibold">
            Tech Stack<span className="text-[#5046e6]">.</span>
          </p>
        </BoxReveal>
        <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <h2 className="mt-[.5rem] text-[1rem]">
            Popular technologies for{" "}
            <span className="text-[#5046e6]">Reliable Applications</span>
          </h2>
        </BoxReveal>
        {/* <BoxReveal boxColor={"#5046e6"} duration={0.5}>
          <div className="mt-[1.5rem]">
            <p>
              -&gt; 20+ free and open-source animated components built with
              <span className="font-semibold text-[#5046e6]"> React</span>,
              <span className="font-semibold text-[#5046e6]"> Typescript</span>,
              <span className="font-semibold text-[#5046e6]">
                {" "}
                Tailwind CSS
              </span>
              , and
              <span className="font-semibold text-[#5046e6]">
                {" "}
                Framer Motion
              </span>
              . <br />
              -&gt; 100% open-source, and customizable. <br />
            </p>
          </div>
        </BoxReveal> */}
      </div>
      <div className="hidden md:block w-px bg-gray-500 h-full"></div>
      <div className="flex-1 p-8">
        <IconCloudDemo />
      </div>
    </div>
  );
}
