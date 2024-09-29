"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { ethers } from "ethers";

export default function LandingPage() {
  const [isHovered, setIsHovered] = useState(false);

  async function connectWallet() {
    <Link
      href="/arena"
      target="_blank"
      rel="noopener noreferrer"
      className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
    >
      Arena
    </Link>;
  }

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <div className="flex min-h-[calc(100vh-64px)]">
        {/* Left side */}
        <div className="flex flex-col justify-center w-1/2 p-12">
          <div className="mb-12">
            <Image
              src="/WhatsApp Image 2024-09-29 at 8.45.47 AM.jpg"
              alt="Avax Gods Logo"
              width={200}
              height={50}
            />
          </div>
          <h1 className="mb-4 text-5xl font-bold text-white">
            Welcome to NFT WARS
          </h1>
          <h2 className="mb-8 text-3xl font-bold text-purple-500">
            a Web3 NFT Based Card Battle Game
          </h2>
          <p className="mb-8 text-lg text-gray-400">
            Connect your wallet to start playing
            <br />
            the ultimate Web3 Battle Card Game
          </p>

            <button
              className={`
      relative overflow-hidden px-8 py-4 bg-purple-600 text-white text-lg font-bold rounded-lg
      transition-all duration-300 ease-in-out
      transform hover:scale-105 hover:shadow-lg
      ${isHovered ? "animate-pulse" : ""}
    `}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => {
                connectWallet(); 
                window.open('/arena', '_blank');
              }}
            >
              <span className="relative z-10">Start Battle</span>
              <span
                className={`
      absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500-
      transition-opacity duration-300 ease-in-out
      ${isHovered ? "opacity-100" : "opacity-0"}
    `}
              ></span>
            </button>
        </div>

        {/* Right side */}
        <div className="relative w-1/2">
          <Image
            src="/hero-img.jpg"
            alt="Avax Gods Background"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black opacity-50"></div>
        </div>
      </div>
    </div>
  );
}
