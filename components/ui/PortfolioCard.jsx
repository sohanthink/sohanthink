"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PiArrowCircleDownRightThin } from "react-icons/pi";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const PortfolioCard = ({ portfolio, index }) => {
    const { slug, title, tech, image, github, website } = portfolio;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut"
            }}
            whileHover={{ y: -5 }}
            className="group"
        >
            <Link href={`/portfolio/${slug}`}>
                <div className="shadow-box p-3 md:p-5 hover:shadow-lg transition-all duration-300 bg-[#202020] rounded-lg overflow-hidden">
                    {/* Image Container */}
                    <div className="relative overflow-hidden rounded-lg">
                        <div className="p-2 md:p-3 shadow-box">
                            <Image
                                className="w-full h-[200px] md:h-[350px] object-cover group-hover:scale-105 transition-transform duration-500"
                                src={image}
                                alt={title}
                                width={800}
                                height={350}
                            />
                        </div>

                        {/* Overlay with links */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                            {website && (
                                <motion.a
                                    href={website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="p-3 bg-green/90 hover:bg-green text-white rounded-full transition-colors"
                                    aria-label="Visit live website"
                                >
                                    <FiExternalLink className="text-xl" />
                                </motion.a>
                            )}
                            {github && (
                                <motion.a
                                    href={github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="p-3 bg-grayColor/90 hover:bg-grayColor text-white rounded-full transition-colors"
                                    aria-label="View source code"
                                >
                                    <FiGithub className="text-xl" />
                                </motion.a>
                            )}
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex justify-between items-start py-4">
                        <div className="flex-1">
                            <h4 className="font-sspro text-xl mb-4 group-hover:text-green transition-colors duration-300">
                                {title}
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {tech.map((tag, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.05 }}
                                        className="bg-[#202020] px-3 py-1 text-sm md:text-base md:px-3 md:py-2 rounded-full hover:bg-green hover:text-white transition-all duration-300 ease-in-out capitalize"
                                    >
                                        {tag.toLowerCase()}
                                    </motion.span>
                                ))}
                            </div>
                        </div>
                        <div className="hidden md:block ml-4">
                            <motion.div
                                initial={{ rotate: -90 }}
                                animate={{ rotate: -90 }}
                                whileHover={{ rotate: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <PiArrowCircleDownRightThin className="text-3xl md:text-6xl w-10 md:w-20 text-grayColor/50 group-hover:text-green transition-colors duration-300" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};

export default PortfolioCard;
