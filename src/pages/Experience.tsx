import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { ExperienceCard } from "../components/ExperienceCard";
import { EXPERIENCE_ES, EXPERIENCE_EN } from "../contents";
import { Seo } from "../components/Seo";
import { DEVELOPER } from "../contents/index";
import type { Experience as ExperienceType } from "../types";

const Experience = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;

  const experience: ExperienceType[] = useMemo(
    () => (currentLang === "en" ? EXPERIENCE_EN : EXPERIENCE_ES),
    [currentLang]
  );

  return (
    <div>
      <Seo title={`${t("experience")} | ${DEVELOPER.name} - ${DEVELOPER.job}`} />
      <div className="h-36 bg-white dark:bg-gray-700">
        <h1 className="text-5xl md:text-8xl font-bold p-20 text-center md:text-left px-10 dark:text-gray-200">
          {t("experience")}
        </h1>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 justify-items-center gap-5 px-10 py-10 dark:bg-gray-800 pt-20">
        {experience.map((item, idx) => {
          return (
            <ExperienceCard
              image={item.image}
              job={item.job}
              content={item.content}
              date={item.date}
              company={item.company}
              web={item.web}
              key={idx}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Experience;