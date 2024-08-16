import React from "react";
import { GrCertificate } from "react-icons/gr";
import { FaGraduationCap } from "react-icons/fa"
import arduinoImg from "@/public/ArduinoIMG.jpg";
import supermarioImg from "@/public/SuperMarioBros.jpg";
import wordcloudImg from "@/public/WordCloud.jpg";

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
    title: "Certificate in Literacy in AI",
    location: "Online",
    description:
      "The beginning of my journey, taking a certificate course by AI Singapore to kickstart my learning",
    icon: React.createElement(GrCertificate),
    date: "2023",
  },
  {
    title: "Certificate in Foundations in AI",
    location: "Online",
    description:
      "A 140 hour long certificate course taught by AI Singapore, intended to cover theory and how to use modern day technologies for AI and Data Science.",
    icon: React.createElement(GrCertificate),
    date: "2024",
  },
  {
    title: "Diploma in AI and Data Engineering",
    location: "Singapore, SG",
    description:
      "My current course. Expected graduation date is April 2026.",
    icon: React.createElement(FaGraduationCap),
    date: "2023 - present - 2026",
  },
] as const;

export const projectsData = [
  {
    title: "Mario Bros AI",
    description: "I created an AI to play Super Mario Bros using Double Deep-Q networks.",
    tags: ["PyTorch", "Numpy", "OpenAI Gym", "Google Cloud Platform"],
    imageUrl: supermarioImg,
    pdfLink: "/pdfs/mario-bros-ai.pdf",
  },
  {
    title: "Data Engineering Project",
    description: "A project to improve worker safety and comfort on a factory shop floor with a sustainable and energy-efficient approach.",
    tags: ["Arduino", "C++", "MQTT"],
    imageUrl: arduinoImg,
    pdfLink: "/pdfs/data-engineering-project.pdf",
  },
  {
    title: "Sentiment Analysis",
    description: "An AI model that analyses the sentiment of social media posts.",
    tags: ["TensorFlow", "Pandas", "SQL"],
    imageUrl: wordcloudImg,
    pdfLink: "/pdfs/sentiment-analysis.pdf",
  },
] as const;

export const skillsData = [
  "Python",
  "R",
  "SQL",
  "TensorFlow",
  "PyTorch",
  "Keras",
  "Scikit-Learn",
  "Pandas",
  "NumPy",
  "Matplotlib",
  "Seaborn",
  "Jupyter",
  "Power BI",
  "NLP",
  "Computer Vision",
  "Deep Learning",
  "Machine Learning",
  "Data Analysis",
  "Data Visualization",
  "Statistics",
  "Data Mining",
  "AWS",
  "GCP",
] as const;

