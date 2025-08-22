"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const LoadingScreen = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a0a]"
            >
                <div className="text-center">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="w-16 h-16 mx-auto mb-4"
                    >
                        <div className="w-full h-full border-4 border-green/20 border-t-green rounded-full animate-spin"></div>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-2xl font-sspro text-white mb-2"
                    >
                        Think With Sohan
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="text-grayColor"
                    >
                        Loading amazing experiences...
                    </motion.p>
                </div>
            </motion.div>
        );
    }

    return children;
};

export default LoadingScreen;
