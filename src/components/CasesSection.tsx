import { useState } from "react";
import { AnimatePresence, LayoutGroup } from "framer-motion";
import { cases } from "../data/cases";
import { CaseCard } from "./CaseCard";
import { CaseCardExpanded } from "./CaseCardExpanded";
import { ScrollReveal } from "./ScrollReveal";

export function CasesSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const expandedCase = cases.find((c) => c.id === expandedId);

  return (
    <section id="cases" className="relative scroll-mt-20 px-6 py-24">
      {/* Section header */}
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="mb-16 max-w-xl">
            <span className="mb-3 inline-block font-sora text-xs font-semibold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
              Problem Cases
            </span>
            <h2 className="font-sora text-3xl font-bold text-stone-900 dark:text-stone-100 sm:text-4xl">
              Real problems.{" "}
              <span className="text-stone-400 dark:text-stone-500">
                Engineered solutions.
              </span>
            </h2>
            <p className="mt-4 text-lg text-stone-500 dark:text-stone-400">
              A selection of challenges I've tackled across DeFi protocols,
              decentralized infrastructure, and hardware-backed authentication.
            </p>
          </div>
        </ScrollReveal>

        {/* Cards grid */}
        <LayoutGroup>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cases.map((c, i) => (
              <ScrollReveal key={c.id} delay={i * 0.12} className="h-full">
                <CaseCard
                  caseStudy={c}
                  onExpand={() => setExpandedId(c.id)}
                />
              </ScrollReveal>
            ))}
          </div>

          {/* Expanded overlay */}
          <AnimatePresence>
            {expandedCase && (
              <CaseCardExpanded
                caseStudy={expandedCase}
                onClose={() => setExpandedId(null)}
              />
            )}
          </AnimatePresence>
        </LayoutGroup>
      </div>
    </section>
  );
}
