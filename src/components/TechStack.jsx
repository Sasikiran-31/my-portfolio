import React from 'react';
import { motion } from 'framer-motion';

const TechStack = () => {
    const skills = [
        {
            category: "Backend",
            icon: "⚡",
            color: "from-blue-500 to-cyan-500", // Custom gradient for this card
            items: ["Java", "Spring Boot", "Python", "FastAPI", "Node.js"]
        },
        {
            category: "Frontend",
            icon: "🎨",
            color: "from-purple-500 to-pink-500",
            items: ["React", "JavaScript", "TypeScript", "HTML5", "CSS", "Tailwind"]
        },
        {
            category: "DevOps & Cloud",
            icon: "☁️",
            color: "from-orange-500 to-yellow-500",
            items: ["AWS", "Docker", "Kubernetes", "Git", "Jenkins", "GitHub Actions"]
        },
        {
            category: "Databases",
            icon: "🗄️",
            color: "from-green-500 to-emerald-500",
            items: ["PostgreSQL", "MongoDB", "MS SQL", "SQL"]
        }
    ];

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2 // Stagger the animation of children by 0.2s
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    return (
        <section className="py-24 px-4 bg-black relative overflow-hidden">
            {/* Background Decor (Subtle Grid) */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] z-0"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.h3
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400 tracking-tight"
                >
                    Technical Expertise
                </motion.h3>

                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -10 }} // Lift up on hover
                            className="card bg-gray-900/40 backdrop-blur-xl border border-white/5 shadow-2xl overflow-hidden group relative"
                        >
                            {/* Dynamic Gradient Border (Top Line) */}
                            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${skillGroup.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                            <div className="card-body p-8 relative z-10">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${skillGroup.color} bg-opacity-10 flex items-center justify-center text-2xl shadow-lg`}>
                                        {skillGroup.icon}
                                    </div>
                                    <h4 className="text-xl font-bold text-gray-100 group-hover:text-white transition-colors">
                                        {skillGroup.category}
                                    </h4>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {skillGroup.items.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 text-sm font-medium text-gray-400 bg-white/5 rounded-full border border-white/5 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-default"
                                        >
                      {tech}
                    </span>
                                    ))}
                                </div>
                            </div>

                            {/* Background Glow Effect on Hover */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${skillGroup.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TechStack;