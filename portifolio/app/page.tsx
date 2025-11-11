"use client";

import { TypeAnimation } from "react-type-animation";


const page = () => {
  return (
    <section className="text-center py-20">
      <h1 className="text-4xl font-bold">Welcome to my Portfolio</h1>
    <div className="mt-4 text-gray-600 text-lg ">
      <TypeAnimation
        sequence={[
          "I’m Patrick — a passionate full stack developer.",
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
