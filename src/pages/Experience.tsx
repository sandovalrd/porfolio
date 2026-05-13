import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ExpeienceCard } from "../components/ExpeienceCard";
import { EXPERIENCE_ES, EXPERIENCE_EN } from "../contents";
import i18n from "i18next";
import { Seo } from "../components/Seo";
import { DEVELOPER } from "../contents/index";

const Experience = () => {
  const [experience, setExperience] = useState<any[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
    i18n.language === "en"
      ? setExperience(EXPERIENCE_EN)
      : setExperience(EXPERIENCE_ES);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [i18n.language]);

  return (
    <div>
      <Seo
        title={`${t("experience")} | ${DEVELOPER.name} - ${DEVELOPER.job}`}
      />
      <div className="h-36 bg-white dark:bg-gray-700">
        <h1 className="text-5xl md:text-8xl font-bold p-20 text-center md:text-left px-10 dark:text-gray-200">
          {t("experience")}
        </h1>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 justify-items-center gap-5 px-10 py-10 dark:bg-gray-800 pt-20">
        {experience.map((item, idx) => {
          return (
            <ExpeienceCard
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
