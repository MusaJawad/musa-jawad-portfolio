import type { Profile } from '../types';

export function Header({ profile }: { profile: Profile }) {
  return (
    <header className="site-header">
      <a href="#top" className="brand" aria-label="Musa Jawad home">
        <span className="brand-mark">MJ</span>
        <span>{profile.name}</span>
      </a>
      <nav>
        <a href="#case-study">Case study</a>
        <a href="#work">Projects</a>
        <a href="#build">How I build</a>
        <a href="#skills">Skills</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
      <a className="header-cta" href={profile.resume} target="_blank" rel="noreferrer">Resume</a>
    </header>
  );
}
