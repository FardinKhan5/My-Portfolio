"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import { Button } from "./ui/moving-border";
import Link from "next/link";

export default function HeroSection() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        <Highlight className="text-black dark:text-white">
        Hi, I'm Fardin Khan – A Passionate Full Stack Developer
        </Highlight>
      </motion.h1>
      <h2 className="text-xl text-center mt-3 md:text-2xl lg:text-3xl dark:text-white text-black">I specialize in building dynamic and responsive web applications using the latest technologies.</h2>

        <div className="w-full flex justify-center py-4">
        <Link href={"#Projects"}>
        <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        Explore My Work
      </Button>
        </Link>
        </div>
    </HeroHighlight>
  );
}
