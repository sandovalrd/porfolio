import { FaGithub } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { formatRelativeTime } from "../utils/formatRelativeTime";
import type { Project } from "../types";

const ProjectCard = ({
  description,
  technology,
  domain,
  state,
  color,
  branch,
  type,
  date,
}: Project) => {
  const { t, i18n } = useTranslation();

  return (
    <div className="flex w-full max-w-full flex-row flex-wrap p-6">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-lg shadow-lg bg-gray-600 w-full flex flex-row flex-wrap p-4 antialiased">
          <div className="md:w-1/2  w-full">
            <a href={domain} target="_blank" rel="noreferrer">
              <img
                className="rounded-lg shadow-lg antialiased hover:opacity-80 cursor-pointer transition-all duration-500"
                src="img/porfolio.png"
                alt="porfolio"
              />
            </a>
          </div>
          <div className="md:w-1/2 w-full px-3 flex flex-row flex-wrap">
            <div className="w-full text-left text-gray-700 font-semibold relative pt-3 md:pt-0">
              <div className="text-xl text-white leading-tight">
                {t("project")}
              </div>
              <div className="text-sm text-gray-300 text-left mt-1">
                {description}
              </div>
              <div className="text-base text-white leading-tight mt-4">
                {t("technology")}
              </div>
              <div className="text-sm text-gray-300 text-left mt-1">
                {technology}
              </div>
              <div className="grid grid-cols-2 gap-6 mt-3">
                <div className="grid grid-cols-1">
                  <div className="text-base text-white leading-tight">
                    {t("state")}
                  </div>
                  <div className="text-sm text-gray-300 leading-tight mt-1">
                    <div
                      className={`w-2.5 h-2.5 inline-flex rounded-full ${color}`}
                    >
                      <div
                        className={`w-2.5 h-2.5 inline-flex rounded-full ${color} animate-ping`}
                      ></div>
                    </div>
                    <p className="inline-flex ml-2">{state}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1">
                  <div className="text-base text-white mt-1">
                    {t("created")}
                  </div>
                  <div className="text-sm text-gray-300 leading-tight">
                    {date && formatRelativeTime(date, i18n.language)}
                  </div>
                </div>
                <div className="grid grid-cols-1">
                  <div className="text-base text-white">{t("branch")}</div>
                  <div className="text-sm text-gray-300 leading-tight mt-1">
                    <span className="w-5 h-5 inline-flex">
                      <FaGithub />
                    </span>
                    <div className="inline-flex ml-1 text-normal text-gray-300 hover:text-yellow-500 cursor-pointer ">
                      <a href={branch} target="_blank" rel="noreferrer">
                        <span className="border-b border-dashed border-gray-500 pb-1">
                          Main
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1">
                  <div className="text-base text-white mt-1">{t("type")}</div>
                  <div className="text-sm text-gray-300 leading-tight">
                    {type}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;