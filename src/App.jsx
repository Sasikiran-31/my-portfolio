import React from 'react';
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Footer from "./components/Footer.jsx";
import Projects from "./components/ProjectsSection.jsx";
import Contact from "./components/Contact.jsx";
import RevealOnScroll from "./components/RevealOnScroll.jsx";
import TechStack from "./components/TechStack.jsx";

function App() {
    return (
        <div className={"min-h-screen bg-gray-50 text-gray-800 font-sans"}>
            <Navbar/>
            <Hero/>
            <RevealOnScroll>
                <TechStack/>
            </RevealOnScroll>

            <RevealOnScroll>
            <Projects/>
                </RevealOnScroll>
            <RevealOnScroll>
                <Contact />
            </RevealOnScroll>
            <Footer/>
        </div>
    );
}

export default App;