import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Think With Sohan - MERN Stack Developer",
  description: "Full Stack Developer specializing in React, NextJS, Node.js, and MongoDB. Creating modern, scalable web applications that bring ideas to life.",
  keywords: ["Full Stack Developer", "React", "Next.js", "Node.js", "MongoDB", "Web Development", "MERN Stack"],
  authors: [{ name: "Muhammad Sohan Mollah" }],
  creator: "Muhammad Sohan Mollah",
  publisher: "SohanThink",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sohanthink.com",
    siteName: "Think With Sohan",
    title: "Think With Sohan - MERN Stack Developer",
    description: "Full Stack Developer specializing in React, NextJS, Node.js, and MongoDB. Creating modern, scalable web applications that bring ideas to life.",
    images: [
      {
        url: "https://sohanthink.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Think With Sohan - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sohanthink",
    creator: "@sohanthink",
    title: "Think With Sohan - MERN Stack Developer",
    description: "Full Stack Developer specializing in React, NextJS, Node.js, and MongoDB. Creating modern, scalable web applications that bring ideas to life.",
    images: ["https://sohanthink.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://sohanthink.com",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Muhammad Sohan Mollah",
              "jobTitle": "Full Stack Developer",
              "url": "https://sohanthink.com",
              "sameAs": [
                "https://github.com/sohanthink",
                "https://www.linkedin.com/in/sohanthink",
                "https://facebook.com/sohanthink"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "SohanThink"
              },
              "knowsAbout": [
                "React",
                "Next.js",
                "Node.js",
                "MongoDB",
                "TypeScript",
                "Tailwind CSS",
                "Web Development",
                "Full Stack Development"
              ],
              "description": "Full Stack Developer specializing in React, NextJS, Node.js, and MongoDB. Creating modern, scalable web applications that bring ideas to life.",
              "image": "https://sohanthink.com/images/profile.jpg",
              "email": "hello@sohanthink.com",
              "telephone": "+88 01645113536",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "BD"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} bg-[#0a0a0a] text-white antialiased`}>
        <div className="min-h-screen bg-[#0a0a0a]">
          <Navbar />
          <main className="pt-0">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
