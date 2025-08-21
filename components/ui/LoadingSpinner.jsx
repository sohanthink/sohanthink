"use client";

import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner = ({ size = "md", text = "Loading..." }) => {
    const sizeClasses = {
        sm: "w-4 h-4",
        md: "w-8 h-8", 
        lg: "w-12 h-12",
        xl: "w-16 h-16"
    };

    return (
        <div className="flex flex-col items-center justify-center gap-4">
            <motion.div
                className={`${sizeClasses[size]} border-2 border-grayColor/20 border-t-green rounded-full`}
                animate={{ rotate: 360 }}
                transition={{ 
                    duration: 1, 
                    repeat: Infinity, 
                    ease: "linear" 
                }}
            />
            {text && (
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-grayColor text-sm"
                >
                    {text}
                </motion.p>
            )}
        </div>
    );
};

export default LoadingSpinner;
