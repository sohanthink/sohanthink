"use client"

import Link from 'next/link'
import React from 'react'
import { usePathname } from "next/navigation";

import Image from 'next/image';
import logo from "@/public/images/logo_icon.png"
import whitelogo from "@/public/images/logo icon white version.png"

const Navbar = () => {
    const pathname = usePathname();

    return (
        <div className='flex justify-between items-center container px-5 md:px-0 py-2'>
            <div>
                <ul className='flex gap-8'>
                    <li className={pathname === "/" ? "text-green" : "hover:text-green"}>
                        <Link href="/">Home</Link>
                    </li>
                    <li className={pathname === "/about" ? "text-green" : "hover:text-green"}>
                        <Link href="/about">About</Link>
                    </li>
                    <li className={pathname === "/contact" ? "text-green" : "hover:text-green"}>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
            <div className='hover:cursor-pointer"'>
                <Link href="/">
                    <Image src={whitelogo} alt='logo' height={80} />
                </Link>
            </div>
        </div>
    )
}

export default Navbar