"use client";

const SkillsCard = () => {
  const project = [{ name: "Aguka system" }, { name: "RwaRise system" }];

  return (
    <div>
      <h2 className="text-3xl text-cyan-300">proffesional experiance</h2>
      <ul className="flex text-3xl text-cyan-300">
        {project.map((skill, idx) => (
          <li key={idx} className="mr-6">
            <div className="inline">{skill.name}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsCard;
