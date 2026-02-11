import React, { useState, useEffect } from 'react';
import { Bot, X, XCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Chatbot from './chatbot';
import '../styles/chatbot-widget.css';

function ChatbotWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);

    // Check localStorage on mount
    useEffect(() => {
        const disabled = localStorage.getItem('omnitech-chatbot-disabled');
        if (disabled === 'true') {
            setIsDisabled(true);
            setIsOpen(false);
        }
    }, []);

    const toggleChatbot = () => {
        setIsOpen(!isOpen);
    };

    const disableChatbot = () => {
        setIsDisabled(true);
        setIsOpen(false);
        localStorage.setItem('omnitech-chatbot-disabled', 'true');
    };

    const enableChatbot = () => {
        setIsDisabled(false);
        localStorage.setItem('omnitech-chatbot-disabled', 'false');
    };

    // If chatbot is disabled, show small enable button
    if (isDisabled) {
        return (
            <motion.button
                className="chatbot-enable-btn"
                onClick={enableChatbot}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                title="Enable Chatbot"
            >
                <Bot size={20} />
            </motion.button>
        );
    }

    return (
        <>
            {/* Floating Chatbot Button */}
            <motion.button
                className="chatbot-float-btn"
                onClick={toggleChatbot}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <X size={28} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="chat"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Bot size={28} />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Notification Pulse */}
                {!isOpen && (
                    <span className="chatbot-notification-pulse"></span>
                )}
            </motion.button>

            {/* Chatbot Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="chatbot-window"
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    >
                        <Chatbot onClose={toggleChatbot} onDisable={disableChatbot} />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default ChatbotWidget;
