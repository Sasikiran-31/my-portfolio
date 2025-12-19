import React from "react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div
      id="about"
      className="hero min-h-screen bg-black relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-80 h-80 bg-blue-900/20 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-80 h-80 bg-purple-900/20 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="hero-content text-center z-10 relative">
        <div className="max-w-3xl">
          <p className="text-2xl md:text-3xl font-extrabold tracking-tight mb-4 text-white align-top">
            Hello 👋, I am
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 text-white">
            Sasikiran{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r text-white">
              Sivakumar
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-200 mb-6 h-20 md:h-10">
            <TypeAnimation
              sequence={[
                "Bilingual Software Developer",
                2000,
                "Backend Engineer",
                2000,
                "AWS Certified Cloud Practitioner",
                2000,
                "Building Scalable Web and AI Systems",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h2>

          <p className="py-2 text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            Combining full-stack expertise with AI innovation, I build scalable,
            high-performance applications using
            <span className="text-white font-bold"> Java</span>,
            <span className="text-white-400 font-bold"> Python</span> and
            <span className="text-white-400 font-bold"> React</span>.
            <br className="hidden md:block" />
            Based in <span className="text-white font-semibold">Montreal</span>,
            I am open to new grad opportunities in Cloud and Software
            Engineering across all over Canada.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
            <a
              href="#projects"
              className="btn btn-primary btn-wide text-white font-bold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="btn btn-outline border-gray-600 text-gray-300 hover:bg-white hover:text-black hover:border-white transition-all"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
