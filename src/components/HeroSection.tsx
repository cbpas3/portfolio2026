import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";
import { useEffect, useState } from "react";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return isMobile;
}

const floatingBlobs = [
  {
    className:
      "absolute -top-20 left-1/4 h-80 w-80 rounded-full bg-cyan-200/25 dark:bg-cyan-700/15",
    animate: { y: [0, -35, 0], scale: [1, 1.08, 1] },
    duration: 9,
  },
  {
    className:
      "absolute top-1/3 -right-20 h-96 w-96 rounded-full bg-orange-200/20 dark:bg-orange-800/10",
    animate: { y: [0, 25, 0], scale: [1, 1.12, 1] },
    duration: 11,
  },
  {
    className:
      "absolute bottom-10 left-10 h-64 w-64 rounded-full bg-cyan-100/30 dark:bg-cyan-900/15",
    animate: { y: [0, -20, 0], x: [0, 15, 0] },
    duration: 8,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export function HeroSection() {
  const isMobile = useIsMobile();
  const prefersReduced = useReducedMotion();
  const disableBlobs = isMobile || prefersReduced;

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden scroll-mt-20 px-6"
    >
      {/* Animated background blobs — static on mobile / reduced-motion */}
      {floatingBlobs.map((blob, i) => (
        <motion.div
          key={i}
          className={`${blob.className} blur-3xl will-change-transform`}
          animate={disableBlobs ? undefined : blob.animate}
          transition={
            disableBlobs
              ? undefined
              : {
                  duration: blob.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
          }
        />
      ))}

      {/* Content */}
      <motion.div
        className="relative z-10 mx-auto max-w-3xl text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="mb-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-1.5 text-sm font-medium text-cyan-700 dark:border-cyan-800/50 dark:bg-cyan-950/80 dark:text-cyan-300">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400" />
            Available for new projects
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="font-sora text-4xl font-bold leading-tight tracking-tight text-stone-900 dark:text-stone-50 sm:text-5xl lg:text-6xl"
        >
          Building Secure Smart Contracts
          <span className="text-cyan-500 dark:text-cyan-400"> & </span>
          Scalable Web Applications.
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          variants={itemVariants}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-stone-500 dark:text-stone-400 sm:text-xl"
        >
          Hi, I'm{" "}
          <span className="font-semibold text-stone-700 dark:text-stone-300">
            Cyan
          </span>
          . I'm a full-stack software developer with over 5 years of
          experience, specializing in Solidity, EVM ecosystems, and modern
          React/Node.js infrastructure.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#cases"
            className="group inline-flex items-center gap-2.5 rounded-xl bg-cyan-500 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all hover:bg-cyan-600 hover:shadow-xl hover:shadow-cyan-500/30 dark:bg-cyan-400 dark:text-stone-950 dark:shadow-cyan-400/15 dark:hover:bg-cyan-500"
          >
            View Problem Cases
            <ArrowDown
              size={18}
              className="transition-transform group-hover:translate-y-0.5"
            />
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2.5 rounded-xl border-2 border-stone-200 px-7 py-3.5 text-base font-semibold text-stone-700 transition-all hover:border-cyan-300 hover:bg-cyan-50/50 dark:border-stone-700 dark:text-stone-300 dark:hover:border-cyan-600 dark:hover:bg-cyan-950/30"
          >
            <FileText size={18} />
            Download Resume
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-stone-300 p-1.5 dark:border-stone-600"
        >
          <motion.span className="h-2 w-1 rounded-full bg-stone-400 dark:bg-stone-500" />
        </motion.div>
      </motion.div>
    </section>
  );
}
