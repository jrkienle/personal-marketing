import type { ReactNode } from 'react';

interface SocialLinkProps {
  href: string;
  icon: ReactNode;
  name: string;
}

function SocialLink({ href, icon, name }: SocialLinkProps) {
  return (
    <div className="flex justify-center items-center mb-4 md:mb-0 md:w-1/4 text-2xl w-full">
      <a className="flex hover:text-orange-400 items-center transition" href={href} rel="noopener noreferrer" target="_blank">
        {icon}
        <div className="ml-3">{name}</div>
      </a>
    </div>
  );
}

export default SocialLink;
