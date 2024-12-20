
import React from 'react'
import fs from 'fs';
import path from 'path';
import Image from 'next/image';

const PortfolioDetails = async ({ params }) => {
    const slug = (await params).slug
    let portfolio = null;

    try {
        // Read portfolio data from the JSON file
        const filePath = path.join(process.cwd(), 'data', 'portfolioData.json');
        const jsonData = await fs.promises.readFile(filePath, 'utf-8');
        const portfolios = JSON.parse(jsonData);

        // Find the portfolio based on the slug
        portfolio = portfolios.find((p) => p.slug === slug);
    } catch (error) {
        console.error("Error loading portfolio data:", error);
    }

    if (!portfolio) {
        return <div>Portfolio not found.</div>;
    }
    return (
        <div className='grid grid-cols-10 gap-4 shadow-box p-4'>
            <div className='col-span-10 h-[300px]'>
                <div className='w-100 h-[300px] p-4'>
                    <Image src="https://sohanthink.com/portfolioimages/portfolio-1.png" objectFit="cover" alt='portfolio Image' fill />
                </div>
            </div>
            <div className='col-span-10 md:col-span-7 shadow-box'>
                nice
            </div>
            <div className='col-span-10 md:col-span-3 shadow-box'>
                very nice
            </div>
        </div>
    );
}

export default PortfolioDetails;
