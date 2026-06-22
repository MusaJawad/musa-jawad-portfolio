const proofItems = [
  {
    label: 'What I ship',
    value: 'API endpoints, SQL-backed features, frontend product flows, automation, and user-facing tools',
  },
  {
    label: 'Project material',
    value: 'Screenshots, demo videos, PDF reports, architecture diagrams, and technical case studies',
  },
  {
    label: 'Technical topics',
    value: 'WebSocket sync, OCR preprocessing, U-Net metrics, cloud benchmarks, and Django/DRF architecture',
  },
];

export function ProofStrip() {
  return (
    <section className="container proof-strip" aria-label="portfolio project highlights">
      {proofItems.map((item) => (
        <article key={item.label}>
          <span>{item.label}</span>
          <strong>{item.value}</strong>
        </article>
      ))}
    </section>
  );
}
