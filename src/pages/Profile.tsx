import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import { Seo } from "../components/Seo";
import { DEVELOPER } from "../contents/index";
import { CV } from "../contents";

const Profile = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Seo title={`${t("profile")} | ${DEVELOPER.name} - ${DEVELOPER.job}`} />
      <div className="h-36 bg-white dark:bg-gray-700">
        <h1 className="text-5xl md:text-8xl font-bold p-20 text-center md:text-left px-10 dark:text-gray-200">
          {t("profile")}
        </h1>
      </div>
      <div className="grid grid-cols-1 px-10 py-10 dark:bg-gray-800">
        <div className="mt-8 md:mt-0 md:space-x-10 md:grid grid-cols-3 justify-center md:py-20">
          <div className="grid justify-center items-center order-1 col-span-1">
            <img
              className="lg:h-78 md:h-64 h-40 rounded-full"
              src={DEVELOPER.image}
              alt=""
            />
          </div>
          <div className="mt-8 md:mt-0 lg:justify-end col-span-2">
            <h1 className="text-4xl text-gray-800 text-center md:text-left font-bold mb-6 dark:text-gray-200">
              {t("hi")}
            </h1>
            <p className="text-xl text-gray-800 text-center md:text-left dark:text-gray-200">
              {t("about")}
            </p>
            <div className="flex justify-center md:justify-start">
              <a
                href={i18n.language === "en" ? CV.english : CV.spanish}
                target={"_blank"}
                rel="noreferrer"
                className="mt-8 text-lg py-3 px-6 text-red-50 font-semibold rounded bg-yellow-500 shadow-xl hover:bg-yellow-600 transition-all duration-500 ease-in-out"
              >
                {t("cv")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
