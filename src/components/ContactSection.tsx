import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/cbpas3",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/cbpas/",
    icon: Linkedin,
  },
  {
    label: "Twitter / X",
    href: "https://x.com/Iam00ffff",
    icon: Twitter,
  },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-20 overflow-hidden px-6 py-24"
    >
      {/* Background accent blob — static blur, animated only on desktop */}
      <motion.div
        className="absolute -bottom-32 right-1/4 h-96 w-96 rounded-full bg-cyan-100/40 blur-3xl will-change-transform dark:bg-cyan-900/15"
        animate={{ scale: [1, 1.08, 1], y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          {/* Left: bio + socials */}
          <ScrollReveal direction="left">
            <div>
              <span className="mb-3 inline-block font-sora text-xs font-semibold uppercase tracking-widest text-cyan-600 dark:text-cyan-400">
                Get in Touch
              </span>
              <h2 className="font-sora text-3xl font-bold text-stone-900 dark:text-stone-100 sm:text-4xl">
                Let's build something{" "}
                <span className="text-cyan-500 dark:text-cyan-400">
                  together.
                </span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-stone-500 dark:text-stone-400">
                I'm a full-stack developer passionate about secure smart
                contracts, scalable web infrastructure, and open-source
                collaboration. Whether you have a DeFi protocol to secure, a
                dApp to build, or an interesting problem to solve — I'd love to
                hear about it.
              </p>

              {/* Social links */}
              <div className="mt-8 flex gap-3">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-12 w-12 items-center justify-center rounded-xl border border-stone-200 bg-white text-stone-500 transition-all hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-600 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-400 dark:hover:border-cyan-600 dark:hover:bg-cyan-950/40 dark:hover:text-cyan-400"
                    aria-label={social.label}
                  >
                    <social.icon
                      size={20}
                      className="transition-transform group-hover:scale-110"
                    />
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right: CTA card */}
          <ScrollReveal direction="right">
            <div className="flex items-center">
              <div className="w-full rounded-2xl border border-stone-200 bg-white p-8 dark:border-stone-800 dark:bg-stone-900">
                <div className="mb-6">
                  <h3 className="font-sora text-xl font-semibold text-stone-900 dark:text-stone-100">
                    Start a conversation
                  </h3>
                  <p className="mt-2 text-sm text-stone-500 dark:text-stone-400">
                    Drop me an email and I'll get back to you within 24 hours.
                  </p>
                </div>

                <a
                  href="mailto:cbpas3@gmail.com"
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-cyan-500 px-6 py-4 text-base font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all hover:bg-cyan-600 hover:shadow-xl hover:shadow-cyan-500/30 dark:bg-cyan-400 dark:text-stone-950 dark:shadow-cyan-400/15 dark:hover:bg-cyan-500"
                >
                  <Mail size={20} />
                  cbpas3@gmail.com
                  <ArrowUpRight
                    size={18}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
