import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { CasesSection } from "./components/CasesSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-stone-50 font-dm-sans text-stone-900 dark:bg-stone-950 dark:text-stone-100">
      <Navbar />
      <main>
        <HeroSection />
        <CasesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
