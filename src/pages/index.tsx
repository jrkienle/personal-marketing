import { Github, Instagram, Linkedin, Twitter } from '@icons-pack/react-simple-icons';

import Button from 'components/Button';
import Container from 'components/Container';
import SocialLink from 'components/SocialLink';

import Head from 'next/head';
import AboutListItem from 'components/AboutListItem';

function Home() {
  return (
    <>
      <Head>
        <title>James Kienle</title>
        <meta
          name="description"
          content="James Kienle is a mission-driven frontend engineering leader who spends his days building world-class apps and teams"
        />
        <meta
          name="keyword"
          content="resume, javascript, developer, TypeScript, React, Node, full stack"
        />
      </Head>
      <Container>
        <section className="flex flex-wrap md:flex-nowrap mt-8 md:mt-28 mb-24">
          <div className="xl:w-1/2 lg:w-2/3 w-full">
            <h1 className="font-bold leading-relaxed mb-12 text-5xl">
              Hey there! I&apos;m <span className="text-orange-400">James Kienle</span>, nice to
              meet you!
            </h1>
            <p className="leading-relaxed mb-16 text-2xl">
              I&apos;m a mission-driven frontend engineering leader who spends my days building
              world-class apps and teams. I&apos;m based out of{' '}
              <span className="text-orange-400">Spokane, WA</span> and currently work at Federato
              helping those in dangerous, under served areas protect their property from climate
              change. Interested in learning a little bit more about my work?
            </p>
            <Button href="/resume" htmlType="link">
              View My Resume
            </Button>
          </div>
        </section>
        <section className="mb-24">
          <h2 className="font-bold leading-relaxed mb-12 text-4xl md:text-center">
            Here&apos;s a little bit <span className="text-orange-400">about</span> me
          </h2>
          <ul className="mb-12 md:mx-auto md:w-fit">
            <AboutListItem>Born In Seattle, WA</AboutListItem>
            <AboutListItem>Wrote my First HTML at 6 Years Old</AboutListItem>
            <AboutListItem>Graduated from Port Townsend High School</AboutListItem>
            <AboutListItem>Dropped Out of Seattle Pacific University</AboutListItem>
            <AboutListItem>Tried (And Failed) to Start a Coffee Roastery in Portland, OR</AboutListItem>
            <AboutListItem>Own a Lovely Fixer-Upper in Spokane, WA</AboutListItem>
            <AboutListItem>Am Married to the Lovely Angela Kienle</AboutListItem>
          </ul>
        </section>
        <section className="mb-24">
          <h2 className="font-bold leading-relaxed mb-12 text-4xl md:text-center">
            Here are some ways to <span className="text-orange-400">get in touch</span> with me
          </h2>
          <div className="flex flex-wrap">
            <SocialLink href="https://linkedin.com/in/jrkienle" icon={<Linkedin />} name="LinkedIn" />
            <SocialLink href="https://github.com/jrkienle" icon={<Github />} name="GitHub" />
            <SocialLink href="https://twitter.com/jrkienle" icon={<Twitter />} name="Twitter" />
            <SocialLink href="https://instagram.com/jrkienle" icon={<Instagram />} name="Instagram" />
          </div>
        </section>
      </Container>
    </>
  );
}

export default Home;
