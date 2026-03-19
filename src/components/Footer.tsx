export function Footer() {
  return (
    <footer className="border-t border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950">
      <div className="mx-auto max-w-6xl px-6 py-8 text-center">
        <p className="text-sm text-stone-400 dark:text-stone-600">
          &copy; {new Date().getFullYear()} Cyan. Built with React, TypeScript &
          TailwindCSS.
        </p>
      </div>
    </footer>
  );
}
