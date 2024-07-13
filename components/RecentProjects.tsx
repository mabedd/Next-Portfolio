"use client";

import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { CardContainer, CardBody, CardItem } from "./accternity/3DCard";
import Link from "next/link";

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading text-white text-center">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-10 mt-10">
        {projects.map((item, index) => (
          <div
            className={`flex items-center justify-center w-full sm:w-80 md:w-96 ${
              index >= 3 ? "mt-4" : ""
            }`} // Adjusted margin between rows
            key={item.id}
          >
            <CardContainer
              className="inter-var mb-4"
              containerClassName="py-10"
            >
              <CardBody className="bg-gray-900 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-gray-800 dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-300 mb-2"
                >
                  {item.title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-400 text-sm max-w-sm mt-2 mb-4"
                >
                  {item.des}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4 mb-4">
                  <Image
                    src={item.img}
                    height={600}
                    width={1000}
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt={item.title}
                  />
                </CardItem>
                <div className="flex justify-center items-center mt-4">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <CardItem
                        key={index}
                        translateZ={10}
                        className="border border-white/[.2] rounded-full bg-black lg:w-14 lg:h-14 w-12 h-12 flex justify-center items-center -ml-2 first:ml-0"
                      >
                        <Image
                          src={icon}
                          alt="icon"
                          width={32}
                          height={32}
                          className="p-2"
                        />
                      </CardItem>
                    ))}
                  </div>
                </div>
                <div className="flex justify-center items-center mt-4">
                  <p
                    className="flex lg:text-xl md:text-xs text-sm text-purple cursor-pointer"
                    onClick={() => window.open(item.link, "_blank")}
                  >
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ml-2" color="#CBACF9" />
                </div>
              </CardBody>
            </CardContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
