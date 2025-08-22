"use client";

import React from "react";
import { motion } from "framer-motion";
import PageTransition from "@/components/ui/PageTransition";
import {
  FiArrowDown,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiExternalLink,
  FiDownload,
  FiFacebook,
  FiTwitter,
} from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/common/ContactForm";
import siteData from "@/data/siteData.json";

const Home = () => {
  const scrollToContact = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  // Icon mapping for social media
  const iconMap = {
    FiGithub: FiGithub,
    FiLinkedin: FiLinkedin,
    FiFacebook: FiFacebook,
    FiTwitter: FiTwitter,
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-[#0a0a0a]">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-br from-green/20 via-transparent to-transparent"></div>
          </div>

          <div className="container mx-auto px-5 md:px-0 relative z-10">
            <div className="text-center">
              {/* Profile Image */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-8"
              >
                <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-green to-blue-500 rounded-full blur-xl opacity-30"></div>
                  <Image
                    src={siteData.profile.image}
                    alt={siteData.profile.name}
                    width={160}
                    height={160}
                    className="relative rounded-full border-4 border-green/20 shadow-2xl"
                    priority
                  />
                </div>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl md:text-5xl lg:text-6xl font-sspro text-white mb-6"
              >
                Hi, I'm <span className="text-green">Sohan</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-lg md:text-xl text-grayColor mb-8 max-w-3xl mx-auto leading-relaxed"
              >
                {siteData.profile.description}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              >
                <Link href="/portfolio">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-green hover:bg-green/80 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 shadow-lg shadow-green/25"
                  >
                    View My Work
                    <FiExternalLink className="text-lg" />
                  </motion.button>
                </Link>
                <motion.button
                  onClick={scrollToContact}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-grayColor/30 hover:border-green text-grayColor hover:text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 flex items-center gap-2"
                >
                  Get In Touch
                  <FiMail className="text-lg" />
                </motion.button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex justify-center gap-6 mb-8"
              >
                {siteData.socialMedia.map((social, index) => {
                  const IconComponent = iconMap[social.icon];
                  return (
                    <motion.a
                      key={social.id}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className={`text-2xl text-grayColor transition-colors duration-300 ${social.color}`}
                      aria-label={social.name}
                    >
                      <IconComponent />
                    </motion.a>
                  );
                })}
              </motion.div>

              {/* Scroll Indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute -bottom-12 left-1/2 transform -translate-x-1/2"
              >
                <motion.button
                  onClick={scrollToContact}
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-grayColor hover:text-white transition-colors"
                >
                  <FiArrowDown className="text-2xl" />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 md:py-24 bg-[#0a0a0a]">
          <div className="container mx-auto px-5 md:px-0">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-sspro text-white mb-8">
                About Me
              </h2>
              <p className="text-lg text-grayColor leading-relaxed mb-8">
                I'm a passionate Full Stack Developer with expertise in modern
                web technologies. I love building applications that solve
                real-world problems and provide exceptional user experiences. My
                journey in web development started with curiosity and has
                evolved into a deep passion for creating innovative solutions.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                {siteData.skills.map((skill, index) => (
                  <motion.div
                    key={skill.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="bg-[#202020] p-6 rounded-lg border border-grayColor/10 hover:border-green/20 transition-colors"
                  >
                    <h3 className="text-xl font-sspro text-white mb-3">
                      {skill.title}
                    </h3>
                    <p className="text-grayColor">{skill.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24 bg-[#0a0a0a]">
          <div className="container mx-auto px-5 md:px-0">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-sspro text-white mb-4">
                Let's Work Together
              </h2>
              <p className="text-lg text-grayColor max-w-2xl mx-auto leading-relaxed">
                Ready to start your next project? I'm here to help bring your
                ideas to life.
              </p>
            </motion.div>
            <ContactForm />
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Home;
