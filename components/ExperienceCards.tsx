import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

type Props = {};

export default function ExperienceCards({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px]  bg-zinc-800 snap-center p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center cursor-pointer"
        src="experience.JPG"
        alt="Sakib"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-2xl font-semibold uppercase">Reasearch</h4>
        {/* techs */}
        <div className="flex space-x-2 my-2"></div>
        {/* summery points */}
        <ul className="list-disc space-y-4  ml-5">
          <li>Research on advanced Linked List Data Structure</li>
          <li>Research on advanced Tree Data Structure</li>
          <li>Implementation based on that research</li>
        </ul>
      </div>
    </article>
  );
}
