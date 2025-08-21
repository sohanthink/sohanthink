"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PortfolioCard from '@/components/ui/PortfolioCard';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

const Portfolio = () => {
    const [portfolios, setPortfolios] = useState([]);
    const [filteredPortfolios, setFilteredPortfolios] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [activeFilter, setActiveFilter] = useState('all');

    const filters = [
        { id: 'all', label: 'All Projects' },
        { id: 'website', label: 'Websites' },
        { id: 'mobile', label: 'Mobile Apps' },
        { id: 'fullstack', label: 'Full Stack' },
        { id: 'frontend', label: 'Frontend' },
        { id: 'backend', label: 'Backend' },
    ];

    useEffect(() => {
        const loadPortfolios = async () => {
            try {
                setIsLoading(true);
                const response = await fetch('/api/portfolio');
                if (!response.ok) throw new Error('Failed to load portfolio data');
                const data = await response.json();
                setPortfolios(data);
                setFilteredPortfolios(data);
            } catch (err) {
                console.error('Error loading portfolio data:', err);
                setError('Failed to load portfolio data. Please try again later.');
            } finally {
                setIsLoading(false);
            }
        };
        loadPortfolios();
    }, []);

    const handleFilter = (filterId) => {
        setActiveFilter(filterId);

        if (filterId === 'all') {
            setFilteredPortfolios(portfolios);
        } else {
            const filtered = portfolios.filter(portfolio => {
                // Check if the portfolio has categories array and matches the filter
                if (portfolio.categories && portfolio.categories.some(cat => cat.toLowerCase() === filterId.toLowerCase())) {
                    return true;
                }

                // Backward compatibility: check if the portfolio category matches the filter
                if (portfolio.category && portfolio.category.toLowerCase() === filterId.toLowerCase()) {
                    return true;
                }

                // Check for specific filter types
                switch (filterId.toLowerCase()) {
                    case 'frontend':
                        return portfolio.tech && portfolio.tech.some(tech =>
                            ['react', 'reactjs', 'nextjs', 'vue', 'angular', 'javascript', 'typescript', 'html', 'css', 'tailwind'].includes(tech.toLowerCase())
                        );
                    case 'backend':
                        return portfolio.tech && portfolio.tech.some(tech =>
                            ['nodejs', 'express', 'mongodb', 'mysql', 'postgresql', 'firebase', 'sequelize'].includes(tech.toLowerCase())
                        );
                    case 'fullstack':
                        return portfolio.tech && (
                            portfolio.tech.some(tech => ['react', 'reactjs', 'nextjs', 'vue', 'angular'].includes(tech.toLowerCase())) &&
                            portfolio.tech.some(tech => ['nodejs', 'express', 'mongodb', 'mysql', 'firebase'].includes(tech.toLowerCase()))
                        );
                    case 'mobile':
                        return portfolio.tech && portfolio.tech.some(tech =>
                            ['react native', 'flutter', 'ionic', 'mobile'].includes(tech.toLowerCase())
                        );
                    case 'social':
                        return portfolio.title && portfolio.title.toLowerCase().includes('social') ||
                            portfolio.details?.description && portfolio.details.description.toLowerCase().includes('social');
                    case 'ecommerce':
                        return portfolio.title && portfolio.title.toLowerCase().includes('ecommerce') ||
                            portfolio.title && portfolio.title.toLowerCase().includes('shop') ||
                            portfolio.details?.description && portfolio.details.description.toLowerCase().includes('ecommerce');
                    default:
                        // Check if any tech stack contains the filter keyword
                        return portfolio.tech && portfolio.tech.some(tech =>
                            tech.toLowerCase().includes(filterId.toLowerCase())
                        );
                }
            });
            setFilteredPortfolios(filtered);
        }
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
                <LoadingSpinner size="lg" text="Loading projects..." />
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
                <div className="text-center">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="text-red-500 text-6xl mb-4"
                    >
                        ⚠️
                    </motion.div>
                    <h2 className="text-2xl md:text-3xl font-sspro text-white mb-2">Oops!</h2>
                    <p className="text-grayColor mb-4">{error}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="bg-green hover:bg-green/80 text-white px-6 py-2 rounded-lg transition-colors"
                    >
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0a0a0a]">
            <div className="container mx-auto px-5 md:px-0 py-8 md:py-16">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-sspro text-white mb-4">
                        My Portfolio
                    </h1>
                    <p className="text-lg text-grayColor max-w-2xl mx-auto leading-relaxed">
                        Explore my latest projects and see how I bring ideas to life with modern web technologies.
                    </p>
                </motion.div>

                {/* Filter Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {filters.map((filter) => (
                        <motion.button
                            key={filter.id}
                            onClick={() => handleFilter(filter.id)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeFilter === filter.id
                                ? 'bg-green text-white shadow-lg shadow-green/25'
                                : 'bg-[#202020] text-grayColor hover:text-white hover:bg-grayColor/20'
                                }`}
                        >
                            {filter.label}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Results Count */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-center mb-8"
                >
                    <p className="text-grayColor">
                        Showing {filteredPortfolios.length} of {portfolios.length} projects
                    </p>
                </motion.div>

                {/* Portfolio Grid */}
                <AnimatePresence mode="wait">
                    {filteredPortfolios.length > 0 ? (
                        <motion.div
                            key={activeFilter}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                        >
                            {filteredPortfolios.map((portfolio, index) => (
                                <PortfolioCard
                                    key={portfolio.slug}
                                    portfolio={portfolio}
                                    index={index}
                                />
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center py-16"
                        >
                            <div className="text-6xl mb-4">🔍</div>
                            <h3 className="text-xl md:text-2xl font-sspro text-white mb-2">
                                No projects found
                            </h3>
                            <p className="text-lg text-grayColor mb-6 leading-relaxed">
                                Try selecting a different filter or check back later for new projects.
                            </p>
                            <button
                                onClick={() => handleFilter('all')}
                                className="bg-green hover:bg-green/80 text-white px-6 py-3 rounded-lg transition-colors"
                            >
                                View All Projects
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Portfolio;