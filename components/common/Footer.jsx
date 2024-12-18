import React from 'react'
import { AiOutlineCopyright } from "react-icons/ai";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className='flex justify-center items-center gap-2 font-sspro py-5 md:py-10'>
            <AiOutlineCopyright />
            {currentYear} <span className='text-green'>SohanThink.</span> All rights reserved.
        </div>
    )
}

export default Footer