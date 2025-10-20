import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "@/components/ui/MagicButton";
import Image from "next/image";
import Link from "next/link";
import siteData from "@/data/siteData.json";

const Footer = () => {
    return (
        <footer className="w-full pt-20 pb-10 bg-[#0a0a0a] relative" id="contact">
            {/* background grid */}
            <div className="w-full absolute inset-0">
                <img
                    src="/images/footer-grid.svg"
                    alt="grid"
                    className="w-full h-full opacity-30 object-cover"
                />
            </div>

            <div className="flex flex-col items-center relative z-10">
                <h1 className="text-3xl md:text-5xl font-sspro text-white text-center mb-6 max-w-4xl">
                    Ready to take <span className="text-green">your</span> digital
                    presence to the next level?
                </h1>
                <p className="text-lg text-grayColor md:mt-10 my-5 text-center max-w-2xl leading-relaxed">
                    Reach out to me today and let&apos;s discuss how I can help you
                    achieve your goals.
                </p>
                <Link href="/#contact">
                    <MagicButton
                        title="Let's get in touch"
                        icon={<FaLocationArrow />}
                        position="right"
                    />
                </Link>
            </div>

            <div className="flex mt-16 md:flex-row flex-col justify-between items-center relative z-10 container">
                <p className="md:text-base text-sm md:font-normal font-light text-grayColor">
                    Copyright © 2025 {siteData.profile.name}
                </p>

                <div className="flex items-center md:gap-3 gap-6">
                    {siteData.socialMedia.map((social) => (
                        <a
                            key={social.id}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-[#202020] rounded-lg border border-grayColor/20 hover:border-green/20 transition-colors"
                        >
                            <Image
                                src={social.image}
                                alt={social.name}
                                width={20}
                                height={20}
                                className="filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
                            />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;