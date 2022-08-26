import Button from 'components/Button';
import Container from 'components/Container';

import Head from 'next/head';

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
        <section className="flex flex-wrap md:flex-nowrap mt-8 md:mt-28">
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
      </Container>
    </>
  );
}

export default Home;
