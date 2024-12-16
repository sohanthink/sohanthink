import Image from 'next/image'
import React from 'react'

import Link from 'next/link';
import profile from '@/public/images/sohan2.jpg'
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import { CardDemo } from '../ui/Card';


const ProfileBar = () => {
    return (
        <div className="flex-col items-center space-y-6 shadow-box h-[80vh]">

            <div className='flex justify-center items-center mt-20'>
                <Image className='border border-1 border-gray-500/30' src={profile} alt="profile" width={200} height={200} />
            </div>

            <div className='space-y-2'>
                <h3 className='text-center font-sspro text-3xl'>Hi, I am Muhammad Sohan Mollah</h3>
                <h4 className='text-center text-green'>Full Stack Developer</h4>
            </div>

            <div className='text-center text-grayColor'>
                <p><a href="mailto:sohaneftekhar@gmail.com">sohaneftekhar@gmail.com</a></p>
                <p><a href="tel:+8801645113536">+88 01645113536</a></p>
            </div>

            <div>
                <CardDemo />
            </div>

            <div className='flex items-center justify-center'>
                <button className='bg-green text-white px-7 py-2 rounded-full flex gap-4 justify-center items-center hover:bg-[#202020] ease-in-out duration-300'>Download CV <GoArrowUpRight />
                </button>
            </div>
        </div>
    )
}

export default ProfileBar