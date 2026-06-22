import type { Profile } from '../types';

export function Hero({ profile, stats }: { profile: Profile; stats: { label: string; value: string }[] }) {
  return (
    <section id="top" className="hero container">
      <div className="hero-copy">
        <div className="pill"><span className="pulse" /> {profile.availability}</div>
        <p className="eyebrow-line">Backend / Full-stack · Calgary, Canada · Open to junior software roles</p>
        <h1>{profile.title}</h1>
        <p className="hero-lead">{profile.intro}</p>
        <div className="hero-actions">
          <a className="primary-btn" href="#case-study">See case study</a>
          <a className="secondary-btn" href="#work">View projects</a>
          <a className="secondary-btn" href={`mailto:${profile.email}`}>Email me</a>
        </div>
        <div className="stats-row">
          {stats.map((stat) => (
            <div className="stat-card" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-panel" aria-label="portfolio code preview">
        <div className="panel-top"><span /> <span /> <span /></div>
        <pre>{`const Musa = {
  builds: ['REST APIs', 'Django apps', 'SQL workflows'],
  media: ['reports', 'screenshots', 'demo video'],
  alsoBuilt: ['WebSockets game', 'OCR app', 'U-Net model'],
  lookingFor: 'junior backend/full-stack role'
};`}</pre>
        <div className="architecture-card">
          <div>
            <span className="tiny-label">Project material</span>
            <strong>Short demos, screenshots, technical reports, and project links organized for quick review.</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
