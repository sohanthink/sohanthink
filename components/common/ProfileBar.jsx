import Image from 'next/image'
import React from 'react'

import Link from 'next/link';
import profile from '@/public/images/dark sohan.jpg'
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";


const ProfileBar = () => {
    return (
        <div className="flex-col items-center space-y-6 bg-pink-800">
            <div className='flex justify-center items-center'><Image src={profile} alt="profile" width={200} height={200} /></div>
            <div>
                <h3 className='text-center'>Hi, I am Muhammad Sohan Mollah</h3>
                <h4 className='text-center'>Full Stack Developer</h4>
            </div>
            <div className='text-center'>
                <p><a href="mailto:sohaneftekhar@gmail.com">sohaneftekhar@gmail.com</a></p>
                <p><a href="tel:+8801645113536">+88 01645113536</a></p>
            </div>
            <div className='flex gap-3 items-center justify-center'>
                <Link href="https://www.facebook.com/sohanthink" target='_blank'><CiFacebook className='w-10 h-10 ' /></Link>
                <Link href="https://www.linkedin.com/in/sohanthink/" target='_blank'><CiLinkedin className='w-10 h-10' /></Link>
                <Link href="https://www.github.com/sohanthink" target='_blank'><FaGithub className='w-10 h-10' /></Link>
            </div>
            <div className='flex items-center justify-center'>
                <button className='bg-green text-white px-7 py-2 rounded-full flex gap-4 justify-center items-center'>Download CV <GoArrowUpRight />
                </button>
            </div>
        </div>
    )
}

export default ProfileBar