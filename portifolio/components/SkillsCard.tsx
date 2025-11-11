"use client";

type Props = {
  id: number;
  name: string;
};

const SkillsCard = (props: Props) => {
  const project = [{ name: "Aguka system" }, { name: "RwaRise system" }];

  return (
    <div>
      <h2 className="text-3xl text-cyan-300">proffesional experiance</h2>
      <ul className="flex   text-3xl text-cyan-300"><li><span className="flex gap-10">{project.map((skill) => skill.name)}</span></li></ul>
    </div>
  );
};

export default SkillsCard;
