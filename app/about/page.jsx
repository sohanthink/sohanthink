import Image from 'next/image'
import React from 'react'
import picture from "@/public/images/profile33.jpeg"
import GetInTouch from '@/components/common/GetInTouch';
import Process from '@/components/Process';

const technologies = [
    "NODEJS", "EXPRESS", "MYSQL", "MONGODB", "REACT", "NEXTJS", "REDUX",
    "TAILWIND CSS", "SHADCN", "MUI", "ACERTINITYUI", "BOOTSTRAP",
    "REACT NATIVE", "ANDROID", "IOS", "firebase", "vercel"
];

const About = () => {
    return (
        <div className='grid grid-cols-4 gap-4'>
            <div className='col-span-4 grid grid-cols-4 gap-12 shadow-box p-5'>
                <div className='col-span-4 md:col-span-2'>
                    <Image src={picture} className='rounded-3xl' alt='about image' />
                </div>
                <div className='col-span-4 md:col-span-2 space-y-3'>
                    <h2>Hello, About Me!</h2>
                    <h4 className='font-sspro text-3xl md:text-5xl'>A Passionate Software Engineer.</h4>
                    <p className='text-grayColor'>A dynamic and innovative software developer with a robust foundation in technology. Sohan has earned a Bachelor's of Science (BSc) in the field of technology, refining skills that span across various facets of programming and software development. With an ardent passion for coding and crafting cutting-edge software solutions, Sohan is dedicated to driving technological advancements and delivering top-tier applications.</p>
                    <p className='text-grayColor'>Sohan envisions harnessing technology to create impactful software that addresses real-world challenges. By merging technical expertise with creative thinking, Sohan aims to make significant contributions to the tech community and foster positive change through innovative software solutions.</p>
                    <p className='text-grayColor'>To explore more about Sohan's projects and professional journey, connect on LinkedIn or visit GitHub for a portfolio of work.</p>
                </div>
            </div>
            <div className='col-span-4 md:col-span-2 shadow-box'>
                <div className='divide-y divide-grayColor/30 p-5 md:p-9 space-y-2'>
                    <h1 className='font-sspro text-3xl pb-5'>Education</h1>
                    <div className='flex gap-14 items-center py-2'>
                        <h4 className='w-1/2 font-sspro text-xl md:text-2xl'>Daffodil International University</h4>
                        <h4 className='text-grayColor text-sm md:text-base'>Bsc (MCT) <br />2023</h4>
                    </div>
                    <div className='flex gap-14 items-center py-2'>
                        <h4 className='w-1/2 font-sspro text-xl md:text-2xl'>Creative It Institute </h4>
                        <h4 className='text-grayColor text-sm md:text-base'>MERN Stack  <br />Development - 2020</h4>
                    </div>
                </div>
            </div>
            <div className='col-span-4 md:col-span-2 shadow-box p-5 md:p-9'>
                <h1 className='font-sspro text-3xl pb-5'>Technology</h1>
                <div className='flex flex-wrap gap-2'>
                    {
                        technologies.map((tech, index) => (
                            <span key={index} className='bg-[#202020] px-3 py-1 text-sm md:text-base md:px-3 md:py-2 rounded-full mr-1 md:mr-2 hover:bg-green transition-all duration-300 ease-in-out capitalize'>{tech.toLowerCase()}</span>
                        ))
                    }
                </div>
            </div>

            <div className='col-span-4 shadow-box'><Process /></div>
            {/* <div className='col-span-2 md:col-span-1'><GetInTouch /></div> */}
            {/* <div className='col-span-2 md:col-span-3'>nice</div> */}
        </div>
    )
}

export default About