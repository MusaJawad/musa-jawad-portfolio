import type { Testimonial } from '../types';

export function ClientFeedback({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <div className="feedback-grid" aria-label="client and employer feedback">
      {testimonials.map((item) => (
        <article className="feedback-card" key={item.id}>
          <div className="feedback-topline">
            <span>{item.rating} / 5.0</span>
            <small>{item.date}</small>
          </div>
          <p>“{item.quote}”</p>
          <div className="feedback-person">
            <strong>{item.author}</strong>
            <span>{item.role} · {item.organization}</span>
            <small>{item.project}</small>
          </div>
        </article>
      ))}
    </div>
  );
}
