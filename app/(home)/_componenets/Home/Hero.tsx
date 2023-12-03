"use client"
import Image from "next/image";
import React from "react";
import HeroImg from "@/public/images/hero.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {

  return (
    <section className="relative">
      <div className="custom-screen py-28">
        <div>
          <div className="space-y-5 max-w-3xl mx-auto text-center">
            <h1
              className="text-4xl   font-extrabold mx-auto sm:text-6xl text-gray-800 dark:text-white"
              >
              Manage your email marketing using AI
            </h1>
            <p className="max-w-xl mx-auto text-gray-500 dark:text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat molestiae modi aspernatur? Expedita aliquid quas accusamus harum facere maiores sunt dolor
            </p>
            <div className="flex justify-center font-medium text-sm">
              <Link
                href="/sign-up"
              >
                <Button className="flex items-center text-white bg-purple-600 hover:bg-purple-500 active:bg-purple-700 rounded-full">
                  Get started
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5">
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Button>
              </Link>
            </div>
          </div>
          <div className="mt-16 sm:mt-28 mx-auto">
            <Image
              src={HeroImg}
              className="shadow-lg rounded-2xl mx-auto"
              alt="Mailgo"
            />
          </div>
        </div>
      </div>
      <div
        className="absolute inset-0 max-w-md mx-auto h-72 blur-[118px]"
        style={{
          background:
            "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
        }}></div>
    </section>
  );
};

export default Hero;
