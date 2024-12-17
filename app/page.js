import Image from "next/image";
import { SlBadge } from "react-icons/sl";

import arrow from "@/public/images/arrow.png";
import about from "@/public/images/about.png";
import service from "@/public/images/service-bg.png";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container grid grid-cols-3 gap-4 items-start">
      {/* Main Header Section */}
      <div className="col-span-3 shadow-box p-10">
        <h4 className="text-grayColor">
          <span className="text-2xl text-white">Hi!</span> There I'm
        </h4>
        <Image src={arrow} alt="arrow" width={100} />
        <div className="font-sspro text-6xl flex-wrap flex gap-2">
          Full Stack Developer
          <span className="customStroke flex gap-3">
            <Link href="/contact">Hire Me!</Link>{" "}
            <SlBadge className="text-green font-bold" />
          </span>
        </div>
      </div>

      {/* Left Section */}
      <div className="col-span-2 grid gap-4 grid-cols-2">
        {/* about card */}
        <Link href="/about">
          <div className="col-span-1 shadow-box flex flex-col justify-center items-center px-2 py-9 h-full">
            <Image src={about} alt="about_img" />
            <h6 className="text-grayColor text-lg">Specialization</h6>
            <h4 className="font-sspro font-bold text-4xl">About Me</h4>
          </div>
        </Link>
        {/* service card */}
        <Link href="/services">
          <div className="col-span-1 w-full shadow-box flex flex-col justify-center items-center px-2 py-9 h-full">
            <Image src={service} alt="service_img" fill sizes="100%" />
            <marquee className="text-[140px] text-green font-extrabold uppercase">
              services
            </marquee>
          </div>
        </Link>
      </div>

      {/* Right Section */}
      <div className="bg-cyan-400 col-span-1 grid auto-rows-min gap-2">
        <div className="bg-gray-100 p-2">
          <h3>nice</h3>
        </div>
        <div className="bg-gray-100 p-2">
          <h3>nice</h3>
        </div>
        <div className="bg-gray-100 p-2">
          <h3>nice</h3>
        </div>
        <div className="bg-gray-100 p-2">
          <h3>nice</h3>
        </div>
      </div>
    </div>
  );
}
