import type { Experience } from '../types';

export function ExperienceTimeline({ experience }: { experience: Experience[] }) {
  return (
    <div className="timeline">
      {experience.map((item) => (
        <article className="timeline-item" key={item.id}>
          <div className="timeline-date">{item.start} — {item.end}</div>
          <div className="timeline-content">
            <h3>{item.role}</h3>
            <p className="org">{item.organization}{item.location ? ` · ${item.location}` : ''}</p>
            <p>{item.summary}</p>
            <ul>
              {item.highlight_list.map((h) => <li key={h}>{h}</li>)}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}
