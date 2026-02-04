import React from 'react';
import { motion } from 'framer-motion';
import '../styles/home.css';

const AssociationHeadCard = ({ name, position, number, department = 'IT' }) => {
    const isIT = department === 'IT';
    const accentColor = isIT ? '#ff0055' : '#00f3ff';

    return (
        <motion.div
            className="tech-entry"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            whileHover={{ x: 10 }}
        >
            <div className="tech-marker" style={{ backgroundColor: accentColor }}></div>
            <div className="tech-info">
                <h3 className="tech-name" style={{ color: accentColor }}>
                    {name}
                </h3>
                <div className="tech-details">
                    <span className="tech-role">{position}</span>
                    <span className="tech-divider">//</span>
                    <span className="tech-number">{number}</span>
                </div>
            </div>
        </motion.div>
    );
};

export default AssociationHeadCard;
