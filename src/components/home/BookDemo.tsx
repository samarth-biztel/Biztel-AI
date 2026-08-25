import { useState } from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Reveal, Chapter } from '@/components/ui/Reveal';

const interests = [
  'AI Supervisor',
  'Process Monitoring',
  'Visual Inspection',
  'AI for Manufacturing Functions',
];

export function BookDemo() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="book-demo" className="border-b border-line bg-panel text-white">
      <div className="container-x grid gap-16 py-28 lg:grid-cols-12 lg:py-36">
        <Reveal className="lg:col-span-5">
          <Chapter n="10" label="Book a Demo" />
          <h2 className="mt-10 font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
            See what AI can do in your manufacturing workflow
          </h2>
          <p className="mt-8 text-xl leading-8 text-steel-300">
            Tell us about one manufacturing workflow or problem you want to improve. This prototype keeps the request in the frontend only.
          </p>
        </Reveal>

        <Reveal className="lg:col-span-6 lg:col-start-7" delay={0.1}>
          {submitted ? (
            <div className="border border-line bg-ink p-10">
              <CheckCircle2 className="h-10 w-10 text-accent" strokeWidth={1.6} />
              <h3 className="mt-8 font-display text-3xl font-extrabold">Request captured</h3>
              <p className="mt-4 text-lg leading-8 text-steel-300">
                The frontend confirmation state is working. No backend request was sent.
              </p>
              <button onClick={() => setSubmitted(false)} className="btn-secondary mt-10">
                Submit another request
              </button>
            </div>
          ) : (
            <form
              className="border border-line bg-ink p-7 lg:p-10"
              onSubmit={(event) => {
                event.preventDefault();
                setSubmitted(true);
              }}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.24em] text-steel-500">Name</span>
                  <input className="input-field" required placeholder="Your name" />
                </label>
                <label className="block">
                  <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.24em] text-steel-500">Company</span>
                  <input className="input-field" required placeholder="Company name" />
                </label>
                <label className="block">
                  <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.24em] text-steel-500">Work Email</span>
                  <input className="input-field" type="email" required placeholder="you@company.com" />
                </label>
                <label className="block">
                  <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.24em] text-steel-500">Area</span>
                  <select className="select-field" defaultValue="">
                    <option value="" disabled>Select area</option>
                    {interests.map((interest) => (
                      <option key={interest}>{interest}</option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="mt-5 block">
                <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.24em] text-steel-500">Workflow or problem</span>
                <textarea className="input-field min-h-36 resize-none" placeholder="Describe the process you want to monitor, validate, or improve." />
              </label>

              <button type="submit" className="btn-primary mt-8 w-full">
                Book a Demo <ArrowUpRight className="h-4 w-4" />
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
