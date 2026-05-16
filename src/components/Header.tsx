import useTheme from "../hooks/useTheme";
import { IconDarkMode } from "./IconDarkMode";
import Instagram from "./Instagram";
import Language from "./Language";
import { Linkedin } from "./Linkedin";
import MenuItem from "./MenuItem";
import Title from "./Title";
import { Github } from "./Github";
import { useTranslation } from "react-i18next";
import { SOCIALINKS } from "../contents";
import { DEVELOPER } from "../contents";

const Header = () => {
  const { t } = useTranslation();
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <div className="flex md:flex-row justify-between items-center mx-4 md:mx-8">
        <Title fullName={DEVELOPER.name} job={DEVELOPER.job} />
        <div className="space-x-4 lg:space-x-10 hidden md:block">
          <MenuItem route="profile" item={t("profile")} />
          <MenuItem route="projects" item={t("projects")} />
          <MenuItem route="experience" item={t("experience")} />
          <MenuItem route="skills" item={t("skills")} />
        </div>
        <div className="space-x-3 flex flex-row items-center">
          <Language />
          <Instagram link={SOCIALINKS.instagram} />
          <Github link={SOCIALINKS.github} />
          <Linkedin link={SOCIALINKS.linkedin} />
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="w-10 h-10 p-3 rounded focus:outline-none"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <IconDarkMode theme={theme} />
          </button>
        </div>
      </div>
      <div className="space-x-3 sm:space-x-7 block md:hidden mt-4 text-center">
        <MenuItem route="profile" item={t("profile")} />
        <MenuItem route="projects" item={t("projects")} />
        <MenuItem route="experience" item={t("experience")} />
        <MenuItem route="skills" item={t("skills")} />
      </div>
    </div>
  );
};

export default Header;
