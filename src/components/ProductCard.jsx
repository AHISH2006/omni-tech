import React from 'react';
import { motion } from 'framer-motion';
import '../styles/ProductCard.css';

const ProductCard = ({ image, name, dept, description, isEmpty }) => {
    return (
        <motion.div
            className="ben10-card-container"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: 'spring' }}
            whileHover={{ scale: 1.05, rotateY: 10 }}
        >
            <div className="ben10-card-frame">
                <div className="ben10-card-content">
                    <div className="ben10-image-wrapper">
                        <div className="omnitrix-overlay"></div>
                        <img src={image} alt={name} className="ben10-profile-img" />
                        <div className="holographic-ring"></div>
                    </div>
                    <div className="ben10-info">
                        <h3 className="ben10-name" style={isEmpty ? { color: '#00f3ff', textShadow: '0 0 10px #00f3ff' } : {}}>{name}</h3>
                        <p className="ben10-dept">{dept}</p>
                        {description && <p className="ben10-description">{description}</p>}
                    </div>
                    <div className="ben10-decoration-lines"></div>
                </div>
                <div className="omnitrix-dial"></div>
            </div>
        </motion.div>
    );
};

export default ProductCard;
