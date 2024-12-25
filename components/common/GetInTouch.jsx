import React from 'react'

import { PiArrowCircleDownThin } from "react-icons/pi";
import { IoIosMailOpen } from "react-icons/io";
import Link from 'next/link';


const GetInTouch = () => {
    return (
        <Link href="mailto:sohaneftekhar@gmail.com" className="col-span-2 md:col-span-4">
            <div className="p-6 flex justify-between items-center shadow-box">
                <div>
                    <PiArrowCircleDownThin className="text-3xl text-grayColor" />
                    <h6 className="text-grayColor font-sspro pt-2 md:pt-4 text-sm md:text-base">
                        Get In Touch
                    </h6>
                </div>
                <div>
                    <IoIosMailOpen className="text-green text-4xl" />
                </div>
            </div>
        </Link>
    )
}

export default GetInTouch