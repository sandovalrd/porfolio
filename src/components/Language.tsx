import React, { useState, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import i18n from "i18next";
import moment from "moment";
// @ts-ignore
import "moment/locale/es";

import { ENGLISH, ESPANOL } from "../constants";

const Language = () => {
  const [language, setLanguage] = useState(ENGLISH);
  const handleChange = (event: any, language: string) => {
    language === "en" ? setLanguage(ENGLISH) : setLanguage(ESPANOL);
    i18n.changeLanguage(language);
    moment.locale(language);
  };

  return (
    <>
      <Menu
        as="div"
        className="relative inline-block text-left text-base font-normal"
      >
        <Menu.Button className="dark:bg-gray-700 dark:text-gray-200 relative z-10 block rounded-md bg-white p-2 focus:outline-none">
          <div className="text-base flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 pr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
              />
            </svg>
            {language}
          </div>
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-500"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-100"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95 duration-100"
        >
          <Menu.Items className="absolute z-10 p-2 right-0 w-24 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none cursor-pointer">
            <Menu.Item
              as="li"
              id={ENGLISH}
              onClick={(e) => handleChange(e, "en")}
              className={({ active }: { active: boolean }) =>
                `${
                  active
                    ? "bg-gray-200 dark:bg-gray-700 text-yellow-500"
                    : "text-gray-900"
                } group flex rounded-md items-center w-full px-2 py-2 text-sm cursor-pointer`
              }
            >
              {ENGLISH}
            </Menu.Item>
            <Menu.Item
              as="li"
              id={ESPANOL}
              onClick={(e) => handleChange(e, "es")}
              className={({ active }: { active: boolean }) =>
                `${
                  active
                    ? "bg-gray-200 dark:bg-gray-700 text-yellow-500"
                    : "text-gray-900"
                } group flex rounded-md items-center w-full px-2 py-2 text-sm cursor-pointer`
              }
            >
              {ESPANOL}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};

export default Language;
