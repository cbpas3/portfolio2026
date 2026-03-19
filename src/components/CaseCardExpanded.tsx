import { useEffect } from "react";
import { motion } from "framer-motion";
import { X, Github, Globe, ShieldCheck } from "lucide-react";
import type { CaseStudy } from "../data/cases";

interface CaseCardExpandedProps {
  caseStudy: CaseStudy;
  onClose: () => void;
}

const linkIcons = {
  github: Github,
  demo: Globe,
  audit: ShieldCheck,
  website: Globe,
};

export function CaseCardExpanded({
  caseStudy,
  onClose,
}: CaseCardExpandedProps) {
  // Lock body scroll & close on Escape
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
      />

      {/* Expanded card */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 lg:p-16">
        <motion.article
          layoutId={`card-${caseStudy.id}`}
          className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-stone-200 bg-white p-8 shadow-2xl dark:border-stone-800 dark:bg-stone-900 md:p-10"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-lg bg-stone-100 text-stone-500 transition-colors hover:bg-stone-200 hover:text-stone-700 dark:bg-stone-800 dark:text-stone-400 dark:hover:bg-stone-700 dark:hover:text-stone-200"
            aria-label="Close"
          >
            <X size={18} />
          </button>

          {/* Header */}
          <motion.h2
            layoutId={`title-${caseStudy.id}`}
            className="font-sora pr-10 text-2xl font-bold text-stone-900 dark:text-stone-100 md:text-3xl"
          >
            {caseStudy.title}
          </motion.h2>
          <motion.p
            layoutId={`subtitle-${caseStudy.id}`}
            className="mt-1 text-base font-medium text-cyan-600 dark:text-cyan-400"
          >
            {caseStudy.subtitle}
          </motion.p>

          {/* Challenge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            className="mt-8"
          >
            <h4 className="mb-2 font-sora text-xs font-semibold uppercase tracking-widest text-stone-400 dark:text-stone-500">
              The Challenge
            </h4>
            <p className="leading-relaxed text-stone-600 dark:text-stone-300">
              {caseStudy.challenge}
            </p>
          </motion.div>

          {/* Solution */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.4 }}
            className="mt-6"
          >
            <h4 className="mb-2 font-sora text-xs font-semibold uppercase tracking-widest text-stone-400 dark:text-stone-500">
              The Solution
            </h4>
            <p className="leading-relaxed text-stone-600 dark:text-stone-300">
              {caseStudy.solution}
            </p>
          </motion.div>

          {/* Tech tags */}
          <motion.div
            layoutId={`tags-${caseStudy.id}`}
            className="mt-8 flex flex-wrap gap-2"
          >
            {caseStudy.techTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-700 dark:bg-cyan-950/50 dark:text-cyan-300"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Links */}
          {caseStudy.links.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.4 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {caseStudy.links.map((link) => {
                const Icon = linkIcons[link.type];
                return (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-2 rounded-lg border border-stone-200 bg-stone-50 px-4 py-2.5 text-sm font-medium text-stone-700 transition-all hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-700 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-300 dark:hover:border-cyan-600 dark:hover:bg-cyan-950/40 dark:hover:text-cyan-300"
                  >
                    <Icon size={16} />
                    {link.label}
                  </a>
                );
              })}
            </motion.div>
          )}
        </motion.article>
      </div>
    </>
  );
}
