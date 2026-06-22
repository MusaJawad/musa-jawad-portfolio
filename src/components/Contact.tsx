import { FormEvent, useState } from 'react';
import type { Profile } from '../types';

export function Contact({ profile }: { profile: Profile }) {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [feedback, setFeedback] = useState('');

  function buildEmail() {
    const subject = `Portfolio message from ${form.name}${form.company ? ` at ${form.company}` : ''}`;
    const body =
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      `Company / context: ${form.company || 'N/A'}\n\n` +
      `${form.message}`;

    return { subject, body };
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const { subject, body } = buildEmail();

    const gmailUrl =
      `https://mail.google.com/mail/?view=cm&fs=1` +
      `&to=${encodeURIComponent(profile.email)}` +
      `&su=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    const opened = window.open(gmailUrl, '_blank', 'noopener,noreferrer');

    if (!opened) {
      setFeedback('Popup blocked. Use the email link or copy the message instead.');
    } else {
      setFeedback('Email draft opened in a new tab.');
    }
  }

  async function copyMessage() {
    const { subject, body } = buildEmail();
    const text = `To: ${profile.email}\nSubject: ${subject}\n\n${body}`;

    try {
      await navigator.clipboard.writeText(text);
      setFeedback('Message copied. Paste it into your email app.');
    } catch {
      setFeedback('Could not copy automatically. You can email me directly using the link on the left.');
    }
  }

  return (
    <div className="contact-card">
      <div>
        <div className="section-kicker">Contact</div>
        <h2>Hiring for a junior backend or full-stack role?</h2>
        <p className="muted">
          I am looking for a team where I can contribute to APIs, product features,
          internal tools, automation, and data-backed systems while growing fast.
        </p>

        <div className="contact-links">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          Name
          <input
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </label>

        <label>
          Email
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </label>

        <label>
          Company / context
          <input
            value={form.company}
            onChange={(e) => setForm({ ...form, company: e.target.value })}
          />
        </label>

        <label>
          Message
          <textarea
            required
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
        </label>

        <div className="form-actions">
          <button type="submit">Open Gmail draft</button>
          <button type="button" className="secondary-button" onClick={copyMessage}>
            Copy message
          </button>
        </div>

        <p className="form-feedback">
          This static form opens a prepared email draft instead of storing messages on a server.
        </p>

        {feedback && <p className="form-feedback success">{feedback}</p>}
      </form>
    </div>
  );
}