import Button from 'components/Button';
import Container from 'components/Container';
import Timeline from 'components/Timeline';

import Head from 'next/head';

function Resume() {
  return (
    <>
      <Head>
        <title>Resume | James Kienle</title>
        <meta
          name="description"
          content="A complete list of all the places James Kienle has worked and some of his accomplishments at each"
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
              Here&apos;s my <span className="text-orange-400">Résumé</span>.
            </h1>
            <p className="leading-relaxed mb-16 text-2xl">
              A complete list of everywhere I&apos;ve worked, as well as a few accomplishments from each.
              A downloadable PDF of this résumé for recruiters can be found as a PDF at the end of
              this page. Please note that at this time I am{' '}
              <span className="text-orange-400">not currently looking for new roles</span>.
            </p>
          </div>
        </section>
        <section className="mb-24">
          <Timeline
            employer="Federato Technologies, Inc."
            month="Jul"
            position="Senior Software Engineer"
            technologies={[
              'Apollo Federation',
              'Django',
              'Docker',
              'GraphQL',
              'Nest.js',
              'Node.js',
              'PNPM',
              'PostgreSQL',
              'Prisma',
              'Python',
              'React',
              'SASS',
              'Storybook',
              'TailwindCSS',
              'TurboRepo',
              'TypeScript',
              'Vite',
              'Vitest',
            ]}
            year="2022"
          >
            I jumped into Federato as the team&apos;s most experienced Frontend Engineers and
            immediately got to work helping transform their frontend. By my second day on the job I
            was assigned a complete refactor of a legacy system built by contractors with the goal
            of completely integrating it with our already existing codebase. By the end of my first
            week I&apos;d introduced the team to proper unit testing strategies. By the end of my
            second I worked with other engineers to identify key developer experience problems at
            Federato and built a roadmap to create realistic solutions to those problems while still
            prioritizing building features required to win contracts.
          </Timeline>
          <Timeline
            employer="Apero Health, Inc."
            month="Jan"
            position="Senior Software Engineer"
            technologies={[
              'CircleCI',
              'Django',
              'Docker',
              'GCP',
              'Graphene',
              'GraphQL',
              'JavaScript',
              'LESS',
              'Postgres',
              'Python',
              'React',
              'TypeScript',
              'Vite',
              'Vitest',
              'Webpack',
            ]}
            year="2022"
          >
            In my first week at Apero health I introduced TypeScript to the frontend and worked to
            re-organize their largest app to increase developer productivity and improve the
            onboarding process. From there I built several mission critical features including an
            in-app secrets manager, a lightweight, dynamically editable EHR manager, an integrations
            marketplace, and many other core features requested by billers and other clients.
            Alongside that I did plenty of interviewing, managed a small team of interns, built out
            new endpoints with Django and Graphene, and built out several frontend packages in a
            monorepo to reduce the amount of copy pasted code throughout our applications. I
            ultimately transitioned to a consultant role at Apero Health to work full time at
            Federato. Apero was just too small and unorganized for me to properly thrive.
          </Timeline>
          <Timeline
            employer="SmartRent.com, Inc."
            month="May"
            position="Senior Software Engineer II"
            technologies={['LESS', 'PNPM', 'React', 'TurboRepo', 'TypeScript', 'Vite', 'Vitest']}
            year="2021"
          >
            In my first week at SmartRent I learned the Elixir programming language and the
            corresponding Phoenix framework in order to be a fullstack contributor at the company.
            Although I didn&apost;t create any sweeping changes at SmartRent like my other
            positions, I was able to become a core, reliable contributor to the team&apos;s
            relatively mature codebase and worked on items such as key system reports, critical
            bugfixes, and plenty of third party physical device integrations including Ring and
            HeroLabs Sonic. I ultimately left SmartRent because of the opportunity that Apero Health
            gave me to work with some of my favorite team members from Doctor on Demand for a second
            time.
          </Timeline>
          <Timeline
            employer="Doctor on Demand, Inc."
            month="Sep"
            position="Web Developer"
            technologies={[
              'Angular.js',
              'Django',
              'GCP',
              'JavaScript',
              'Jenkins',
              'JSON RPC',
              'LESS',
              'Python',
              'REST',
              'Vue',
              'Webpack',
            ]}
            year="2019"
          >
            At Doctor on Demand I was the code owner of the Behavioral Health provider frontend and
            was a cone contributor to both the MD and patient frontends. I worked with the design
            team to build a cohesive design system and component library, ensuring compliance to
            accessibility standards. I also lead the efforts to refactor two legacy Angular 1.x
            applications to Vue and TypeScript. All of this was done while mentoring more junior
            engineers and interviewing / onboarding new developers to help build the best frontend
            team possible. I ultimately left Doctor on Demand due to a lack of career growth
            opportunities and a lower-than-average salary that I was promised would improve.
          </Timeline>
          <Timeline
            employer="PriceWaiter.com, LLC."
            month="May"
            position="Lead Frontend Developer"
            technologies={[
              'Apollo',
              'CircleCI',
              'GraphQL',
              'PostgreSQL',
              'React',
              'TypeScript',
              'Webpack',
            ]}
            year="2019"
          >
            At PriceWaiter, a now defunct startup, I was the code owner of several core features of
            the application including the homepage, an advanced product search page, a chat bot that
            allowed users to negotiate pricing of items in real-time, and many of the core marketing
            pages. Additionally, I worked directly with a contractor designer to ensure that all
            designs were compliant with accessibility standards, and refactored large pages into
            small, reusable components to reduce the overall bundle size and improve SEO. I also
            redesigned the build system and implemented full continuous delivery in order to release
            with more agility. Ultimately I left PriceWaiter to pursue the full-time work-from-home
            environment offered by Doctor on Demand as my (undiagnosed at the time) ADHD prevented
            me from working well in office environments.
          </Timeline>
          <Timeline
            employer="Accolade, Inc."
            month="Sep"
            position="Software Development Engineer I"
            technologies={[
              'AWS',
              'Bootstrap',
              'JavaScript',
              'Koa',
              'Node.js',
              'React',
              'Redux',
              'REST',
              'SASS',
            ]}
            year="2017"
          >
            I performed well enough as an intern at Accolade to be promoted to a part-time SWE I.
            During my time at Accolade I worked closely with senior engineers to build out high
            quality, reusable, fully tested React components. I built out several core features of
            an advanced medical record management system and occasionally moved into internal facing
            side projects to help with developer productivity. Ultimately I left Accolade due to low
            pay and their refusal to let me move from part time to full time in order to advance my
            career.
          </Timeline>
          <Timeline
            employer="Accolade, Inc."
            month="Jul"
            position="Software Development Engineer Intern"
            technologies={[
              'AWS',
              'Bootstrap',
              'JavaScript',
              'Koa',
              'Node.js',
              'React',
              'Redux',
              'REST',
              'SASS',
            ]}
            year="2016"
          >
            I started my professional career at Accolade as a SDE Intern. At the beginning of my
            internship I worked closely with the DevOps team based out of Prague (however I was
            still based out of Seattle at the time) and got comfortable working across large
            timezone gaps. I learned React, Node, and many core features of AWS including DynamoDB
            and ECS, and I used those skills to build internal development tooling to help cut
            infrastructure costs and reduce the pain points in developing across microservices. From
            there I was transferred to the frontend team where I continued to work until I was
            offered a permanent position as a SDE I.
          </Timeline>
        </section>
        <section className="flex flex-wrap items-center mb-12">
          <p className="block flex-grow leading-relaxed mb-4 text-2xl">
            Need a PDF to submit to recruitment software?
          </p>
          <Button className="mb-4" href="/resume.pdf" htmlType="link">
            Download Résumé
          </Button>
        </section>
      </Container>
    </>
  );
}

export default Resume;
