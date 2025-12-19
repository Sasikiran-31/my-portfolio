import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
    const projectList = [

        {
            title: "Multi-Agent RAG Chatbot",
            description: "A smart chatbot utilizing LangChain & Ollama with 3 specialized agents (General, AI, Concordia). Features a RAG pipeline and ChromaDB for context-aware responses.",
            tags: ["LangChain", "Ollama", "FastAPI", "ChromaDB"],
            repoLink: "https://github.com/ramprakashpg/Multi-Agent-RAG-Chatbot-System",
            gradient: "from-blue-500 to-cyan-500"
        },
        {
            title: "Event-Driven Task Tracker",
            description: "A microservice-based system using Apache Kafka for asynchronous event exchange. Dockerized for 80% faster setup.",
            tags: ["Java", "Spring Boot", "Kafka", "Docker"],
            repoLink: "https://github.com/Sasikiran-31/Event-Driven-Task-Tracker",
            gradient: "from-blue-500 to-cyan-500"
        },
        {
            title: "Inventory Ease",
            description: "Full-stack product management system reducing task completion time by 30%. Scalable Express.js API & React frontend.",
            tags: ["MongoDB", "Express", "React", "Node.js"],
            repoLink: "https://github.com/Sasikiran-31/InventoryEase",
            gradient: "from-blue-500 to-cyan-500"
        },
        {
            title: "Risk Game",
            description: "Robust turn-based strategy game engine implementing 4 GoF Design Patterns (State, Command, Strategy, Adapter).",
            tags: ["Java", "Design Patterns", "JUnit", "CI/CD"],
            repoLink: "https://github.com/aswiinraviprakash/RiskGame",
            gradient: "from-blue-500 to-cyan-500"
        },
    ];

    //Animation
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (

        <section id="projects" className="py-24 px-4 bg-black relative overflow-hidden">
            {/* 1. Sleek Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] z-0"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.h3
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400 tracking-tight"
                >
                    Featured Projects
                </motion.h3>

                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {projectList.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{ y: -10 }}
                            className="card bg-gray-900/40 backdrop-blur-xl border border-white/5 shadow-2xl overflow-hidden group flex flex-col h-full"
                        >
                            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                            <div className="card-body p-8 flex flex-col flex-grow relative z-10">
                                <h2 className={`card-title text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${project.gradient} mb-4`}>
                                    {project.title}
                                </h2>

                                <p className="text-gray-400 leading-relaxed mb-6 flex-grow">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="px-3 py-1 text-xs font-semibold text-gray-300 bg-white/5 rounded-full border border-white/5">
                      {tag}
                    </span>
                                    ))}
                                </div>

                                {/* Button */}
                                <div className="card-actions mt-auto">
                                    <a
                                        href={project.repoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`btn btn-sm w-full border-none text-white bg-gradient-to-r ${project.gradient} opacity-90 hover:opacity-100 transition-all`}
                                    >
                                        View Code
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                    </a>
                                </div>
                            </div>

                            {/* Hover Glow Effect */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;