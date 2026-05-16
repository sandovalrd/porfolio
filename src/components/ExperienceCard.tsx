import type { Experience } from "../types";

export const ExperienceCard = ({ job, company, content, image, date, web }: Experience) => {
  return (
    <div>
      <div className="max-w-sm sm:max-w-md bg-white dark:bg-gray-200 border-2 border-gray-300 p-6 rounded-md tracking-wide shadow-xl">
        <div id="header" className="flex items-center mb-4">
          <img alt={`${company} logo`} className="w-20 border-gray-300 rounded-lg shadow-sm" src={image} />
          <div id="header-text" className="leading-5 ml-6 sm">
            <h4 id="name" className="font-semibold text-base">
              {job}
            </h4>
            <div className="flex">
              <div className="inline-flex text-normal text-gray-500 hover:text-yellow-500 cursor-pointer">
                <a href={web} target="_blank" rel="noreferrer">
                  <span className="border-b border-dashed border-gray-500 pb-1">{company}</span>
                </a>
              </div>
            </div>
            <h5 id="date" className="mt-2 text-sm font-light text-gray-400 dark:text-gray-600">
              {date}
            </h5>
          </div>
        </div>
        <div id="quote">
          <p className="italic text-gray-600 text-sm text-justify">{content}</p>
        </div>
      </div>
    </div>
  );
};
