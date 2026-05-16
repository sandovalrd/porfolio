import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import ProjectCard from "../components/ProjectCard";
import { Seo } from "../components/Seo";
import { DEVELOPER } from "../contents/index";
import { PROJECTS_EN, PROJECTS_ES } from "../contents";
import type { Project } from "../types";

const Projects = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const projects: Project[] = useMemo(
    () => (currentLang === "en" ? PROJECTS_EN : PROJECTS_ES),
    [currentLang]
  );

  return (
    <div>
      <Seo title={`${t("projects")} | ${DEVELOPER.name} - ${DEVELOPER.job}`} />
      <div className="h-36 bg-white dark:bg-gray-700">
        <h1 className="text-5xl md:text-8xl font-bold p-20 text-center md:text-left px-10 dark:text-gray-200">
          {t("projects")}
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 justify-items-center px-10 py-10 dark:bg-gray-800 pt-20">
        {projects.map((item, idx) => {
          return (
            <ProjectCard
              domain={item.domain}
              description={item.description}
              technology={item.technology}
              state={item.state}
              branch={item.branch}
              color={item.color}
              type={item.type}
              date={item.date}
              key={idx}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;