import { Fragment } from "react";
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from "@headlessui/react";
import i18n from "i18next";

import { ENGLISH, ESPANOL } from "../constants";

const Language = () => {
  const displayLanguage = i18n.language === "en" ? ENGLISH : ESPANOL;
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <MenuButton className="dark:bg-gray-700 dark:text-gray-200 z-10 block rounded-md bg-white p-2 focus:outline-none">
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
            {displayLanguage}
          </div>
        </MenuButton>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-500"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-100"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95 duration-100"
        >
          <MenuItems className="absolute right-0 top-full z-50 mt-1 w-28 origin-top-right rounded-md bg-white p-2 shadow-lg ring-1 ring-black/5 focus:outline-none dark:bg-gray-700 dark:ring-white/10">
            <MenuItem
              as="li"
              id={ENGLISH}
              onClick={() => handleChange("en")}
              className={({ active }: { active: boolean }) =>
                `${
                  active
                    ? "bg-gray-200 dark:bg-gray-700 text-yellow-500"
                    : "text-gray-900 dark:text-gray-200"
                } group flex rounded-md items-center w-full px-2 py-2 text-sm cursor-pointer`
              }
            >
              {ENGLISH}
            </MenuItem>
            <MenuItem
              as="li"
              id={ESPANOL}
              onClick={() => handleChange("es")}
              className={({ active }: { active: boolean }) =>
                `${
                  active
                    ? "bg-gray-200 dark:bg-gray-700 text-yellow-500"
                    : "text-gray-900 dark:text-gray-200"
                } group flex rounded-md items-center w-full px-2 py-2 text-sm cursor-pointer`
              }
            >
              {ESPANOL}
            </MenuItem>
          </MenuItems>
        </Transition>
      </Menu>
    </>
  );
};

export default Language;
