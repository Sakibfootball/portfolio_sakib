import Image from "next/image";
import React from "react";
import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter";
import BackGroundCircles from "./BackGroundCircles";
import sakib from "../public/sakib.jpg";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hello there, Myself Sakib",
      "Simple But An Elite Programmer",
      "Guy who never gives up",
    ],
    loop: true, // Infinit
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden ">
      <BackGroundCircles />
      <Image
        src={sakib}
        alt="sakib"
        height={200}
        width={200}
        className="relative rounded-full mx-auto object-cover"
      />
      <div className="z-20">
        <div>
          <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[20px]">
            Web Developer
          </h2>
          <h1 className="text-5xl lg:text-6xl font-semibold px-10">
            <span className="mr-3">{text}</span>
            <Cursor cursorColor="red" />
          </h1>
        </div>

        <div className="pt-10">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
