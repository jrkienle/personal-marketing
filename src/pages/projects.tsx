import Head from 'next/head';

import Container from 'components/Container';
import ProjectCard from 'components/ProjectCard';

function Home() {
  return (
    <>
      <Head>
        <title>Projects | James Kienle</title>
        <meta
          name="description"
          content="Open source software, apps, games, and other projects that James Kienle built."
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
              Here are some of the <span className="text-orange-400">projects</span>, I&apos;ve
              worked on
            </h1>
            <p className="leading-relaxed text-2xl">
              Although most of my work is done behind closed doors for private employers, I do have
              a few projects that I&apos;ve built (or am currently building) that I&apos;m able to
              show off.
            </p>
          </div>
        </section>
        <section>
          <div className="flex flex-wrap -mt-4 -mx-4 mb-24">
            <ProjectCard href="https://www.jameskienle.com" title="Personal Portfolio">
              I built this very website you&apos;re looking at right now completely from scratch!
            </ProjectCard>
            <ProjectCard href="https://npmjs.com/package/twsx" title="TWSX">
              A strongly-typed combination of clsx and tailwind-merge that easily sets dynamic
              Tailwind class names
            </ProjectCard>
            <ProjectCard href="https://www.kienle.design/zephyr" title="Zephyr">
              The Kienle Holdings design system and corresponding React component library
            </ProjectCard>
          </div>
        </section>
        <section className="flex flex-wrap md:flex-nowrap mt-8 md:mt-28 mb-24">
          <div className="xl:w-1/2 lg:w-2/3 w-full">
            <h2 className="font-bold leading-relaxed mb-8 text-3xl">More <span className="text-orange-400">Coming Soon</span>...</h2>
            <p className="leading-relaxed text-xl">
              I&apos;m always working on new things. In fact, this page only scratches the surface
              of what I currently have in progress. Check back regularly, or follow me on Twitter to
              stay up to date with my current projects. Wanna work with me? Shoot me a message and
              let&apos;s build <span className="text-orange-400">something great together</span>!
            </p>
          </div>
        </section>
      </Container>
    </>
  );
}

export default Home;
