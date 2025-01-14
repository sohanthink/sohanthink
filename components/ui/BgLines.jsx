import React from 'react'
import { BackgroundLines } from './Background-lines'

const BgLines = ({ text }) => {
    return (
        <BackgroundLines className="flex items-center justify-center py-7 md:py-12 px-2 shadow-box">
            <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-5xl font-sspro relative z-20 font-bold tracking-tight">
                {text}
            </h2>
        </BackgroundLines>
    )
}

export default BgLines