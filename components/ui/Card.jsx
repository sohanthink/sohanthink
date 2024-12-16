"use client";
import { animate, motion } from "framer-motion";
import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
import { GoCopilot } from "react-icons/go";
import Link from "next/link";
import { CiFacebook } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";

export function CardDemo() {
    return (
        (
            <Card>
                <CardSkeletonContainer>
                    <Skeleton />
                </CardSkeletonContainer>
            </Card>
        )
    );
}

const Skeleton = () => {
    const scale = [1, 1.1, 1];
    const transform = ["translateY(0px)", "translateY(-4px)", "translateY(0px)"];
    const sequence = [
        [
            ".circle-1",
            {
                scale,
                transform,
            },
            { duration: 0.8 },
        ],
        [
            ".circle-2",
            {
                scale,
                transform,
            },
            { duration: 0.8 },
        ],
        [
            ".circle-3",
            {
                scale,
                transform,
            },
            { duration: 0.8 },
        ],
        [
            ".circle-4",
            {
                scale,
                transform,
            },
            { duration: 0.8 },
        ],
        [
            ".circle-5",
            {
                scale,
                transform,
            },
            { duration: 0.8 },
        ],
    ];

    useEffect(() => {
        animate(sequence, {
            // @ts-ignore
            repeat: Infinity,
            repeatDelay: 1,
        });
    }, []);
    return (
        (<div
            className="overflow-hidden h-full relative flex items-center justify-center">
            <div className="flex flex-row flex-shrink-0 justify-center items-center gap-2">
                <Container className="h-10 w-10 circle-2">
                    <Link href="https://www.facebook.com/sohanthink" target='_blank'><CiFacebook className='w-9 h-9' /></Link>
                </Container>
                <Container className="h-10 w-10 circle-3">
                    <Link href="https://www.github.com/sohanthink" target='_blank'><FaGithub className='w-9 h-9' /></Link>
                </Container>
                <Container className="h-10 w-10 circle-4">
                    <Link href="https://www.linkedin.com/in/sohanthink/" target='_blank'><TiSocialLinkedinCircular className='w-9 h-9' /></Link>
                </Container>
            </div>
            <div
                className="h-20 w-px absolute top-5 m-auto z-40 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-move">
                <div className="w-10 h-20 top-1/2 -translate-y-1/2 absolute -left-10">
                    <Sparkles />
                </div>
            </div>
        </div>)
    );
};
const Sparkles = () => {
    const randomMove = () => Math.random() * 2 - 1;
    const randomOpacity = () => Math.random();
    const random = () => Math.random();
    return (
        (<div className="absolute inset-0">
            {[...Array(12)].map((_, i) => (
                <motion.span
                    key={`star-${i}`}
                    animate={{
                        top: `calc(${random() * 100}% + ${randomMove()}px)`,
                        left: `calc(${random() * 100}% + ${randomMove()}px)`,
                        opacity: randomOpacity(),
                        scale: [1, 1.2, 0],
                    }}
                    transition={{
                        duration: random() * 2 + 4,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    style={{
                        position: "absolute",
                        top: `${random() * 100}%`,
                        left: `${random() * 100}%`,
                        width: `2px`,
                        height: `2px`,
                        borderRadius: "50%",
                        zIndex: 1,
                    }}
                    className="inline-block bg-black dark:bg-white"></motion.span>
            ))}
        </div>)
    );
};

export const Card = ({
    className,
    children
}) => {
    return (
        (<div
            className={cn(
                "max-w-sm w-3/4 mx-auto rounded-xl border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group",
                className
            )}>
            {children}
        </div>)
    );
};


export const CardSkeletonContainer = ({
    className,
    children,
    showGradient = true
}) => {
    return (
        (<div
            className={cn("h-[5rem] md:h-[8rem] rounded-xl z-40", className, showGradient &&
                "bg-neutral-300 dark:bg-[rgba(40,40,40,0.70)] [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]")}>
            {children}
        </div>)
    );
};

const Container = ({
    className,
    children
}) => {
    return (
        (<div
            className={cn(
                `h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
    shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
    `,
                className
            )}>
            {children}
        </div>)
    );
};

