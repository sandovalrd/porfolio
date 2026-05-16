import { FaGithub } from "react-icons/fa";

interface GithubProps {
  link: string;
}

export const Github = ({ link }: GithubProps) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      aria-label="GitHub"
      className="text-base font-normal text-gray-600 dark:text-gray-300"
    >
      <FaGithub size={24} />
    </a>
  );
};
