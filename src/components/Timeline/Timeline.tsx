import type { ReactNode } from 'react';

interface TimelineProps {
  children: ReactNode;
  employer: string;
  month: string;
  position: string;
  technologies: string[];
  year: string;
}

function Timeline({ children, employer, month, position, technologies, year }: TimelineProps) {
  return (
    <div className="flex flex-col md:flex-row mb-8">
      <div className="mr-8 md:w-32">
        <h2 className="flex md:flex-col justify-between md:justify-start items-center md:items-end w-full">
          <span className="block font-bold md:mb-2 text-5xl">{month}</span>
          <span className="block md:mb-4 text-xl">{year}</span>
        </h2>
      </div>
      <div className="bg-orange-400 h-2 my-4 md:my-0 md:h-auto md:w-2 mr-8" />
      <div className="flex-grow w-full">
        <h2 className="font-bold flex-wrap flex items-center mb-4 text-2xl">
          {employer} <span className="invisible md:inline-block md:visible px-3 text-sm">-</span>{' '}
          <span className="font-normal">{position}</span>
        </h2>
        <p className="mb-4">
          <strong>Summary:</strong> {children}
        </p>
        <p>
          <strong>Technologies Used:</strong> {technologies.join(', ')}
        </p>
      </div>
    </div>
  );
}

export default Timeline;
