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
    <div className="flex mb-8">
      <div className="mr-8 w-32">
        <h2 className="flex flex-col items-end">
          <span className="font-bold mb-2 text-5xl">{month}</span>
          <span className="mb-4 text-xl">{year}</span>
        </h2>
      </div>
      <div className="bg-orange-400 w-2 mr-8" />
      <div className="flex-grow w-full">
        <h2 className="font-bold flex items-center mb-4 text-2xl">
          {employer} <span className="inline-block px-3 text-sm">-</span>{' '}
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
