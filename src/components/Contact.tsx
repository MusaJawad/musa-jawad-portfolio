import { FormEvent, useState } from 'react';
import type { Profile } from '../types';

export function Contact({ profile }: { profile: Profile }) {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name}${form.company ? ` at ${form.company}` : ''}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany/context: ${form.company || 'N/A'}\n\n${form.message}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <div className="contact-card">
      <div>
        <div className="section-kicker">Contact</div>
        <h2>Hiring for a junior backend or full-stack role?</h2>
        <p className="muted">
          I am looking for a team where I can contribute to APIs, product features, internal tools, automation, and data-backed systems while growing fast.
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
          <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        </label>
        <label>
          Email
          <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        </label>
        <label>
          Company / context
          <input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
        </label>
        <label>
          Message
          <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
        </label>
        <button type="submit">Open email draft</button>
        <p className="form-feedback">Fast static form: no backend delay, no spin-down, no hidden delivery failure.</p>
      </form>
    </div>
  );
}
