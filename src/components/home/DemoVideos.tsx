import { ArrowDownToLine, FileText } from 'lucide-react';
import { Reveal, Chapter } from '@/components/ui/Reveal';

const demos = [
  {
    number: '01',
    title: 'Cleaning Process',
    caption: 'Tracks surface cleaning steps to identify missed or incorrect actions.',
    poster: '/videos/cleaning_poster.jpg',
    src: '/videos/cleaning_process.mp4',
    pdf: '/cleaning_process.pdf',
  },
  {
    number: '02',
    title: 'Tightening Process',
    caption: 'Checks bolt tightening order and completion, with OK / NOK output and PLC interlock.',
    poster: '/videos/tightening_poster.jpg',
    src: '/videos/tightening_process.mp4',
    pdf: '/tightening_process.pdf',
  },
];

export function DemoVideos({ chapterNumber = '07' }: { chapterNumber?: string }) {
  return (
    <section id="demo-videos" className="border-b border-line bg-surface text-ink">
      <div className="container-x py-28 lg:py-36">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <Reveal className="lg:col-span-7">
            <Chapter n={chapterNumber} label="Demo Videos" />
            <h2 className="mt-10 max-w-4xl font-display text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
              See AI Supervisor in action
            </h2>
          </Reveal>
          <Reveal className="lg:col-span-5 lg:pt-14" delay={0.1}>
            <p className="max-w-xl text-lg leading-8 text-steel-500">
              BiztelAI demonstration footage. No confidential customer production data is shown.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-7 lg:grid-cols-2">
          {demos.map((demo, index) => (
            <Reveal key={demo.title} delay={index * 0.1} className="h-full">
              <article className="h-full overflow-hidden border border-line bg-muted">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <video
                    className="h-full w-full bg-surface object-cover"
                    controls
                    muted
                    preload="metadata"
                    poster={demo.poster}
                    aria-label={`${demo.title} demo video`}
                  >
                    <source src={demo.src} type="video/mp4" />
                  </video>
                  <span className="pointer-events-none absolute left-6 top-6 bg-surface/85 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.34em] text-accent">
                    Demo {demo.number}
                  </span>
                </div>

                <div className="p-8 lg:p-10">
                  <h3 className="font-display text-2xl font-extrabold">{demo.title}</h3>
                  <p className="mt-4 text-lg text-steel-300">{demo.caption}</p>
                  <a href={demo.pdf} target="_blank" rel="noreferrer" className="btn-secondary mt-8 w-full">
                    <FileText className="h-4 w-4" />
                    View Process PDF
                    <ArrowDownToLine className="h-4 w-4" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
