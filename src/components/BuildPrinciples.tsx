const principles = [
  {
    title: 'Backend first',
    text: 'I focus on clean API boundaries, validation logic, database design, and predictable server-side behavior.',
    proof: 'REST APIs · SQL · Django · Node · PHP/MVC',
  },
  {
    title: 'Product-minded',
    text: 'I try to understand what the user is trying to do before jumping into code, then build the smallest useful version that can be improved.',
    proof: 'MediScanner · legal platform features · internal tools',
  },
  {
    title: 'Reliable under pressure',
    text: 'I like debugging slow paths, edge cases, and broken flows because those fixes usually create the most real value.',
    proof: 'form bottlenecks · SQL optimization · testing · error handling',
  },
];

export function BuildPrinciples() {
  return (
    <div className="principle-grid">
      {principles.map((principle, index) => (
        <article className="principle-card" key={principle.title}>
          <span className="principle-number">0{index + 1}</span>
          <h3>{principle.title}</h3>
          <p>{principle.text}</p>
          <strong>{principle.proof}</strong>
        </article>
      ))}
    </div>
  );
}
