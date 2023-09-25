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
        After graduating with a degree in{" "}
        <span className="font-medium">B.pharm</span>, I decided to pursue my
        passion for documentation in QMS.I am a dedicated and results-driven Quality Management System (QMS) professional with three years of hands-on experience in the field. Throughout my career, I have honed my skills in ensuring the highest levels of quality, compliance, and efficiency in various organizations. 
        <span className="font-medium">
          <a href="https://www.merillife.com/" className="font-bold" target="_blank">Meril Life Science</a> and <a href="https://www.premiermedcorp.com/" className="font-bold" target="_blank">Premier Medical </a>
        </span>
        CAPA & RCA.
Review and ensure that the CAPA for internal audit ,external audit, regulatory agency audit.
SOP, Master, Control, Documentation, EU/MDR 2017/746 Guideline.
To approve or reject the deviate and Change controls to achieve high degree of quality.
To ensure manufacturing of Products and Packing are carried out in accordance with current
Good Manufacturing Practices
phase 3 audit ISO 13485 Audit , FDA audit , CE Audit.
Prepared and reviewed of validation and qualification-related activities Prepared and reviewed ,DP, SOPs and Quality Manuals
Prepared and reviewed MQO, MRM,IQA
      </p>
    </motion.section>
  );
}
