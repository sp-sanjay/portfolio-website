import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "B.Pharm",
    location: "Rofel Shri G M Bilakhia college of Pharmacy",
    description:
      "I graduated with 7.26 CGPA in 2020.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "Internship",
    location: "Meril Life Science",
    description:
      "I worked as trainee QMS.",
    icon: React.createElement(CgWorkAlt),
    date: "2021",
  },
  {
    title: "Sr. Executive Management Representative & QMS",
    location: "Premier Medical Corporation Pvt. Ltd., Sarigam ",
    description:
      "SOP, Master, Control, Documentation, EU/MDR 2017/746 Guideline. To approve or reject the deviate and Change controls to achieve high degree of quality. To ensure manufacturing of Products and Packing are carried out in accordance with current Good Manufacturing Practices phase 3 audit ISO 13485 Audit , FDA audit , CE Audit. Prepared and reviewed of validation and qualification-related activities Prepared and reviewed ,DP, SOPs and Quality Manuals Prepared and reviewed MQO, MRM,IQA",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "Regulatory Compliance",
"Documentation and Records Management",
"Risk Management",
"Process Improvement",
"Auditing",
"Leadership and Communication",
"Customer Focus",
"Supplier Management",
] as const;
