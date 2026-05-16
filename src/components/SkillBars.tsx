import SkillBar from "react-skillbars";
import { COLORS } from "../constants";
import type { Skill } from "../types";

interface SkillBarsProps {
  skill: Skill[];
  title: string;
}

export const SkillBars = ({ skill, title }: SkillBarsProps) => {
  return (
    <div>
      <p className="text-gray-600 dark:text-gray-200 font-normal text-center pb-4">{title}</p>
      <SkillBar
        skills={skill}
        animationDelay={0}
        animationDuration={1500}
        colors={COLORS}
        height={30}
      />
    </div>
  );
};
