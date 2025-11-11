"use client";

import SkillsCard from "@/components/SkillsCard";
import { TypeAnimation } from "react-type-animation";
import { Mail } from "lucide-react";
import { Github } from "lucide-react";
import { Instagram } from "lucide-react";
import { Linkedin } from "lucide-react";
const page = () => {
  const items = [
    {
      icon: <Mail />,
      title: "email",
      text: "patricknambajimana6@gmail.com",
    },
    {
      icon: <Github />,
      title: "github",
      link: "https://github.com/patricknambajimana",
      text: "github.com/patricknambajimana",
    },
    {
      icon: <Linkedin />,
      title: "linkedin",
      text: "linkedin/patricknambaijimana",
    },
    {
      icon: <Instagram />,
      title: "instagram",
      text: "Mr Patrick",
    },
    {
      title: "whatsapp",
      text: "tel:0781138331",
    },
  ];

  return (
    <section className="text-center py-2 ">
      <div className="place-items-center">
        <img
          src="giphy.webp"
          alt="welcome gif"
          className="w-50 h-50 rounded-full outline outline-cyan-400 inset-10"
        />
      </div>
      <div className="mt-4 text-cyan-600 text-4xl font-bold  h-10 place-items-center-safe">
        <TypeAnimation
          sequence={[
            "I’m Patrick Nambajimana —software developer|AI solution.",
            1000,
            "",
            1000,
          ]}
          speed={50}
          deletionSpeed={40}
          repeat={Infinity}
          cursor={false}
        />
      </div>
      <div className="flex items-center justify-center w-full ">
        <p className="text-2xl text-gray-500 text-center max-w-2xl">
          Specializing in React + TypeScript, Node.js, Python, Machine Learning,
          and Scalable Web Applications
        </p>
      </div>
      <div className="mt-10 flex gap-10 justify-center text-center capitalize ">
        <button className="p-4 bg-cyan-700 text-cyan-200 rounded-2xl capitalize ">
          view my work
        </button>

        <button className="p-4 border border-cyan-300 rounded-2xl text-cyan-200 capitalize">
          getin touch
        </button>
      </div>
      <div className="overflow-hidden">
        <div className="flex animate-scroll space-x-20 p-10 mt-10 text-cyan-300 w-max">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex space-x-20">
              {items.map((item, index) => (
                <div key={index} className="text-left min-w-[200px]">
                  {item.icon && <div className="mb-2">{item.icon}</div>}
                  <p className="capitalize font-semibold">{item.title}</p>
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      className="hover:underline"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <p>{item.text}</p>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div>
        <SkillsCard />
      </div>
    </section>
  );
};

export default page;
