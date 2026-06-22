import type { Profile } from '../types';

export function Footer({ profile }: { profile: Profile }) {
  return (
    <footer className="container footer">
      <p>Built by {profile.name} with React and TypeScript. Full-stack Django REST Framework version available as a project.</p>
      <a href="#top">Back to top ↑</a>
    </footer>
  );
}
