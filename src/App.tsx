
import {
  lazy,
  Suspense,
  useCallback,
  useEffect,
  useState,
  type ReactNode,
} from 'react';

import { AnimatePresence, LayoutGroup, motion } from 'framer-motion';

import {
  viewerProfiles,
  type ProfileId,
  type Project,
  type SectionId,
} from './data/portfolio';

import {
  SmoothScrollProvider,
  useSmoothScroll,
} from './hooks/smoothScroll';

import CustomCursor from './components/CustomCursor';
import OpeningSequence from './components/OpeningSequence';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ContinueWatching from './components/ContinueWatching';
import Scene from './components/Scene';
import About from './components/About';
import Seasons from './components/Seasons';
import Originals from './components/Originals';
import TopPicks from './components/TopPicks';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import ResumeSection from './components/ResumeViewer';
import FinalCTA from './components/FinalCTA';
import { EASE } from './components/fx';
import Experience from './components/Experience';

// Load overlays only when needed.
const PlayIntro = lazy(() => import('./components/PlayIntro'));
const ProjectModal = lazy(() => import('./components/ProjectModal'));
const ResumeModal = lazy(() => import('./components/ResumeModal'));

type Stage = 'opening' | 'home';

const STORAGE_KEY = 'ayanangshu-series-profile';

function readStoredProfile(): ProfileId | null {
  try {
    const savedProfile = sessionStorage.getItem(STORAGE_KEY);

    if (!savedProfile) {
      return null;
    }

    const matchingProfile = viewerProfiles.find(
      (profile) => profile.id === savedProfile,
    );

    return matchingProfile ? matchingProfile.id : null;
  } catch {
    return null;
  }
}

export default function App() {
  return (
    <SmoothScrollProvider>
      <Series />
    </SmoothScrollProvider>
  );
}

function Series() {
  const storedProfile = readStoredProfile();

  // Use the saved profile if valid, otherwise use the first available profile.
  const defaultProfileId: ProfileId =
    storedProfile ?? viewerProfiles[0]?.id ?? 'ayanangshu';

  // Always show the opening animation first.
  // Clicking PLAY takes the user directly to the portfolio homepage.
  const [stage, setStage] = useState<Stage>('opening');

  const [profileId, setProfileId] =
    useState<ProfileId>(defaultProfileId);

  const [playing, setPlaying] = useState(false);
  const [project, setProject] = useState<Project | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  const { scrollTo, lock, unlock } = useSmoothScroll();

  // Resolve the currently active profile safely.
  const activeProfile =
    viewerProfiles.find((profile) => profile.id === profileId) ??
    viewerProfiles[0];

  const activeProfileId: ProfileId =
    activeProfile?.id ?? profileId;

  const order: SectionId[] = activeProfile?.order ?? [];

  // Lock scrolling while the opening animation is visible.
  useEffect(() => {
    if (stage === 'home') {
      return;
    }

    lock();

    return unlock;
  }, [stage, lock, unlock]);

  // Retain profile switching if it is used by the navbar.
  const pickProfile = useCallback(
    (id: ProfileId) => {
      const selectedProfile = viewerProfiles.find(
        (profile) => profile.id === id,
      );

      if (!selectedProfile) {
        console.error(
          `Profile "${id}" was not found in viewerProfiles.`,
        );
        return;
      }

      setProfileId(selectedProfile.id);

      try {
        sessionStorage.setItem(STORAGE_KEY, selectedProfile.id);
      } catch {
        // Continue working if session storage is unavailable.
      }

      if (stage !== 'home') {
        window.scrollTo(0, 0);
        setStage('home');
      } else {
        setToast(
          `Now watching as ${selectedProfile.name} — ${selectedProfile.blurb.toLowerCase()}`,
        );

        scrollTo(0, { offset: 0 });
      }
    },
    [stage, scrollTo],
  );

  // Automatically dismiss toast messages.
  useEffect(() => {
    if (!toast) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setToast(null);
    }, 3200);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [toast]);

  // Opening sequence: PLAY or SKIP opens the portfolio homepage directly.
  const finishOpening = useCallback(() => {
    window.scrollTo(0, 0);
    setStage('home');
  }, []);

  const closeIntro = useCallback(() => {
    setPlaying(false);
  }, []);

  const closeProject = useCallback(() => {
    setProject(null);
  }, []);

  const closeResume = useCallback(() => {
    setResumeOpen(false);
  }, []);

  // Portfolio sections.
  const sections: Record<SectionId, ReactNode> = {
    about: <About />,
    experience: <Experience />,
    originals: <Originals onOpen={setProject} />,
    picks: <TopPicks />,
    skills: <Skills />,
    moments: <Achievements />,
    story: <ResumeSection onView={() => setResumeOpen(true)} />,
  };

  return (
    <LayoutGroup>
      <div className="grain" aria-hidden="true" />

      <CustomCursor />

      {/* Only the opening sequence is shown before the homepage. */}
      <AnimatePresence mode="wait">
        {stage === 'opening' && (
          <OpeningSequence
            key="opening"
            onDone={finishOpening}
          />
        )}
      </AnimatePresence>

      {/* Main portfolio homepage. */}
      {stage === 'home' && (
        <motion.div
          initial={{
            opacity: 0,
            scale: 1.03,
            filter: 'blur(10px)',
          }}
          animate={{
            opacity: 1,
            scale: 1,
            filter: 'blur(0px)',
          }}
          transition={{
            duration: 1,
            ease: EASE,
          }}
        >
          <Navbar
            order={order}
            profileId={activeProfileId}
            onSwitch={pickProfile}
          />

          <main>
            <Hero
              key={`hero-${activeProfileId}`}
              onPlay={() => setPlaying(true)}
              onResume={() => setResumeOpen(true)}
              profileId={activeProfileId}
            />

            <ContinueWatching order={order} />

            {order.map((id) => (
              <Scene
                key={id}
                id={id}
                className={
                  id === 'originals'
                    ? '!py-0 sm:!py-0'
                    : ''
                }
              >
                {sections[id]}
              </Scene>
            ))}

            <FinalCTA
              onReplay={() => {
                window.scrollTo(0, 0);
                setStage('opening');
              }}
            />
          </main>
        </motion.div>
      )}

      {/* Intro, project, and resume overlays. */}
      <Suspense fallback={null}>
        <AnimatePresence>
          {playing && (
            <PlayIntro
              key="intro"
              onClose={closeIntro}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {project && (
            <ProjectModal
              key="project"
              project={project}
              onClose={closeProject}
              onSwitch={setProject}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {resumeOpen && (
            <ResumeModal
              key="resume"
              onClose={closeResume}
            />
          )}
        </AnimatePresence>
      </Suspense>

      {/* Toast notifications. */}
      <AnimatePresence>
        {toast && (
          <motion.div
            role="status"
            className="glass fixed bottom-6 left-1/2 z-[150] w-[min(92vw,420px)] -translate-x-1/2 rounded-xl px-5 py-3 text-center text-sm text-bone"
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 30,
            }}
          >
            {toast}
          </motion.div>
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
}
