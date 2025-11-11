"use client";

import SkillsCard from "@/components/SkillsCard";
import { TypeAnimation } from "react-type-animation";

const page = () => {
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
            "I’m Patrick Nambajimana —a passionate software developer.",
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
      <div className="mt-10 flex gap-10 justify-center text-center capitalize ">
        <button className="p-4 bg-cyan-700 text-cyan-200 rounded-2xl capitalize ">
          view profile
        </button>

        <button className="p-4 border border-cyan-300 rounded-2xl text-cyan-200 capitalize">
          download cv
        </button>
      </div>
      <div className="flex justify-between p-10 m t-10 text-cyan-300  animation ">
        <div className="text-left">

          <span className="capitalize">email</span>
          <p>patricknambajimana6@gmail.com</p>
        </div>
        <div className="text-left">

          <span className="capitalize">github</span><br></br>
          <a href="https://github.com/patricknambajimana">github.com/patricknambajimana</a>
        </div>
        <div className="text-left">

          <span className="capitalize">linkedin</span>
          <p>linkedin/patricknambaijimana</p>
        </div>
        <div className="text-left">

          <span className="capitalize">instagram</span>
          <p>Mr Patrick</p>
        </div>
        <div className="text-left">

          <span className="capitalize">whatsapp</span>
          <p>tel:0781138331</p>
        </div>
      </div>
      <div>
        <SkillsCard />
      </div>
    </section>
  );
};

export default page;
