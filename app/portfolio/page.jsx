import React from 'react'
import Image from 'next/image'

import { BsArrowUpRightCircle } from "react-icons/bs";
import Link from 'next/link';

import fs from 'fs';
import path from 'path';


const Portfolio = () => {

    const filePath = path.join(process.cwd(), 'data', 'portfolioData.json');
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    const portfolios = JSON.parse(jsonData);
    // console.log(portfolios);

    return (
        <>
            {/* <div className='grid grid-cols-2 gap-4 shadow-box p-0 md:p-5'>
                <Link href="/">
                    <div className='col-span-2 md:col-span-1 shadow-box'>
                        <div><Image src={chatapp} alt='portfolio-chat application' /></div>
                        <div className='flex justify-between items-center py-4'>
                            <div className='flex flex-col gap-2'>
                                <h4 className='font-sspro text-xl md:text-2xl'>A Social media application with React.</h4>
                                <div className='flex flex-wrap gap-2'>
                                    <span className='bg-gray-900 px-3 py-2 rounded-full'>ReactJs</span>
                                    <span className='bg-gray-900 px-3 py-2 rounded-full'>NextJS</span>
                                </div>
                            </div>
                            <div>
                                <BsArrowUpRightCircle className='text-3xl </div>w-10' />
                            </div>
                        </div>
                    </div>
                </Link>
                <div className='col-span-2 md:col-span-1 shadow-box'>nice</div>
            </div> */}

            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {portfolios.map((portfolio, index) => (
                    <Link href={`/portfolio/${portfolio.slug}`} key={index}>
                        <div className='shadow-box'>
                            <div>
                                <Image src={portfolio.image} alt={portfolio.title} width={100} height={100} />
                                {/* <Image src="https://sohanthink.com/portfolioimages/portfolio-1.png" alt='portfolio-1' width={300} height={300} /> */}

                            </div>
                            <div className='flex justify-between items-center py-4'>
                                <div className='flex flex-col gap-2'>
                                    <h4 className='font-sspro text-xl md:text-2xl'>{portfolio.title}</h4>
                                    <div className='flex flex-wrap gap-2'>
                                        {portfolio.tech.map((tag, index) => (
                                            <span key={index} className='bg-gray-900 px-3 py-2 rounded-full'>{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <BsArrowUpRightCircle className='text-3xl w-10' />
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default Portfolio