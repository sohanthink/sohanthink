"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiSmartphone, FiGlobe, FiTrendingUp, FiUsers } from 'react-icons/fi';
import Image from 'next/image';
import siteData from '@/data/siteData.json';
import PageTransition from '@/components/ui/PageTransition';

const About = () => {

    // Icon mapping for services
    const iconMap = {
        FiGlobe: FiGlobe,
        FiSmartphone: FiSmartphone,
        FiDatabase: FiDatabase,
        FiCode: FiCode,
        FiTrendingUp: FiTrendingUp,
        FiUsers: FiUsers,
    };

    return (
        <PageTransition>
            <div className="min-h-screen bg-[#0a0a0a]">
                <div className="container mx-auto px-5 md:px-0 py-8 md:py-16">
                    {/* Hero Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-sspro text-white mb-6">
                            About Me
                        </h1>
                        <p className="text-lg text-grayColor max-w-3xl mx-auto leading-relaxed">
                            Passionate Full Stack Developer dedicated to creating innovative web solutions
                            that make a difference in people's lives.
                        </p>
                    </motion.div>

                    {/* Profile Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
                    >
                        <div className="order-2 lg:order-1">
                            <h2 className="text-3xl md:text-4xl font-sspro text-white mb-6">
                                My Journey
                            </h2>
                            <div className="space-y-4 text-grayColor leading-relaxed">
                                <p>
                                    I started my journey in web development with a simple curiosity about how websites work.
                                    What began as a hobby quickly evolved into a passion for creating digital experiences
                                    that solve real-world problems.
                                </p>
                                <p>
                                    With expertise in modern web technologies like React, Next.js, Node.js, and MongoDB,
                                    I specialize in building scalable, performant applications that deliver exceptional user experiences.
                                </p>
                                <p>
                                    When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
                                    or sharing knowledge with the developer community.
                                </p>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2 flex justify-center">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="relative"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-green to-blue-500 rounded-2xl blur-xl opacity-30"></div>
                                <Image
                                    src={siteData.profile.image}
                                    alt={siteData.profile.name}
                                    width={400}
                                    height={400}
                                    className="relative rounded-2xl border-4 border-green/20 shadow-2xl"
                                />
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Skills Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="mb-20"
                    >
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-sspro text-white mb-6">
                                Technical Skills
                            </h2>
                            <p className="text-lg text-grayColor max-w-2xl mx-auto leading-relaxed">
                                Mastered technologies that power modern web applications
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {siteData.skills.map((skill, index) => {
                                // Define icons for each skill category
                                const skillIcons = {
                                    'Frontend': '🎨',
                                    'Backend': '⚙️',
                                    'Tools': '🛠️'
                                };

                                // Define gradient colors for each category
                                const skillGradients = {
                                    'Frontend': 'from-blue-500/20 to-purple-500/20',
                                    'Backend': 'from-green-500/20 to-emerald-500/20',
                                    'Tools': 'from-orange-500/20 to-red-500/20'
                                };

                                return (
                                    <motion.div
                                        key={skill.title}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.6 + index * 0.1 }}
                                        whileHover={{ y: -8, scale: 1.02 }}
                                        className="group relative bg-gradient-to-br from-[#202020] to-[#1a1a1a] p-6 rounded-2xl border border-grayColor/10 hover:border-green/30 transition-all duration-500 shadow-lg hover:shadow-xl hover:shadow-green/10 overflow-hidden"
                                    >
                                        {/* Animated background gradient */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${skillGradients[skill.title]} opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl`}></div>

                                        {/* Floating particles effect */}
                                        <div className="absolute inset-0 overflow-hidden rounded-2xl">
                                            <div className="absolute top-3 right-3 w-1.5 h-1.5 bg-green/30 rounded-full animate-ping"></div>
                                            <div className="absolute bottom-4 left-4 w-1 h-1 bg-blue-400/40 rounded-full animate-pulse"></div>
                                        </div>

                                        {/* Compact header */}
                                        <div className="relative z-10">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="text-2xl">{skillIcons[skill.title]}</div>
                                                <div>
                                                    <h3 className="text-lg font-sspro text-white font-bold">
                                                        {skill.title}
                                                    </h3>
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-1.5 h-1.5 bg-green rounded-full animate-pulse"></div>
                                                        <span className="text-green text-xs font-medium">
                                                            {skill.title === 'Frontend' ? 'Advanced' :
                                                                skill.title === 'Backend' ? 'Proficient' : 'Experienced'}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Compact skills grid */}
                                            <div className="grid grid-cols-2 gap-2">
                                                {skill.desc.split(', ').map((tech, techIndex) => (
                                                    <motion.div
                                                        key={techIndex}
                                                        initial={{ opacity: 0, scale: 0.9 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ delay: 0.8 + index * 0.1 + techIndex * 0.05 }}
                                                        className="flex items-center gap-2 p-2 bg-[#0a0a0a]/50 rounded-lg border border-grayColor/5 hover:border-green/20 transition-all duration-300 group-hover:bg-[#0a0a0a]/70"
                                                    >
                                                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-green to-blue-400 rounded-full flex-shrink-0"></div>
                                                        <span className="text-white text-xs font-medium truncate">{tech}</span>
                                                    </motion.div>
                                                ))}
                                            </div>

                                            {/* Compact skill level */}
                                            <div className="mt-4 pt-3 border-t border-grayColor/10">
                                                <div className="flex items-center justify-between">
                                                    <span className="text-grayColor text-xs">Expertise</span>
                                                    <div className="flex gap-1">
                                                        {[...Array(4)].map((_, i) => (
                                                            <div
                                                                key={i}
                                                                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i < 3 ? 'bg-green' : 'bg-grayColor/20'
                                                                    }`}
                                                            ></div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Skills summary */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2 }}
                            className="mt-12 text-center"
                        >
                            <div className="bg-gradient-to-r from-green/10 via-transparent to-blue-500/10 p-6 rounded-2xl border border-green/20">
                                <p className="text-grayColor text-lg">
                                    Now my focus is to work on DSA and Competitive Programming. ALready started from <b>C/C++ then Python.</b>
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Services Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="mb-20"
                    >
                        <h2 className="text-3xl md:text-4xl font-sspro text-white text-center mb-12">
                            What I Do
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {siteData.services.map((service, index) => {
                                const IconComponent = iconMap[service.icon];
                                return (
                                    <motion.div
                                        key={service.title}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.8 + index * 0.1 }}
                                        whileHover={{ y: -5 }}
                                        className="bg-[#202020] p-6 rounded-lg border border-grayColor/10 hover:border-green/20 transition-all duration-300"
                                    >
                                        <div className="text-green text-3xl mb-4">
                                            <IconComponent />
                                        </div>
                                        <h3 className="text-xl font-sspro text-white mb-3">
                                            {service.title}
                                        </h3>
                                        <p className="text-grayColor leading-relaxed">
                                            {service.description}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>

                    {/* Experience Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8 }}
                        className="mb-20"
                    >
                        <h2 className="text-3xl md:text-4xl font-sspro text-white text-center mb-12">
                            Professional Experience
                        </h2>
                        <div className="space-y-8">
                            {/* Current Job */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1 }}
                                className="bg-[#202020] p-8 rounded-lg border border-green/20 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 bg-green text-black px-3 py-1 text-sm font-medium rounded-bl-lg">
                                    Current
                                </div>
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-sspro text-white mb-2">
                                            Full Stack Developer
                                        </h3>
                                        <p className="text-green font-medium">Bohobiom Inc. Limited</p>
                                    </div>
                                    <div className="text-grayColor text-sm mt-2 md:mt-0">
                                        <p>Present</p>
                                    </div>
                                </div>
                                <div className='space-y-3'>
                                    <p className="text-grayColor leading-relaxed">
                                        Leading development of new websites and mobile applications at Bhobium, while managing our server infrastructures <span className="text-green font-semibold">(Cpanel, Vps).</span> My day-to-day involves bringing creative solutions to life, squashing bugs, rolling out updates, and occasionally designing eye-catching UI for our clients.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="bg-green/10 text-green px-3 py-1 rounded-full text-sm">React/Next.js</span>
                                        <span className="bg-green/10 text-green px-3 py-1 rounded-full text-sm">Node.js/Express</span>
                                        <span className="bg-green/10 text-green px-3 py-1 rounded-full text-sm">Cpanel, Vps, Emails</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Freelance Experience */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.1 }}
                                className="bg-[#202020] p-8 rounded-lg border border-grayColor/10"
                            >
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-sspro text-white mb-2">
                                            Freelance Developer
                                        </h3>
                                        <p className="text-green font-medium">Fiverr & Upwork</p>
                                    </div>
                                    <div className="text-grayColor text-sm mt-2 md:mt-0">
                                        <p>2021 - Present</p>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <p className="text-grayColor leading-relaxed">
                                        Successfully completed <span className="text-green font-semibold">150+ projects</span> across various platforms,
                                        specializing in web development, React applications, and full-stack solutions. Worked with several fixed clients
                                        to create their complete platforms and mobile applications from the ground up.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        <span className="bg-green/10 text-green px-3 py-1 rounded-full text-sm">Web Development</span>
                                        <span className="bg-green/10 text-green px-3 py-1 rounded-full text-sm">React/Next.js</span>
                                        <span className="bg-green/10 text-green px-3 py-1 rounded-full text-sm">Node.js/Express</span>
                                        <span className="bg-green/10 text-green px-3 py-1 rounded-full text-sm">Full Stack</span>
                                        <span className="bg-green/10 text-green px-3 py-1 rounded-full text-sm">Client Projects</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Values Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 }}
                        className="text-center"
                    >
                        <h2 className="text-3xl md:text-4xl font-sspro text-white mb-12">
                            My Values
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {siteData.values.map((value, index) => (
                                <motion.div
                                    key={value.title}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1.4 + index * 0.2 }}
                                    className="bg-[#202020] p-8 rounded-lg border border-grayColor/10"
                                >
                                    <h3 className="text-xl md:text-2xl font-sspro text-white mb-4">
                                        {value.title}
                                    </h3>
                                    <p className="text-grayColor leading-relaxed">
                                        {value.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </PageTransition>
    );
};

export default About;