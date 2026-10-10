
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { profile } from '../data/portfolio';
import { useReducedMotionPref } from '../hooks/useMedia';
import { EASE, Magnetic } from './fx';

const TIMELINE = [
  { at: 300, beat: 1 },
  { at: 1900, beat: 2 },
  { at: 2700, beat: 3 },
  { at: 3400, beat: 4 },
  { at: 4300, beat: 5 },
  { at: 5000, beat: 6 },
];

export default function OpeningSequence({
  onDone,
}: {
  onDone: () => void;
}) {
  const reduced = useReducedMotionPref();
  const [beat, setBeat] = useState(reduced ? 6 : 0);

  useEffect(() => {
    if (reduced) return;

    const timers = TIMELINE.map(({ at, beat }) =>
      window.setTimeout(() => setBeat(beat), at),
    );

    return () => timers.forEach(clearTimeout);
  }, [reduced]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' || event.key === 'Enter') {
        onDone();
      }
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[120] overflow-hidden bg-[#02050a]"
      exit={{
        opacity: 0,
        scale: 1.04,
        filter: 'blur(12px)',
      }}
      transition={{ duration: 0.9, ease: EASE }}
      role="dialog"
      aria-label="Ayanangshu portfolio introduction"
    >
      {/* Cinematic letterbox bars */}
      <motion.div
        className="absolute inset-x-0 top-0 z-30 h-[5vh] bg-black"
        initial={{ y: 0 }}
        animate={{ y: beat >= 6 ? '-100%' : 0 }}
        transition={{ duration: 1.2, ease: EASE }}
      />

      <motion.div
        className="absolute inset-x-0 bottom-0 z-30 h-[5vh] bg-black"
        initial={{ y: 0 }}
        animate={{ y: beat >= 6 ? '100%' : 0 }}
        transition={{ duration: 1.2, ease: EASE }}
      />

      {/* Cinematic blue glow */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            'radial-gradient(ellipse 42% 55% at 50% 58%, rgba(0,150,255,0.30), rgba(0,70,150,0.12) 48%, transparent 80%)',
        }}
        initial={{ opacity: 0 }}
        animate={{
          opacity: beat >= 2 ? [0, 0.9, 0.65, 1] : 0,
        }}
        transition={{ duration: 1.4 }}
      />

      {/* Studio title */}
      <AnimatePresence>
        {beat === 1 && (
          <motion.div
            key="studio"
            className="absolute inset-0 z-10 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, filter: 'blur(6px)' }}
            transition={{ duration: 0.6 }}
          >
            <motion.p
              className="font-sans text-xs font-semibold text-white sm:text-sm"
              initial={{ letterSpacing: '0.2em', opacity: 0 }}
              animate={{ letterSpacing: '0.6em', opacity: 1 }}
              transition={{ duration: 1.6, ease: EASE }}
            >
              {profile.originalLabel}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Smaller portrait with rounded frame and cyan border */}
      <motion.div
        className="pointer-events-none absolute inset-x-0 bottom-[4vh] z-[1] mx-auto flex h-[49vh] w-[min(76vw,340px)] items-end justify-center sm:h-[57vh] sm:w-[min(38vw,390px)] md:h-[62vh] md:w-[400px]"
        initial={{
          opacity: 0,
          scale: 1.08,
          filter: 'blur(16px) brightness(0.4)',
        }}
        animate={
          beat >= 4
            ? {
                opacity: 1,
                scale: 1,
                filter: 'blur(0px) brightness(1)',
              }
            : { opacity: 0 }
        }
        transition={{ duration: 1.5, ease: EASE }}
      >
        {/* Frame */}
        <div className="relative h-full w-full overflow-hidden rounded-t-[48%] rounded-b-2xl border border-cyan-300/50 bg-[#06101d]/70 shadow-[0_0_25px_rgba(0,180,255,0.15)]">
          <img
            src="/ayanangshu-hero.png.png"
            alt="Ayanangshu Goswami"
            draggable={false}
            className="h-full w-full select-none object-cover object-top"
          />

          {/* Fade photo into the dark background */}
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent via-[65%] to-[#02050a]"
          />

          {/* Inner border highlight */}
          <div
            aria-hidden
            className="absolute inset-0 rounded-t-[48%] rounded-b-2xl ring-1 ring-inset ring-cyan-200/20"
          />
        </div>
      </motion.div>

      {/* Vignette and cinematic bottom fade */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[2]"
        style={{
          background:
            'linear-gradient(to bottom, rgba(2,5,10,0.05) 12%, transparent 38%, rgba(2,5,10,0.08) 56%, rgba(2,5,10,0.65) 83%, #02050a 100%), radial-gradient(ellipse 75% 80% at 50% 42%, transparent 35%, rgba(0,0,0,0.72) 100%)',
        }}
      />

      {/* Name and series title */}
      <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center px-2 pt-[7vh] text-center sm:px-4">
        <motion.h1
          className="w-full whitespace-nowrap font-display font-black leading-[0.82] text-[#f5f3ef] drop-shadow-[0_8px_40px_rgba(0,0,0,0.8)]"
          style={{
            fontSize: 'clamp(2.3rem, 15.8vw, 15rem)',
          }}
          initial={{
            opacity: 0,
            scale: 1.15,
            filter: 'blur(20px)',
            letterSpacing: '0.3em',
          }}
          animate={
            beat >= 2
              ? {
                  opacity: 1,
                  scale: 1,
                  filter: 'blur(0px)',
                  letterSpacing: '0.015em',
                  y: beat >= 4 ? '-1vh' : 0,
                }
              : {}
          }
          transition={{ duration: 1.3, ease: EASE }}
        >
          AYANANGSHU
        </motion.h1>

        <motion.p
          className="mt-4 font-sans text-xs font-bold tracking-[0.45em] text-cyan-400 [text-shadow:0_2px_20px_rgba(0,0,0,0.9)] sm:mt-5 sm:text-lg sm:tracking-[0.7em]"
          initial={{ opacity: 0, y: 10 }}
          animate={
            beat >= 3
              ? { opacity: 1, y: 0, letterSpacing: '0.55em' }
              : {}
          }
          transition={{ duration: 1.1, ease: EASE }}
        >
          THE SERIES
        </motion.p>
      </div>

      {/* Professional tagline and Play button */}
      <div className="absolute inset-x-0 bottom-[8vh] z-20 flex flex-col items-center gap-6 px-3 text-center sm:px-4">
        <motion.p
          className="font-sans text-[8px] font-semibold uppercase tracking-[0.12em] text-white/95 sm:text-sm sm:tracking-[0.3em]"
          initial={{ opacity: 0, y: 14 }}
          animate={beat >= 5 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: EASE }}
        >
          AI/ML ENGINEER
          <span className="mx-1.5 text-cyan-400 sm:mx-2">•</span>
          FULL-STACK DEVELOPER
          <span className="mx-1.5 text-cyan-400 sm:mx-2">•</span>
          B.TECH IT STUDENT
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            beat >= 6 ? { opacity: 1, scale: 1 } : {}
          }
          transition={{ duration: 0.7, ease: EASE }}
        >
          <Magnetic>
            <button
              type="button"
              data-cursor="play"
              onClick={onDone}
              tabIndex={beat >= 6 ? 0 : -1}
              className="group flex items-center gap-3 rounded-full bg-[#f5f3ef] px-9 py-4 font-sans text-base font-bold tracking-wide text-[#07101c] shadow-[0_0_60px_rgba(0,150,255,0.35)] transition hover:bg-white"
            >
              <span className="text-lg transition-transform group-hover:scale-125">
                ▶
              </span>
              PLAY
            </button>
          </Magnetic>
        </motion.div>
      </div>

      {/* Skip intro */}
      <button
        type="button"
        onClick={onDone}
        className="absolute right-4 top-[calc(5vh+12px)] z-40 rounded-full border border-cyan-400/40 px-4 py-2 font-sans text-[11px] font-semibold tracking-[0.2em] text-white/90 transition hover:border-cyan-300 hover:text-cyan-200 sm:right-6"
      >
        SKIP INTRO
      </button>
    </motion.div>
  );
}
