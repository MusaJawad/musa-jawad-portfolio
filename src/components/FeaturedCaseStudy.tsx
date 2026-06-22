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

export function FeaturedCaseStudy({ project }: { project: Project }) {
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);
  const links = [
    ...(project.github_url ? [{ label: 'GitHub', href: project.github_url }] : []),
    ...(project.links || []),
  ];

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
            <li>How the client sends movement/game events through WebSockets.</li>
            <li>How proxy routing, replica health checks, and backend responsibilities are separated.</li>
            <li>Why passive replication and Lamport timestamps help reason about consistency.</li>
            <li>What I would improve next: load testing, observability, and deployment automation.</li>
          </ul>
        </div>

        <div className="chip-row">
          {project.stack_list.map((item) => <span className="chip" key={item}>{item}</span>)}
        </div>

        {links.length ? (
          <div className="project-links case-links">
            {links.map((link) => <a key={link.href + link.label} href={link.href} target="_blank" rel="noreferrer">{link.label} →</a>)}
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
            onClick={() => setLightboxImage({ src: project.image_url, alt: project.image_alt || project.title })}
            aria-label={`Open ${project.title} image`}
          >
            <img src={project.image_url} alt={project.image_alt} loading="lazy" />
          </button>
        ) : null}
        <div className="case-media-note">
          <span>Featured demo</span>
          <strong>Captioned walkthrough with audio</strong>
          <p>Django replicas, proxy routing, Phaser gameplay, multiplayer sync, and lag/packet-loss handling.</p>
        </div>
      </div>

      {lightboxImage ? <ImageLightbox src={lightboxImage.src} alt={lightboxImage.alt} onClose={() => setLightboxImage(null)} /> : null}
    </article>
  );
}
