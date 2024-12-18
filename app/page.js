import Image from "next/image";
import { SlBadge } from "react-icons/sl";
import { PiArrowCircleDownThin } from "react-icons/pi";
import { IoIosMailOpen } from "react-icons/io";

import arrow from "@/public/images/arrow.png";
import about from "@/public/images/about.png";
import service from "@/public/images/service-bg.png";
import portfolio from "@/public/images/portfolio-bg.png";
import potfolioBanner from "@/public/images/home-banner2.jpg";

import Link from "next/link";
import Tech from "@/components/home/Tech";
import BgLines from "@/components/ui/BgLines";

export default function Home() {
  return (
    <div className="container flex justify-center items-center min-h-screen">
      <div className="grid grid-cols-6 gap-4 items-start">
        {/* Main Header Section */}
        <div className="col-span-6 shadow-box p-3 md:p-10">
          <h4 className="text-grayColor">
            <span className="text-2xl text-white">Hi!</span> There I'm
          </h4>
          <Image src={arrow} alt="arrow" width={100} />
          <div className="font-sspro text-3xl md:text-6xl flex-wrap flex gap-2 text-nowrap">
            Full Stack Developer
            <span className="customStroke flex gap-3">
              <Link href="/contact">Hire Me!</Link>{" "}
              <SlBadge className="text-green font-bold" />
            </span>
          </div>
        </div>

        {/* Left Section */}
        <div className="col-span-6 md:col-span-4 grid gap-4 grid-cols-4 md:grid-cols-2">
          {/* about card */}
          <Link href="/about" className="col-span-2 md:col-span-1">
            <div className="shadow-box flex flex-col justify-center items-center px-2 py-1 md:py-9 h-full">
              <Image src={about} alt="about_img" />
              <h6 className="text-grayColor text-lg">Specialization</h6>
              <h4 className="font-sspro font-bold text-2xl md:text-4xl">
                About Me
              </h4>
            </div>
          </Link>
          {/* service card */}
          <Link href="/services" className="col-span-2 md:col-span-1">
            <div className=" w-full shadow-box flex flex-col justify-center items-center px-2 py-1 md:py-9 h-full">
              <Image src={service} alt="service_img" fill sizes="100%" />
              <marquee className="text-[140px] text-green font-extrabold uppercase">
                services
              </marquee>
            </div>
          </Link>
          {/* banner section */}
          <div className="col-span-4 md:col-span-2 shadow-box relative">
            <Image src={portfolio} alt="portfolio image" fill sizes="100%" />
            <Image
              src={potfolioBanner}
              className="p-9 bg-cover"
              alt="portflio image"
            />
            <Link
              href="/portfolio"
              className="absolute right-[5%] top-1/3 rotate-90 transform"
            >
              <div className="z-10 bg-black py-2 px-4 rounded-full hover:bg-white hover:text-green transition-all duration-300 ease-in-out">
                portfolio
              </div>
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-span-6 md:col-span-2 grid md:auto-rows-min gap-4 grid-cols-4">
          <div className="shadow-box p-3 lg:p-3 col-span-4">
            <Tech />
          </div>

          <div className="col-span-2 md:col-span-4">
            <BgLines text="MERN Stack Developer." />
          </div>

          <Link href="/contact" className="col-span-2 md:col-span-4">
            <div className="p-6 flex justify-between items-center shadow-box">
              <div>
                <PiArrowCircleDownThin className="text-3xl text-grayColor" />
                <h6 className="text-grayColor font-sspro pt-4 md:pt-4 text-sm md:text-base">
                  Get In Touch
                </h6>
              </div>
              <div>
                <IoIosMailOpen className="text-green text-4xl" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
