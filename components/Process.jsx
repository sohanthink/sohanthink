import React from 'react'

const planingTools = [
    'Figma', 'Adobe XD', 'Sketch', 'Invision'
]

const FrontendTools = [
    'React', 'NextJS', 'Redux', 'Tailwind CSS', 'Material UI', 'Bootstrap'
]

const BackendTools = [
    'NodeJS', 'Express', 'MongoDB', 'MySQL', 'Firebase'
]

const ProcessCard = ({ step, title, description }) => {
    return (
        <div className='border border-grayColor/30 p-3 flex flex-col items-start justify-center gap-2 col-span-3 md:col-span-1'>
            <h4 className='border border-grayColor/30 rounded-full h-10 w-10 flex justify-center items-center'>{step}</h4>
            <h3 className='text-xl font-sspro'>{title}</h3>
            <p className='text-grayColor'>{description}</p>
            <div>
                {
                    step === '1' ? (
                        <div className='flex flex-wrap gap-2'>
                            {
                                planingTools.map((tool, index) => (
                                    <span key={index} className='bg-green px-2 py-1 rounded-full mr-1 text-sm hover:bg-green transition-all duration-300 ease-in-out capitalize'>{tool.toLowerCase()}</span>
                                ))
                            }
                        </div>
                    ) : step === '2' ? (
                        <div className='flex flex-wrap gap-2'>
                            {
                                FrontendTools.map((tool, index) => (
                                    <span key={index} className='bg-green px-2 py-1 rounded-full mr-1 text-sm hover:bg-green transition-all duration-300 ease-in-out capitalize'>{tool.toLowerCase()}</span>
                                ))
                            }
                        </div>
                    ) : (
                        <div className='flex flex-wrap gap-2'>
                            {
                                BackendTools.map((tool, index) => (
                                    <span key={index} className='bg-green px-2 py-1 rounded-full mr-1 text-sm hover:bg-green transition-all duration-300 ease-in-out capitalize'>{tool.toLowerCase()}</span>
                                ))
                            }
                        </div>
                    )
                }
            </div>
        </div>
    )
}

const Process = () => {
    return (
        <div className='grid grid-cols-3 gap-6 p-5 md:p-9'>
            <div className='col-span-3'><h2 className='font-sspro text-3xl'>Process I follow</h2></div>
            <ProcessCard step='1' title='Requirement Gathering' description='I will gather all the requirements from you and will make sure I understand your needs.' />
            <ProcessCard step='2' title='Design' description='I will create a design based on the requirements and will send you for approval.' />
            <ProcessCard step='3' title='Development' description='I will start developing the project after the design is approved.' />
        </div>
    )
}

export default Process