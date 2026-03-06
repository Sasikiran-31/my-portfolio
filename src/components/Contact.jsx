import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-24 px-4 min-h-screen flex items-center justify-center relative bg-black overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#facc152e_1px,transparent_1px),linear-gradient(to_bottom,#facc152e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="card w-full max-w-3xl bg-gray-900/40 backdrop-blur-xl border border-white/5 shadow-2xl overflow-hidden relative z-10"
      >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

        <div className="card-body py-12 px-8 md:px-12 text-center items-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Let's Connect
          </h2>
          <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed font-light">
            I'm actively seeking opportunities to{" "}
            <span className="font-semibold text-gray-200">
              architect and build scalable backend systems
            </span>
            . Whether you have a complex engineering challenge or just want to
            say hi, my inbox is always open!
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:ssasikiran8@gmail.com"
            className="btn btn-lg text-white border-none bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 mb-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            Say Hello
          </motion.a>
          <div className="divider text-gray-600 font-medium text-sm tracking-widest uppercase my-8">
            OR
          </div>
          <div className="flex flex-col items-center gap-6 w-full">
            <div className="flex items-center gap-3 text-gray-300 bg-white/5 px-6 py-3 rounded-full border border-white/10 hover:border-white/20 transition-all">
              <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                  />
                </svg>
              </div>
              <span className="font-medium">kirankumar.2001@yahoo.in</span>
            </div>

            <div className="flex flex-wrap justify-center gap-4 w-full mt-2">
              <a
                href="https://www.linkedin.com/in/sasikiran-sivakumar-b76919194/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline border-gray-600 text-gray-300 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all min-w-[140px]"
              >
                <span className="font-bold">LinkedIn</span>
              </a>
              <a
                href="https://github.com/Sasikiran-31"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white hover:border-gray-700 transition-all min-w-[140px]"
              >
                <span className="font-bold">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
