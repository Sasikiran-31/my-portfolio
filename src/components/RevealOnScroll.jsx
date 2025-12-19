import React from 'react';
import { motion } from 'framer-motion';

const RevealOnScroll = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 75 }} // Start invisible and 75px down
            whileInView={{ opacity: 1, y: 0 }} // Animate to fully visible and original position
            viewport={{ once: true }} // Only animate once (doesn't hide again when scrolling up)
            transition={{ duration: 0.5, delay: 0.25 }} // Smooth 0.5s animation
        >
            {children}
        </motion.div>
    );
};

export default RevealOnScroll;