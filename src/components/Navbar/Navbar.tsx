import Image from 'next/image';
import Link from 'next/link';

import Container from 'components/Container';

function Navbar() {
  return (
    <header className="bg-white dark:bg-slate-800 pb-3 pt-4 shadow-lg">
      <Container className="flex items-center">
        <Link href="/">
          <a className="focus:outline-none focus:ring focus:ring-sky-500 mr-8" href="replace">
            <Image
              alt=""
              className="cursor-pointer"
              height="48px"
              src="/logo-navbar.webp"
              width="114px"
            />
            <span className="sr-only">Home</span>
          </a>
        </Link>
        <Link href="/projects">
          <a
            className="block hover:text-orange-400 font-bold focus:outline-none focus:ring focus:ring-sky-500 mb-2 mr-4 md:mr-12 text-lg transition"
            href="replace"
          >
            Projects
          </a>
        </Link>
        <Link href="/resume">
          <a
            className="block hover:text-orange-400 font-bold focus:outline-none focus:ring focus:ring-sky-500 mb-2 text-lg transition"
            href="replace"
          >
            Résumé
          </a>
        </Link>
      </Container>
    </header>
  );
}

export default Navbar;
