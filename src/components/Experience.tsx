
import { motion } from 'framer-motion';
import { experience } from '../data/portfolio';
import { EASE, SectionHeading } from './fx';

export default function Experience() {
  return (
    <>
      <SectionHeading
        kicker="Behind the Build"
        title="Professional Experience"
      />

      <div className="gutter mx-auto max-w-5xl space-y-6">
        {experience.map((item, index) => (
          <motion.article
            key={`${item.company}-${item.role}`}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, delay: index * 0.12, ease: EASE }}
            className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 md:p-8"
          >
            <div className="flex flex-col justify-between gap-3 md:flex-row">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  {item.period}
                </p>
                <h3 className="mt-2 font-display text-2xl text-bone md:text-3xl">
                  {item.role}
                </h3>
                <p className="mt-2 text-lg text-white/70">
                  {item.company} · {item.place}
                </p>
              </div>

              <span className="h-fit w-fit rounded-full border border-cyan-300/30 px-3 py-1 text-xs text-cyan-200">
                Professional Experience
              </span>
            </div>

            <ul className="mt-6 space-y-3">
              {item.points.map((point, pointIndex) => (
                <li
                  key={pointIndex}
                  className="flex gap-3 leading-7 text-white/70"
                >
                  <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </>
  );
}
