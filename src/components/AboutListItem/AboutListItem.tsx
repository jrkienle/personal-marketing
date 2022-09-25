import { ReactNode } from 'react';

interface AboutListItemProps {
  children: ReactNode;
}

function AboutListItem({ children }: AboutListItemProps) {
  return (
    <li className="flex items-center mb-2 md:whitespace-nowrap">
      <div className="animate-pulse bg-orange-400 h-4 mr-3 rounded-full w-4" />
      <div className="text-xl">{children}</div>
    </li>
  );
}

export default AboutListItem;
