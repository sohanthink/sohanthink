import Navbar from "@/components/common/Navbar";
import "./globals.css";
import { Poppins } from "next/font/google"; // Import both fonts
import localFont from "next/font/local";
// Configure the local font
const myLocalFont = localFont({
  src: [
    {
      path: "../public/fonts/EthosNova-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-enb", //
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Think With Sohan - MERN Stack Developer",
  description:
    "Discover the expertise of Muhammad Sohan Mollah, a seasoned MERN stack developer specializing in ReactJS, NextJS, Bootstrap, Tailwind, ShadCN, Acertinity, Express, Node, JavaScript, React Native, frontend, backend, server-side, MongoDB, and Android/iOS development with React Native.",
  keywords: [
    "MERN stack developer",
    "ReactJS",
    "NextJS",
    "Bootstrap",
    "Tailwind",
    "ShadCN",
    "Acertinity",
    "Express",
    "Node",
    "JavaScript",
    "React Native",
    "frontend development",
    "backend development",
    "server-side development",
    "MongoDB",
    "Android development",
    "iOS development",
  ],
  author: "Muhammad Sohan Mollah",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Add favicon */}
        {/* <link rel="icon" href="/favicon.svg" type="image/svg+xml" /> */}
      </head>
      <body
        className={`${poppins.className} ${myLocalFont.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
