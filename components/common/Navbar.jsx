"use client";
import React from "react";
import { FloatingNav } from "../ui/floating-navbar";
import { FiHome, FiMessageCircle, FiUser } from "react-icons/fi";

const Navbar = () => {
    const navItems = [
        {
            name: "Home",
            link: "/",
            icon: <FiHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "About",
            link: "/about",
            icon: <FiUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
        },
        {
            name: "Contact",
            link: "/#contact",
            icon: (
                <FiMessageCircle className="h-4 w-4 text-neutral-500 dark:text-white" />
            ),
        },
    ];

    return <FloatingNav navItems={navItems} />;
};

export default Navbar;
