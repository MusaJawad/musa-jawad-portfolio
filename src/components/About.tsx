export function About() {
  return (
    <section id="about" className="section container about-section">
      <div className="about-photo-card">
        <img
          src="/assets/profile/musa-about.webp"
          alt="Musa Jawad standing outdoors by the water"
          loading="lazy"
        />
        <div className="about-photo-badge">
          <span>Calgary-based</span>
          <strong>Backend / Full-stack software engineer</strong>
        </div>
      </div>

      <div className="about-copy">
        <div className="section-kicker">About me</div>
        <h2>Backend-focused, hands-on, and creatively technical.</h2>
        <p>
          I’m a software engineering graduate based in Calgary, focused on backend and full-stack development.
          I enjoy building practical systems with APIs, databases, automation, and clean user-facing workflows.
          My strongest interests are backend architecture, SaaS-style products, AI/data-driven tools, and game systems
          that require real-time communication.
        </p>
        <p>
          Outside of coding, I work on game ideas, pixel art, and projects where I can mix technical problem-solving
          with creativity. I’m looking for a team where I can keep learning fast, contribute to real products,
          and grow into a strong software engineer.
        </p>
        <div className="about-highlight-grid">
          <div>
            <span>Focus</span>
            <strong>APIs, data workflows, automation, and full-stack product features</strong>
          </div>
          <div>
            <span>Personality</span>
            <strong>Curious, hands-on, persistent, and comfortable debugging messy systems</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
