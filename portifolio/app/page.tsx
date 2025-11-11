"use client";

import Hero from "@/components/Hero";
import { TypeAnimation } from "react-type-animation";

const page = () => {
  return (
    <section className="text-center py-2 ">
      <Hero />
      <h1 className="text-5xl font-bold">Patrick Nambajimana</h1>
      <div className="mt-4 text-gray-600 text-3xl font-extralight">
        <TypeAnimation
          sequence={[
            "I’m Patrick Nambajimana — a passionate software developer.",
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
    </section>
  );
};

export default page;
