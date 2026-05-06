import { Hero } from "@/sections/Hero";
import { Navbar } from "@/layout/Navbar";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { About } from "@/sections/About";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/layout/Footer";

function App() {
  return (
    <div ClassName= "min-h-screen overflow-x-hidden">
        <Navbar />
        <main>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Contact />
        </main>
        <Footer />
    </div>
  );
}

export default App;
