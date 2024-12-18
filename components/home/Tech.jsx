import React from 'react'

import { DiNodejs } from "react-icons/di";
import { SiExpress, SiMongodb, SiNextdotjs, SiMysql } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { BiLogoTailwindCss } from "react-icons/bi";
import { TbBrandReactNative } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { FaDocker } from "react-icons/fa";


const Tech = () => {
    return (
        <>
            <h2 className="p-2 font-sspro text-lg flex justify-center pb-3 md:pb-6">
                <span className="text-green">Tech,</span> I am working with !!
            </h2>
            <div className="flex gap-1 justify-between">
                <div className="p-2 border-[.1px] border-green/50 rounded-lg text-sm">
                    <DiNodejs className="text-xl lg:text-3xl text-green" />
                </div>
                <div className="p-2 border-[.1px] border-green/50 rounded-lg text-sm">
                    <SiExpress className="text-xl lg:text-3xl text-green" />
                </div>
                <div className="p-2 border-[.1px] border-green/50 rounded-lg text-sm">
                    <SiMongodb className="text-xl lg:text-3xl text-green" />
                </div>
                <div className="p-2 border-[.1px] border-green/50 rounded-lg text-sm">
                    <IoLogoReact className="text-xl lg:text-3xl text-green" />
                </div>
                <div className="p-2 border-[.1px] border-green/50 rounded-lg text-sm">
                    <SiNextdotjs className="text-xl lg:text-3xl text-green" />
                </div>
            </div>
            <div className="flex gap-1 justify-between pt-3">
                <div className="p-2 border-[.1px] border-green/50 rounded-lg text-sm">
                    <BiLogoTailwindCss className="text-xl lg:text-3xl text-green" />
                </div>
                <div className="p-2 border-[.1px] border-green/50 rounded-lg text-sm">
                    <SiMysql className="text-xl lg:text-3xl text-green" />
                </div>
                <div className="p-2 border-[.1px] border-green/50 rounded-lg text-sm">
                    <TbBrandReactNative className="text-xl lg:text-3xl text-green" />
                </div>
                <div className="p-2 border-[.1px] border-green/50 rounded-lg text-sm">
                    <IoLogoJavascript className="text-xl lg:text-3xl text-green" />
                </div>
                <div className="p-2 border-[.1px] border-green/50 rounded-lg text-sm">
                    <FaDocker className="text-xl lg:text-3xl text-green" />
                </div>
            </div>
        </>
    )
}

export default Tech