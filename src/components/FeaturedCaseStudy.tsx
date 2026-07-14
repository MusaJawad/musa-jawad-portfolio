import { useState } from 'react';
import type { Project } from '../types';

function ImageLightbox({
  src,
  alt,
  onClose
}: {
  src: string;
  alt: string;
  onClose: () => void;
}) {
  return (
    <div
      className="image-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onClick={onClose}
    >
      <button
        className="lightbox-close"
        type="button"
        onClick={onClose}
        aria-label="Close image preview"
      >
        ×
      </button>

      <img src={src} alt={alt} onClick={(event) => event.stopPropagation()} />
    </div>
  );
}

function getWalkthroughItems(project: Project): string[] {
  if (project.slug === 'dayhomeflow') {
    return [
      'How the ASP.NET Core API protects user-owned child, attendance, provider, and invoice data.',
      'How EF Core, PostgreSQL, and SQLite are configured for production and local development.',
      'How monthly attendance records are transformed into Excel invoice exports with ClosedXML.',
      'How I deployed and debugged the app across Docker, Render, Vercel, CORS, routing, and database migrations.'
    ];
  }

  if (project.slug === 'job-tracker-api') {
    return [
      'How JWT register/login protects user-specific job application records.',
      'How DTOs, validation, and controller endpoints structure the API cleanly.',
      'How EF Core migrations, SQLite persistence, and Swagger documentation support backend review.',
      'What I would add next: PostgreSQL deployment, frontend dashboard, and automated API tests.'
    ];
  }

  if (project.slug === 'distributed-agario-clone') {
    return [
      'How the client sends movement and game events through WebSockets.',
      'How proxy routing, replica health checks, and backend responsibilities are separated.',
      'Why passive replication and Lamport timestamps help reason about consistency.',
      'What I would improve next: load testing, observability, and deployment automation.'
    ];
  }

  if (project.slug === 'mediscanner') {
    return [
      'How OCR preprocessing improves DIN/NPN extraction from medication images.',
      'How regex validation and API lookup turn raw OCR text into useful medication results.',
      'How Firebase auth/storage supports saved medications and user flows.',
      'What I would improve next: stronger image-quality checks and broader medication database coverage.'
    ];
  }

  if (project.evidence?.length) {
    return project.evidence.map((item) => `Can walk through: ${item}.`);
  }

  return [
    'Project architecture and key technical decisions.',
    'Main implementation challenges and trade-offs.',
    'How the project was tested, deployed, or demonstrated.',
    'What I would improve next with more time.'
  ];
}

function getMediaNote(project: Project) {
  if (project.slug === 'dayhomeflow') {
    return {
      label: 'Production app',
      title: 'Live full-stack platform',
      body:
        'Used by real dayhome providers across Calgary for child records, attendance tracking, provider details, and monthly Excel invoice exports.'
    };
  }

  if (project.slug === 'job-tracker-api') {
    return {
      label: 'Backend API',
      title: 'Secure ASP.NET Core API',
      body:
        'JWT authentication, protected CRUD endpoints, user-owned data access, EF Core migrations, and Swagger documentation.'
    };
  }

  if (project.video_url) {
    return {
      label: 'Featured demo',
      title: 'Captioned walkthrough with audio',
      body:
        'Walkthrough media showing the main user flow, architecture, implementation details, and project behavior.'
    };
  }

  if (project.image_url) {
    return {
      label: 'Project preview',
      title: 'Screenshots and visuals',
      body:
        'Visual evidence from the project, including UI screens, architecture diagrams, reports, or demo captures.'
    };
  }

  return {
    label: 'Project details',
    title: 'Technical case study',
    body:
      'Breakdown of the problem, technical approach, result, stack, and implementation evidence.'
  };
}

export function FeaturedCaseStudy({ project }: { project: Project }) {
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);

  const links = [
    ...(project.demo_url ? [{ label: 'Live Demo', href: project.demo_url }] : []),
    ...(project.github_url ? [{ label: 'GitHub', href: project.github_url }] : []),
    ...(project.links || [])
  ];

  const walkthroughItems = getWalkthroughItems(project);
  const mediaNote = getMediaNote(project);

  return (
    <article className="featured-case">
      <div className="case-copy">
        <div className="project-meta">
          <span>{project.year}</span>
          <span>{project.stack_list.slice(0, 4).join(' / ')}</span>
        </div>

        <h3>{project.title}</h3>
        <p className="case-summary">{project.summary}</p>

        <div className="case-study-grid">
          <div>
            <span>Challenge</span>
            <p>{project.problem}</p>
          </div>

          <div>
            <span>Technical approach</span>
            <p>{project.solution}</p>
          </div>

          <div>
            <span>Result</span>
            <p>{project.impact}</p>
          </div>
        </div>

        <div className="case-bullets">
          <h4>What I can walk through</h4>

          <ul>
            {walkthroughItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="chip-row">
          {project.stack_list.map((item) => (
            <span className="chip" key={item}>
              {item}
            </span>
          ))}
        </div>

        {links.length ? (
          <div className="project-links case-links">
            {links.map((link) => (
              <a key={link.href + link.label} href={link.href} target="_blank" rel="noreferrer">
                {link.label} →
              </a>
            ))}
          </div>
        ) : null}
      </div>

      <div className="case-media-column" aria-label="featured project media">
        {project.video_url ? (
          <div className="case-video-frame">
            <video className="case-video" controls preload="metadata" poster={project.video_poster}>
              <source src={project.video_url} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ) : project.image_url ? (
          <button
            className="case-image-frame clickable-media"
            type="button"
            onClick={() =>
              setLightboxImage({
                src: project.image_url,
                alt: project.image_alt || project.title
              })
            }
            aria-label={`Open ${project.title} image`}
          >
            <img src={project.image_url} alt={project.image_alt || project.title} loading="lazy" />
          </button>
        ) : (
          <div className="case-image-frame case-placeholder">
            <span>{project.title}</span>
          </div>
        )}

        <div className="case-media-note">
          <span>{mediaNote.label}</span>
          <strong>{mediaNote.title}</strong>
          <p>{mediaNote.body}</p>
        </div>
      </div>

      {lightboxImage ? (
        <ImageLightbox
          src={lightboxImage.src}
          alt={lightboxImage.alt}
          onClose={() => setLightboxImage(null)}
        />
      ) : null}
    </article>
  );
}