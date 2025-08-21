"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiUser, FiMessageSquare, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi';
import LoadingSpinner from '@/components/ui/LoadingSpinner';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.length < 10) {
            newErrors.message = 'Message must be at least 10 characters long';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setSubmitStatus('error');
                console.error('Form submission error:', result.error);
            }
        } catch (error) {
            setSubmitStatus('error');
            console.error('Network error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const inputFields = [
        {
            name: 'name',
            label: 'Your Name',
            type: 'text',
            icon: FiUser,
            placeholder: 'Enter your full name'
        },
        {
            name: 'email',
            label: 'Email Address',
            type: 'email',
            icon: FiMail,
            placeholder: 'Enter your email address'
        },
        {
            name: 'subject',
            label: 'Subject',
            type: 'text',
            icon: FiMessageSquare,
            placeholder: 'What is this about?'
        }
    ];

    return (
        <div className="max-w-2xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-[#202020] rounded-lg p-6 md:p-8 shadow-box"
            >
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-sspro text-white mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-lg text-grayColor leading-relaxed">
                        Have a project in mind? Let's discuss how I can help bring your ideas to life.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Input Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {inputFields.slice(0, 2).map((field) => (
                            <motion.div
                                key={field.name}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: field.name === 'name' ? 0.1 : 0.2 }}
                                className="relative"
                            >
                                <label className="block text-sm font-medium text-grayColor mb-2">
                                    {field.label}
                                </label>
                                <div className="relative">
                                    <field.icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-grayColor text-lg" />
                                    <input
                                        type={field.type}
                                        name={field.name}
                                        value={formData[field.name]}
                                        onChange={handleChange}
                                        placeholder={field.placeholder}
                                        className={`w-full pl-10 pr-4 py-3 bg-[#0a0a0a] border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 ${errors[field.name]
                                            ? 'border-red-500 focus:ring-red-500/20'
                                            : 'border-grayColor/30 focus:border-green focus:ring-green/20'
                                            }`}
                                    />
                                </div>
                                <AnimatePresence>
                                    {errors[field.name] && (
                                        <motion.p
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="text-red-500 text-sm mt-1 flex items-center gap-1"
                                        >
                                            <FiAlertCircle className="text-sm" />
                                            {errors[field.name]}
                                        </motion.p>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>

                    {/* Subject Field */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="relative"
                    >
                        <label className="block text-sm font-medium text-grayColor mb-2">
                            Subject
                        </label>
                        <div className="relative">
                            <FiMessageSquare className="absolute left-3 top-1/2 transform -translate-y-1/2 text-grayColor text-lg" />
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="What is this about?"
                                className={`w-full pl-10 pr-4 py-3 bg-[#0a0a0a] border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 ${errors.subject
                                    ? 'border-red-500 focus:ring-red-500/20'
                                    : 'border-grayColor/30 focus:border-green focus:ring-green/20'
                                    }`}
                            />
                        </div>
                        <AnimatePresence>
                            {errors.subject && (
                                <motion.p
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="text-red-500 text-sm mt-1 flex items-center gap-1"
                                >
                                    <FiAlertCircle className="text-sm" />
                                    {errors.subject}
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    {/* Message Field */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="relative"
                    >
                        <label className="block text-sm font-medium text-grayColor mb-2">
                            Message
                        </label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tell me about your project..."
                            rows={6}
                            className={`w-full px-4 py-3 bg-[#0a0a0a] border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 resize-none ${errors.message
                                ? 'border-red-500 focus:ring-red-500/20'
                                : 'border-grayColor/30 focus:border-green focus:ring-green/20'
                                }`}
                        />
                        <AnimatePresence>
                            {errors.message && (
                                <motion.p
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="text-red-500 text-sm mt-1 flex items-center gap-1"
                                >
                                    <FiAlertCircle className="text-sm" />
                                    {errors.message}
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    {/* Submit Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="text-center"
                    >
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`inline-flex items-center gap-3 px-8 py-4 rounded-lg font-medium transition-all duration-300 ${isSubmitting
                                ? 'bg-grayColor/50 text-grayColor cursor-not-allowed'
                                : 'bg-green hover:bg-green/80 text-white hover:shadow-lg hover:shadow-green/25'
                                }`}
                        >
                            {isSubmitting ? (
                                <>
                                    <LoadingSpinner size="sm" />
                                    Sending Message...
                                </>
                            ) : (
                                <>
                                    <FiSend className="text-lg" />
                                    Send Message
                                </>
                            )}
                        </button>
                    </motion.div>
                </form>

                {/* Status Messages */}
                <AnimatePresence>
                    {submitStatus && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className={`mt-6 p-4 rounded-lg flex items-center gap-3 ${submitStatus === 'success'
                                ? 'bg-green/10 border border-green/20 text-green'
                                : 'bg-red-500/10 border border-red-500/20 text-red-500'
                                }`}
                        >
                            {submitStatus === 'success' ? (
                                <>
                                    <FiCheck className="text-xl" />
                                    <div>
                                        <p className="font-medium">Message sent successfully!</p>
                                        <p className="text-sm opacity-80">I'll get back to you soon.</p>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <FiAlertCircle className="text-xl" />
                                    <div>
                                        <p className="font-medium">Failed to send message</p>
                                        <p className="text-sm opacity-80">
                                            Please try again or email me directly at hello@sohanthink.com
                                        </p>
                                    </div>
                                </>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    );
};

export default ContactForm;
