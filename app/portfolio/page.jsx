import React from 'react'
import Image from 'next/image'

import { PiArrowCircleDownRightThin } from "react-icons/pi";

import Link from 'next/link';

import fs from 'fs';
import path from 'path';


const Portfolio = () => {

    let portfolios = [];
    try {
        const filePath = path.join(process.cwd(), 'data', 'portfolioData.json');
        const jsonData = fs.readFileSync(filePath, 'utf-8');
        portfolios = JSON.parse(jsonData);
    } catch (error) {
        console.error("Error loading portfolio data:", error);
        // Provide fallback portfolios data if needed
        portfolios = [{ title: "No data available", image: "/fallback-image.jpg", tech: ["N/A"], slug: "no-data" }];
    }

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            {portfolios.map((portfolio, index) => (
                <Link href={`/portfolio/${portfolio.slug}`} key={index}>
                    <div className='shadow-box p-5'>
                        <div className='p-3 shadow-box'>
                            <Image
                                className="w-full h-[200px] md:h-[350px] object-cover"
                                src={portfolio.image}
                                alt={portfolio.title}
                                width={800} // or any other number that represents the image's natural width
                                height={350} // keeping the height fixed at 500px
                            />
                        </div>
                        <div className='flex justify-between items-center py-4'>
                            <div className='flex flex-col gap-6'>
                                <h4 className='font-sspro text-xl md:text-2xl'>{portfolio.title}</h4>
                                <div className='flex flex-wrap gap-2'>
                                    {portfolio.tech.map((tag, index) => (
                                        <span key={index} className='bg-gray-900 px-2 py-1 md:px-3 md:py-2 rounded-full text-sm md:text-base'>{tag}</span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <PiArrowCircleDownRightThin className='text-6xl w-20 -rotate-90 text-grayColor/50' />
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Portfolio