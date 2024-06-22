"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After learning about Google DeepMind's{" "}
        <span className="font-medium">AlphaZero</span>, I gained a passion for
        Data Science and Artificial Intelligence. I enrolled in NYP's Diploma in{" "}
        <span className="font-medium">AI and Data Engineering.</span>{" "}
        <span className="italic">My favorite part of DS and AI</span> is the
        endless possibilities and domains it can be applied to. I
        <span className="underline"> love</span> the feeling of understanding
        core concepts deeper and deeper. The technologies I use are{" "}
        <span className="font-medium">
          Python, SQL, and R
        </span>
        . I am also familiar with deploying models in the cloud. I am always looking to
        learn new technologies.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, learning more about astronomy, and running. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">astrophysics and statistics</span>. I also play the 
        guitar in my free time.
      </p>
    </motion.section>
  );
}
