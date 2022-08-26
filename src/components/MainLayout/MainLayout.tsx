import type { ReactNode } from 'react';

import Navbar from 'components/Navbar';

export interface NavbarProps {
  children: ReactNode;
}

function MainLayout({ children }: NavbarProps) {
  return (
    <div className="dark:bg-slate-800 dark:text-white max-w-screen min-h-screen flex flex-col text-slate-900">
      <Navbar />
      <main className="flex-grow-1">{children}</main>
    </div>
  );
}

export default MainLayout;
