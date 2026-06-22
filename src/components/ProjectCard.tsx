import { useState } from 'react';
import type { Project } from '../types';

function ImageLightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  return (
    <div className="image-lightbox" role="dialog" aria-modal="true" aria-label={alt} onClick={onClose}>
      <button className="lightbox-close" type="button" onClick={onClose} aria-label="Close image preview">×</button>
      <img src={src} alt={alt} onClick={(event) => event.stopPropagation()} />
    </div>
  );
}

function FallbackVisual({ slug }: { slug: string }) {
  if (slug.includes('portfolio')) {
    return (
      <div className="project-visual cms-visual" aria-label="CMS project visual">
        <div className="admin-row" />
        <div className="admin-row short" />
        <div className="admin-row" />
        <div className="visual-caption">Django Admin + DRF</div>
      </div>
    );
  }

  return (
    <div className="project-visual agario-visual" aria-label="generated project visual">
      <span className="blob blob-one" />
      <span className="blob blob-two" />
      <span className="blob blob-three" />
      <div className="visual-caption">Technical project</div>
    </div>
  );
}

function ProjectVisual({ project, onOpenImage }: { project: Project; onOpenImage: (src: string, alt: string) => void }) {
  if (project.video_url) {
    return (
      <div className="project-media-block">
        <video className="project-video" controls preload="metadata" poster={project.video_poster}>
          <source src={project.video_url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }

  if (project.image_url) {
    return (
      <button
        className="project-visual real-project-visual clickable-media"
        type="button"
        onClick={() => onOpenImage(project.image_url, project.image_alt || project.title)}
        aria-label={`Open ${project.title} image`}
      >
        <img src={project.image_url} alt={project.image_alt} loading="lazy" />
        <div className="visual-caption">Click to expand</div>
      </button>
    );
  }

  return <FallbackVisual slug={project.slug} />;
}

export function ProjectCard({ project }: { project: Project }) {
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);

  const links = [
    ...(project.github_url ? [{ label: 'GitHub', href: project.github_url }] : []),
    ...(project.demo_url ? [{ label: 'Live demo', href: project.demo_url }] : []),
    ...(project.links || []),
  ];

  return (
    <article className="project-card">
      <ProjectVisual project={project} onOpenImage={(src, alt) => setLightboxImage({ src, alt })} />

      {project.gallery?.length ? (
        <div className="mini-gallery" aria-label={`${project.title} screenshots`}>
          {project.gallery.slice(0, 6).map((item, index) => (
            <button
              className="gallery-button"
              type="button"
              key={item}
              onClick={() => setLightboxImage({ src: item, alt: `${project.title} screenshot ${index + 1}` })}
              aria-label={`Open ${project.title} screenshot ${index + 1}`}
            >
              <img src={item} alt={`${project.title} screenshot ${index + 1}`} loading="lazy" />
            </button>
          ))}
        </div>
      ) : null}

      <div className="project-meta">
        <span>{project.year}</span>
        <span>{project.stack_list.slice(0, 3).join(' / ')}</span>
      </div>
      <h3>{project.title}</h3>
      <p className="tagline">{project.tagline}</p>

      {project.evidence?.length ? (
        <div className="evidence-row">
          {project.evidence.map((item) => <span key={item}>{item}</span>)}
        </div>
      ) : null}

      <div className="case-grid">
        <div>
          <span>Challenge</span>
          <p>{project.problem}</p>
        </div>
        <div>
          <span>Built</span>
          <p>{project.solution}</p>
        </div>
        <div>
          <span>Outcome</span>
          <p>{project.impact}</p>
        </div>
      </div>
      <div className="chip-row">
        {project.stack_list.map((item) => <span className="chip" key={item}>{item}</span>)}
      </div>
      {links.length ? (
        <div className="project-links">
          {links.map((link) => <a key={link.href + link.label} href={link.href} target="_blank" rel="noreferrer">{link.label} →</a>)}
        </div>
      ) : null}

      {lightboxImage ? <ImageLightbox src={lightboxImage.src} alt={lightboxImage.alt} onClose={() => setLightboxImage(null)} /> : null}
    </article>
  );
}
