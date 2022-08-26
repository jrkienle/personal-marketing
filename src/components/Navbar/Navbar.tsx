import Image from 'next/image';
import Link from 'next/link';

import Container from 'components/Container';

function Navbar() {
  return (
    <header className="bg-white dark:bg-slate-800 pb-3 pt-4 shadow-lg">
      <Container>
        <Link href="/">
          <a className="focus:outline-none focus:ring focus:ring-sky-500" href="replace">
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
      </Container>
    </header>
  );
}

export default Navbar;
