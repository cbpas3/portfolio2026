import { motion } from "framer-motion";
import { Expand } from "lucide-react";
import type { CaseStudy } from "../data/cases";

interface CaseCardProps {
  caseStudy: CaseStudy;
  onExpand: () => void;
}

export function CaseCard({ caseStudy, onExpand }: CaseCardProps) {
  return (
    <motion.article
      layoutId={`card-${caseStudy.id}`}
      onClick={onExpand}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-xl hover:shadow-stone-900/5 dark:border-stone-800 dark:bg-stone-900 dark:hover:shadow-stone-900/30"
    >
      {/* Brand color left border */}
      <div
        className="absolute inset-y-0 left-0 w-1 rounded-l-2xl"
        style={{ backgroundColor: caseStudy.brandHex }}
      />

      {/* Header */}
      <div className="mb-4 flex items-start justify-between">
        <div>
          <motion.h3
            layoutId={`title-${caseStudy.id}`}
            className="font-sora text-lg font-semibold text-stone-900 dark:text-stone-100"
          >
            {caseStudy.title}
          </motion.h3>
          <motion.p
            layoutId={`subtitle-${caseStudy.id}`}
            className="mt-0.5 text-sm font-medium"
            style={{ color: caseStudy.tagHex }}
          >
            {caseStudy.subtitle}
          </motion.p>
        </div>
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-stone-100 text-stone-400 transition-all group-hover:bg-cyan-50 group-hover:text-cyan-500 dark:bg-stone-800 dark:text-stone-500 dark:group-hover:bg-cyan-950/50 dark:group-hover:text-cyan-400">
          <Expand size={16} />
        </span>
      </div>

      {/* Challenge preview */}
      <p className="mb-5 line-clamp-3 text-sm leading-relaxed text-stone-500 dark:text-stone-400">
        {caseStudy.challenge}
      </p>

      {/* Tech tags */}
      <motion.div
        layoutId={`tags-${caseStudy.id}`}
        className="mt-auto flex flex-wrap gap-2"
      >
        {caseStudy.techTags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border px-3 py-1 text-xs font-medium"
            style={{
              color: caseStudy.tagHex,
              borderColor: `${caseStudy.tagHex}30`,
              backgroundColor: `${caseStudy.tagHex}0a`,
            }}
          >
            {tag}
          </span>
        ))}
      </motion.div>
    </motion.article>
  );
}
