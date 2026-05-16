import { Link } from "react-router-dom";

interface TitleProps {
  fullName: string;
  job: string;
}

const Title = ({ fullName, job }: TitleProps) => {
  return (
    <div className="flex flex-col">
      <Link to="/">
        <h1 className="font-semibold text-xl dark:text-gray-100">{fullName}</h1>
        <p className="text-base font-light text-gray-400 dark:text-gray-300">{job}</p>
      </Link>
    </div>
  );
};

export default Title;
