"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowLeft, FiGithub, FiExternalLink, FiClock, FiUser, FiCode, FiEye, FiDownload } from 'react-icons/fi';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import PageTransition from '@/components/ui/PageTransition';

const PortfolioDetails = ({ params }) => {
    const resolvedParams = React.use(params);
    const [portfolio, setPortfolio] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeTab, setActiveTab] = useState('overview');

    useEffect(() => {
        const loadPortfolio = async () => {
            try {
                const response = await fetch('/api/portfolio');
                if (!response.ok) throw new Error('Failed to load portfolio data');
                const data = await response.json();
                const foundPortfolio = data.find(p => p.slug === resolvedParams.slug);
                if (!foundPortfolio) throw new Error('Portfolio not found');
                setPortfolio(foundPortfolio);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        loadPortfolio();
    }, [resolvedParams.slug]);

    if (loading) {
        return (
            <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
                <LoadingSpinner size="lg" text="Loading portfolio..." />
            </div>
        );
    }

    if (error || !portfolio) {
        return (
            <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center"
                >
                    <h2 className="text-2xl font-sspro text-white mb-4">Portfolio Not Found</h2>
                    <p className="text-grayColor mb-6">{error || 'The requested portfolio could not be found.'}</p>
                    <Link href="/portfolio">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-green hover:bg-green/80 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 mx-auto"
                        >
                            <FiArrowLeft className="text-lg" />
                            Back to Portfolio
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        );
    }

    const tabs = [
        { id: 'overview', label: 'Overview', icon: FiEye },
        { id: 'features', label: 'Features', icon: FiCode },
        { id: 'challenges', label: 'Challenges', icon: FiCode },
        { id: 'visuals', label: 'Visuals', icon: FiEye },
        { id: 'credentials', label: 'Credentials', icon: FiDownload },
    ].filter(tab => {
        if (tab.id === 'features' && (!portfolio.details?.keyFeatures || !portfolio.details.keyFeatures.features || portfolio.details.keyFeatures.features.length === 0)) return false;
        if (tab.id === 'challenges' && (!portfolio.details?.challengesAndSolutions || portfolio.details.challengesAndSolutions.length === 0)) return false;
        if (tab.id === 'visuals' && (!portfolio.details?.visuals || portfolio.details.visuals.length === 0)) return false;
        if (tab.id === 'credentials' && (!portfolio.login || (typeof portfolio.login === 'string' && portfolio.login.trim() === '') || (typeof portfolio.login === 'object' && Object.keys(portfolio.login).length === 0))) return false;
        return true;
    });

    return (
        <PageTransition>
            <div className="min-h-screen bg-[#0a0a0a]">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative overflow-hidden"
                >
                    {/* Hero Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-green/10 via-transparent to-blue-500/10"></div>

                    {/* Back Button */}
                    <div className="relative z-10 pt-8 pb-6">
                        <div className="container mx-auto px-5 md:px-0">
                            <Link href="/portfolio">
                                <motion.button
                                    whileHover={{ scale: 1.05, x: -5 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-[#202020] hover:bg-[#303030] text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 border border-grayColor/20 hover:border-green/20"
                                >
                                    <FiArrowLeft className="text-lg" />
                                    Back to Portfolio
                                </motion.button>
                            </Link>
                        </div>
                    </div>

                    {/* Project Header */}
                    <div className="relative z-10 pb-12">
                        <div className="container mx-auto px-5 md:px-0">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                                {/* Project Info */}
                                <div className="lg:col-span-2">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 }}
                                    >
                                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-sspro text-white mb-4">
                                            {portfolio.title}
                                        </h1>
                                        <p className="text-xl text-grayColor mb-6 leading-relaxed">
                                            {portfolio.description}
                                        </p>

                                        {/* Tech Stack Pills */}
                                        <div className="flex flex-wrap gap-2 mb-8">
                                            {portfolio.tech.map((tech, index) => (
                                                <motion.span
                                                    key={tech}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: 0.2 + index * 0.1 }}
                                                    className="bg-[#202020] border border-grayColor/20 text-grayColor px-3 py-1 rounded-full text-sm font-medium hover:border-green/20 transition-colors"
                                                >
                                                    {tech}
                                                </motion.span>
                                            ))}
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex flex-wrap gap-4">
                                            {portfolio.website && (
                                                <motion.a
                                                    href={portfolio.website}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="bg-green hover:bg-green/80 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2"
                                                >
                                                    <FiExternalLink className="text-lg" />
                                                    Live Demo
                                                </motion.a>
                                            )}
                                            {portfolio.github && (
                                                <motion.a
                                                    href={portfolio.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="bg-[#202020] hover:bg-[#303030] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 border border-grayColor/20 hover:border-green/20"
                                                >
                                                    <FiGithub className="text-lg" />
                                                    View Code
                                                </motion.a>
                                            )}
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Project Image */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="relative"
                                >
                                    <div className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden border border-grayColor/20">
                                        <Image
                                            src={portfolio.image}
                                            alt={portfolio.title}
                                            fill
                                            className="object-cover"
                                            priority
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
                {/* Main Content */}
                <div className="container mx-auto px-10 md:px-0 pb-26">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        {/* Content Area */}
                        <div className="lg:col-span-3 space-y-5">
                            {/* Tab Navigation */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="flex flex-wrap gap-2 mb-18 border-b border-grayColor/20"
                            >
                                {tabs.map((tab) => {
                                    const IconComponent = tab.icon;
                                    return (
                                        <motion.button
                                            key={tab.id}
                                            onClick={() => setActiveTab(tab.id)}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className={`flex items-center gap-2 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${activeTab === tab.id
                                                ? 'bg-green text-white'
                                                : 'bg-[#202020] text-grayColor hover:text-white hover:bg-[#303030]'
                                                }`}
                                        >
                                            <IconComponent className="text-lg" />
                                            {tab.label}
                                        </motion.button>
                                    );
                                })}
                            </motion.div>

                            {/* Tab Content */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-[#202020] rounded-2xl p-6 md:p-8 border border-grayColor/10"
                                >
                                    {/* Overview Tab */}
                                    {activeTab === 'overview' && (
                                        <div className="space-y-8">
                                            {/* Project Description */}
                                            <div>
                                                <h3 className="text-2xl font-sspro text-white mb-4">Project Overview</h3>
                                                <div className="bg-[#0a0a0a] p-6 rounded-lg border border-grayColor/10">
                                                    <p className="text-grayColor leading-relaxed text-lg">
                                                        {portfolio.details?.description || portfolio.description}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Project Details */}
                                            {portfolio.details?.developmentInsights && (
                                                <div>
                                                    <h4 className="text-xl font-sspro text-white mb-4">Development Insights</h4>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                        <div className="bg-[#0a0a0a] p-4 rounded-lg border border-grayColor/10">
                                                            <h5 className="text-lg font-sspro text-white mb-2 flex items-center gap-2">
                                                                <FiClock className="text-green" />
                                                                Timeframe
                                                            </h5>
                                                            <p className="text-grayColor">{portfolio.details.developmentInsights.timeframe}</p>
                                                        </div>
                                                        <div className="bg-[#0a0a0a] p-4 rounded-lg border border-grayColor/10">
                                                            <h5 className="text-lg font-sspro text-white mb-2 flex items-center gap-2">
                                                                <FiUser className="text-green" />
                                                                What I Learned
                                                            </h5>
                                                            <p className="text-grayColor">{portfolio.details.developmentInsights.whatILearned}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Project Categories */}
                                            {portfolio.categories && portfolio.categories.length > 0 && (
                                                <div>
                                                    <h4 className="text-xl font-sspro text-white mb-4">Project Categories</h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {portfolio.categories.map((category, index) => (
                                                            <motion.span
                                                                key={index}
                                                                initial={{ opacity: 0, scale: 0.8 }}
                                                                animate={{ opacity: 1, scale: 1 }}
                                                                transition={{ delay: index * 0.1 }}
                                                                className="bg-green/10 text-green px-3 py-1 rounded-full text-sm font-medium border border-green/20"
                                                            >
                                                                {category}
                                                            </motion.span>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            {/* Tech Stack Summary */}
                                            {portfolio.tech && portfolio.tech.length > 0 && (
                                                <div>
                                                    <h4 className="text-xl font-sspro text-white mb-4">Technologies Used</h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {portfolio.tech.map((tech, index) => (
                                                            <motion.span
                                                                key={index}
                                                                initial={{ opacity: 0, scale: 0.8 }}
                                                                animate={{ opacity: 1, scale: 1 }}
                                                                transition={{ delay: index * 0.1 }}
                                                                className="bg-[#0a0a0a] border border-grayColor/20 text-grayColor px-3 py-1 rounded-full text-sm font-medium hover:border-green/20 transition-colors"
                                                            >
                                                                {tech}
                                                            </motion.span>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {/* Features Tab */}
                                    {activeTab === 'features' && portfolio.details?.keyFeatures?.features && portfolio.details.keyFeatures.features.length > 0 && (
                                        <div>
                                            <h3 className="text-2xl font-sspro text-white mb-6">Key Features</h3>
                                            <div className="space-y-4">
                                                {portfolio.details.keyFeatures.features.map((feature, index) => (
                                                    <motion.div
                                                        key={index}
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: index * 0.1 }}
                                                        className="bg-[#0a0a0a] p-4 rounded-lg border border-grayColor/10"
                                                    >
                                                        <div
                                                            className="text-grayColor"
                                                            dangerouslySetInnerHTML={{ __html: feature }}
                                                        ></div>
                                                    </motion.div>
                                                ))}
                                                {portfolio.details.keyFeatures.image && (
                                                    <motion.div
                                                        initial={{ opacity: 0, scale: 0.9 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ delay: 0.5 }}
                                                        className="mt-6 relative h-64 rounded-lg overflow-hidden border border-grayColor/10"
                                                    >
                                                        <Image
                                                            src={portfolio.details.keyFeatures.image}
                                                            alt="Key Features"
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    </motion.div>
                                                )}
                                            </div>
                                        </div>
                                    )}



                                    {/* Challenges Tab */}
                                    {activeTab === 'challenges' && portfolio.details?.challengesAndSolutions && portfolio.details.challengesAndSolutions.length > 0 && (
                                        <div>
                                            <h3 className="text-2xl font-sspro text-white mb-6">Challenges & Solutions</h3>
                                            <div className="space-y-6">
                                                {portfolio.details.challengesAndSolutions.map((item, index) => (
                                                    <motion.div
                                                        key={index}
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: index * 0.1 }}
                                                        className="bg-[#0a0a0a] p-6 rounded-lg border border-grayColor/10"
                                                    >
                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                            <div>
                                                                <h4 className="text-lg font-sspro text-white mb-3 flex items-center gap-2">
                                                                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                                                    Challenge
                                                                </h4>
                                                                <p className="text-grayColor leading-relaxed">{item.challenge}</p>
                                                            </div>
                                                            <div>
                                                                <h4 className="text-lg font-sspro text-white mb-3 flex items-center gap-2">
                                                                    <div className="w-3 h-3 bg-green rounded-full"></div>
                                                                    Solution
                                                                </h4>
                                                                <p className="text-grayColor leading-relaxed">{item.solution}</p>
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Visuals Tab */}
                                    {activeTab === 'visuals' && portfolio.details?.visuals && portfolio.details.visuals.length > 0 && (
                                        <div>
                                            <h3 className="text-2xl font-sspro text-white mb-6">Project Visuals</h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                {portfolio.details.visuals.map((visual, index) => (
                                                    <motion.div
                                                        key={index}
                                                        initial={{ opacity: 0, scale: 0.9 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        transition={{ delay: index * 0.1 }}
                                                        className="relative h-64 rounded-lg overflow-hidden border border-grayColor/10"
                                                    >
                                                        <Image
                                                            src={visual}
                                                            alt={`Visual ${index + 1}`}
                                                            fill
                                                            className="object-cover hover:scale-105 transition-transform duration-300"
                                                        />
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Credentials Tab */}
                                    {activeTab === 'credentials' && portfolio.login && (
                                        <div>
                                            <h3 className="text-2xl font-sspro text-white mb-6">Login Credentials</h3>
                                            <div className="space-y-6">
                                                {typeof portfolio.login === 'string' ? (
                                                    // Backward compatibility for string format
                                                    <div className="bg-[#0a0a0a] p-6 rounded-lg border border-grayColor/10">
                                                        <div className="flex items-center gap-3 mb-4">
                                                            <FiDownload className="text-green text-2xl" />
                                                            <h4 className="text-lg font-sspro text-white">Demo Access</h4>
                                                        </div>
                                                        <div className="bg-[#202020] p-4 rounded-lg border border-green/20">
                                                            <p className="text-grayColor mb-2">Use these credentials to access the demo:</p>
                                                            <div className="bg-green/10 p-3 rounded-lg border border-green/30">
                                                                <code className="text-green font-mono text-sm break-all">
                                                                    {portfolio.login}
                                                                </code>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    // New object format with multiple credentials
                                                    Object.entries(portfolio.login).map(([credentialType, credentialData]) => (
                                                        <motion.div
                                                            key={credentialType}
                                                            initial={{ opacity: 0, y: 20 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{ delay: 0.1 }}
                                                            className="bg-[#0a0a0a] p-6 rounded-lg border border-grayColor/10"
                                                        >
                                                            <div className="flex items-center gap-3 mb-4">
                                                                <FiDownload className="text-green text-2xl" />
                                                                <h4 className="text-lg font-sspro text-white capitalize">
                                                                    {credentialType} Access
                                                                </h4>
                                                            </div>
                                                            <div className="bg-[#202020] p-4 rounded-lg border border-green/20">
                                                                {credentialData.description && (
                                                                    <p className="text-grayColor mb-3 text-sm">
                                                                        {credentialData.description}
                                                                    </p>
                                                                )}
                                                                <div className="space-y-3">
                                                                    <div className="bg-green/10 p-3 rounded-lg border border-green/30">
                                                                        <div className="flex items-center gap-2 mb-1">
                                                                            <span className="text-green text-xs font-medium">Email:</span>
                                                                        </div>
                                                                        <code className="text-green font-mono text-sm break-all">
                                                                            {credentialData.email}
                                                                        </code>
                                                                    </div>
                                                                    <div className="bg-green/10 p-3 rounded-lg border border-green/30">
                                                                        <div className="flex items-center gap-2 mb-1">
                                                                            <span className="text-green text-xs font-medium">Password:</span>
                                                                        </div>
                                                                        <code className="text-green font-mono text-sm break-all">
                                                                            {credentialData.password}
                                                                        </code>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </motion.div>
                                                    ))
                                                )}
                                                <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/20">
                                                    <p className="text-blue-400 text-sm leading-relaxed">
                                                        These credentials provide access to the demo version of the application.
                                                        Please note that this is a demonstration environment and may have limited functionality.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Sidebar */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                            className="lg:col-span-1"
                        >
                            <div className="bg-[#202020] rounded-2xl p-6 border border-grayColor/10 sticky top-8">
                                <h3 className="text-xl font-sspro text-white mb-6">Project Details</h3>
                                <div className="space-y-6">
                                    {portfolio.client && (
                                        <SidebarItem
                                            title="Client"
                                            content={portfolio.client}
                                            icon={FiUser}
                                        />
                                    )}
                                    {portfolio.github && (
                                        <SidebarItem
                                            title="GitHub"
                                            content={portfolio.github}
                                            icon={FiGithub}
                                            isLink={true}
                                            href={portfolio.github}
                                        />
                                    )}
                                    {portfolio.website && (
                                        <SidebarItem
                                            title="Live Demo"
                                            content={portfolio.website}
                                            icon={FiExternalLink}
                                            isLink={true}
                                            href={portfolio.website}
                                        />
                                    )}
                                    {portfolio.login && (
                                        <SidebarItem
                                            title="Login Credentials"
                                            content={typeof portfolio.login === 'string' ? portfolio.login : `${Object.keys(portfolio.login).length} credential${Object.keys(portfolio.login).length > 1 ? 's' : ''} available`}
                                            icon={FiDownload}
                                        />
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </PageTransition>
    );
};

const SidebarItem = ({ title, content, icon: Icon, isLink = false, href }) => {
    const contentElement = (
        <div className="flex items-center gap-3 p-3 bg-[#0a0a0a] rounded-lg border border-grayColor/10 hover:border-green/20 transition-colors">
            <Icon className="text-green text-lg flex-shrink-0" />
            <div className="flex-1 min-w-0">
                <h4 className="text-sm text-grayColor mb-1">{title}</h4>
                <p className="font-sspro text-sm break-words">{content}</p>
            </div>
        </div>
    );

    if (isLink && href) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:scale-105 transition-transform duration-300"
            >
                {contentElement}
            </a>
        );
    }

    return contentElement;
};

export default PortfolioDetails;
