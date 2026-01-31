import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Contact from './sections/Contact';

const App = () => {
    return (
        <div className="app-wrapper">
            <Navbar />
            <main>
                <Hero />
                <Experience />
                <Projects />
                <Skills />
                <Contact />
            </main>
        </div>
    );
};

export default App;
