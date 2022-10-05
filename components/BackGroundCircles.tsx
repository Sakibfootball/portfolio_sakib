import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function BackGroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-gray-600 rounded-full h-[200px] w-[200px] mt-52 animate-pulse" />
      <div className="absolute border border-gray-600 rounded-full h-[300px] w-[300px] mt-52 animate-pulse" />
      <div className="absolute border border-gray-600 rounded-full h-[500px] w-[500px] mt-52 animate-pulse" />
      <div className=" rounded-full border border-[#f7Ab0A] opacity-20 h-[700px] w-[700px] mt-52 animate-pulse absolute" />
      {/* <div className="rounded-full border border-gray-600 h-[850px] w-[850px] mt-52 absolute" /> */}
    </motion.div>
  );
}
