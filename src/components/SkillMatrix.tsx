import type { Skill } from '../types';

const labels: Record<Skill['category'], string> = {
  backend: 'Backend',
  frontend: 'Frontend',
  data_ai: 'Data / AI',
  tools: 'Tools',
};

export function SkillMatrix({ skills }: { skills: Skill[] }) {
  const groups = skills.reduce<Record<string, Skill[]>>((acc, skill) => {
    acc[skill.category] = acc[skill.category] || [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <div className="skill-matrix">
      {(Object.keys(labels) as Skill['category'][]).map((category) => (
        <div className="skill-group" key={category}>
          <h3>{labels[category]}</h3>
          <div className="chip-row">
            {(groups[category] || []).map((skill) => <span className="chip" key={skill.id}>{skill.name}</span>)}
          </div>
        </div>
      ))}
    </div>
  );
}
