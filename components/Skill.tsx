import React from "react";
import { motion } from "framer-motion";
type Props = {
  directionLeft: boolean;
};

export default function Skill({ directionLeft }: Props) {
  return (
    <div>
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
      />
    </div>
  );
}
