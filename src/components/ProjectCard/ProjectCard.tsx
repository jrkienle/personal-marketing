import type { ReactNode } from 'react';

interface ProjectCardProps {
  children: ReactNode;
  href: string;
  title: string;
}

function ProjectCard({ children, href, title }: ProjectCardProps) {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
      <div className="h-full flex flex-col w-full rounded shadow-lg p-6">
        <div className="font-bold mb-4 text-xl">{title}</div>
        <div className="flex-grow mb-4">{children}</div>
        <a
          className="block text-orange-400 hover:text-orange-600 text-right transition"
          href={href}
          rel="noopener noreferrer"
          target="_blank"
        >
          See More
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
