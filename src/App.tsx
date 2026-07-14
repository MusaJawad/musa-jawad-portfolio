import { useMemo } from 'react';
import { profile, projects, experience, skills, testimonials } from './data';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProjectCard } from './components/ProjectCard';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { SkillMatrix } from './components/SkillMatrix';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FeaturedCaseStudy } from './components/FeaturedCaseStudy';
import { BuildPrinciples } from './components/BuildPrinciples';
import { ProofStrip } from './components/ProofStrip';
import { About } from './components/About';
import { ClientFeedback } from './components/ClientFeedback';

export default function App() {
  const stats = useMemo(
    () => [
      { label: 'Software internships', value: '2' },
      { label: 'Production users', value: 'Calgary dayhomes' },
      { label: 'Core stack', value: '.NET / React / PostgreSQL' },
    ],
    []
  );

  const featuredProject = projects[0];

  return (
    <div className="site-shell">
      <div className="noise" aria-hidden="true" />

      <Header profile={profile} />

      <main>
        <Hero profile={profile} stats={stats} />
        <ProofStrip />

        <section id="case-study" className="section container">
          <div className="section-kicker">Featured case study</div>

          <div className="section-headline tight-headline">
            <h2>Production full-stack platform used by Calgary dayhome providers.</h2>
            <p>C# / ASP.NET Core / EF Core / PostgreSQL / React / TypeScript</p>
          </div>

          <FeaturedCaseStudy project={featuredProject} />
        </section>

        <section id="work" className="section container">
          <div className="section-kicker">Selected work</div>

          <div className="section-headline">
            <h2>Projects with demos, screenshots, reports, and technical breakdowns.</h2>
            <p>
              Practical builds across C#/.NET APIs, full-stack platforms, real-time systems,
              OCR workflows, AI/data projects, and frontend applications.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section id="build" className="section container">
          <div className="section-kicker">Engineering approach</div>

          <div className="section-headline simple-headline">
            <h2>Backend-first, product-aware, and focused on reliability.</h2>
          </div>

          <BuildPrinciples />
        </section>

        <section id="skills" className="section container split-section">
          <div>
            <div className="section-kicker">Technical range</div>

            <h2>C#/.NET backend strength with full-stack execution.</h2>

            <p className="muted">
              APIs, authentication, databases, deployment, frontend implementation, and
              data/AI workflows — grouped by what I can use in real projects.
            </p>
          </div>

          <SkillMatrix skills={skills} />
        </section>

        <section id="experience" className="section container">
          <div className="section-kicker">Experience</div>

          <div className="section-headline">
            <h2>Internship experience plus client-facing production work.</h2>
            <p>
              Focused on backend features, APIs, SQL, performance improvements, production fixes,
              and shipping real user-facing software.
            </p>
          </div>

          <ExperienceTimeline experience={experience} />
        </section>

        <section id="feedback" className="section container compact-section">
          <div className="section-kicker">Client feedback</div>

          <div className="section-headline simple-headline">
            <h2>5-star feedback from past web development projects.</h2>
            <p>
              Feedback from internship/client-style projects involving website development,
              performance optimization, backend features, and page creation.
            </p>
          </div>

          <ClientFeedback testimonials={testimonials} />
        </section>

        <About />

        <section id="contact" className="section container">
          <Contact profile={profile} />
        </section>
      </main>

      <Footer profile={profile} />
    </div>
  );
}