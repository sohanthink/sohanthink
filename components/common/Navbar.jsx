"use client"

import Link from 'next/link'
import React from 'react'
import { usePathname } from "next/navigation";

import Image from 'next/image';
import logo from "@/public/images/logo_icon.png"

import whitelogo from "@/public/images/logo icon white version.png"
import { GiHamburgerMenu } from "react-icons/gi";


const ResponsiveNavbar = () => {
    const pathname = usePathname();
    return (
        <div className='absolute top-16 left-5 z-[999] md:hidden'>
            <ul className='flex-col space-y-2 bg-[#202020] p-4 rounded-lg z-[999]'>
                <li className={pathname === "/" ? "text-green" : "hover:text-green"}>
                    <Link href="/">Home</Link>
                </li>
                <li className={pathname === "/about" ? "text-green" : "hover:text-green"}>
                    <Link href="/about">About</Link>
                </li>
                {/* <li className={pathname === "/contact" ? "text-green" : "hover:text-green"}>
                    <Link href="/contact">Contact</Link>
                </li> */}
                <li className={pathname === "/portfolio" ? "text-green" : "hover:text-green"}>
                    <Link href="/portfolio">Portfolio</Link>
                </li>
            </ul>
        </div>
    )
}



const Navbar = () => {
    const pathname = usePathname();

    const [isNavVisible, setIsNavVisible] = React.useState(false);

    const nav = () => {
        setIsNavVisible(!isNavVisible);
    }

    return (
        <div className='flex justify-between items-center container px-5 md:px-0 py-4 md:py-2'>
            <div className='md:hidden'>
                <GiHamburgerMenu onClick={nav} className='text-3xl' />
            </div>
            {isNavVisible && <ResponsiveNavbar />}
            <div className='hidden md:block'>
                <ul className='flex gap-8'>
                    <li className={pathname === "/" ? "text-green" : "hover:text-green"}>
                        <Link href="/">Home</Link>
                    </li>
                    <li className={pathname === "/about" ? "text-green" : "hover:text-green"}>
                        <Link href="/about">About</Link>
                    </li>
                    {/* <li className={pathname === "/contact" ? "text-green" : "hover:text-green"}>
                        <Link href="/contact">Contact</Link>
                    </li> */}
                    <li className={pathname === "/portfolio" ? "text-green" : "hover:text-green"}>
                        <Link href="/portfolio">Portfolio</Link>
                    </li>
                </ul>
            </div>
            <div className='hover:cursor-pointer"'>
                <Link href="/" className='h-10 md:h-20 block'>
                    <Image src={whitelogo} alt='logo' className='w-full h-full' />
                </Link>
            </div>
        </div>
    )
}

export default Navbar