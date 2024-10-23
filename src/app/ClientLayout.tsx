"use client"; // This is the Client Component handling the client-side logic

import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}>
      {/* Background shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="yellow-shape blur-shape"></div>
        <div className="blue-shape blur-shape"></div>
      </div>

      {children}

      <style jsx>{`
        .yellow-shape {
          position: absolute;
          width: 400px; /* Increased size */
          height: 400px; /* Increased size */
          background-color: yellow;
          border-radius: 50%;
          top: 0%; /* Start from the top corner */
          left: 0%; /* Start from the left corner */
          animation: move1 10s infinite alternate;
        }

        .blue-shape {
          position: absolute;
          width: 500px; /* Increased size */
          height: 500px; /* Increased size */
          background-color: blue;
          border-radius: 50%;
          top: 60%; /* Keeping the previous position */
          left: 70%; /* Keeping the previous position */
          animation: move2 12s infinite alternate;
        }

        .blur-shape {
          filter: blur(80px); /* Apply blur */
          opacity: 0.6; /* Make it partially transparent */
        }

        @keyframes move1 {
          0% {
            transform: translate(0, 0) scale(1);
          }
          100% {
            transform: translate(100px, 200px) scale(1.2);
          }
        }

        @keyframes move2 {
          0% {
            transform: translate(0, 0) scale(1);
          }
          100% {
            transform: translate(-150px, -250px) scale(1.3);
          }
        }
      `}</style>
    </div>
  );
}
