"use client";
import React, { ReactNode, useState } from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import { Button } from "./ui/moving-border";
import Link from "next/link";
import { FaReact, FaHtml5, FaCss3, FaNodeJs, FaPhp, FaDatabase, FaJsSquare, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiMongodb, SiBootstrap, SiCloudinary, SiExpress } from "react-icons/si";
import Heading from "./Heading";


interface project {
  name: string,
  description: string,
  techStack:ReactNode[] ,
  link: string,
}
const projectsData: project[] = [
  {
    name: "Music Academy (Next.js)",
    description: "A music academy website built with Next.js and Aceternity UI.",
    techStack: [
      <SiNextdotjs key="nextjs" size={24} />,
      <FaJsSquare key="js" size={24}  />,
      <SiTailwindcss key="tailwindcss" size={24}  />,
      <FaReact key="react" size={24}  />,
    ],
    link: "https://github.com/FardinKhan5/music-academy-nextjs"
  },
  {
    name: "NewsMonkey-React-App",
    description: "A news app built with ReactJS and the NewsAPI.",
    techStack: [
      <FaReact key="react" size={24}  />,
      <FaJsSquare key="js" size={24}  />
    ],
    link: "https://github.com/FardinKhan5/NewsMonkey-React-App"
  },
  {
    name: "Videotube Backend",
    description: "Backend for Videotube using Node.js, Express, Multer, Cloudinary, and MongoDB.",
    techStack: [
      <FaNodeJs key="nodejs" size={24}  />,
      <SiExpress key="expressjs" size={24}  />,
      <FaJsSquare key="js" size={24}  />,
      <SiMongodb key="mongodb" size={24}  />,
      <SiCloudinary key="cloudinary" size={24}  />
    ],
    link: "https://github.com/FardinKhan5/videotube-backend"
  },
  {
    name: "PdfMerger",
    description: "A PDF merger app built with Node.js and Express.",
    techStack: [
      <FaNodeJs key="nodejs" size={24}  />,
      <SiExpress key="expressjs" size={24}  />,
      <FaJsSquare key="js" size={24}  />
    ],
    link: "https://github.com/FardinKhan5/pdfMerger"
  },
  {
    name: "Text-Utilities-React-App",
    description: "A collection of text utilities built with ReactJS.",
    techStack: [
      <FaReact key="react" size={24}  />,
      <FaJsSquare key="js" size={24}  />
    ],
    link: "https://github.com/FardinKhan5/text-utilities-react-app"
  },

  {
    name: "TodosApp",
    description: "A simple to-do app built with ReactJS, Redux Toolkit, and Tailwind CSS.",
    techStack: [
      <FaReact key="react" size={24}  />,
      <FaJsSquare key="js" size={24}  />,
      <SiTailwindcss key="tailwindcss" size={24}  />
    ],
    link: "https://github.com/FardinKhan5/todosApp"
  },
  {
    name: "CurrencyConverter",
    description: "A currency converter app built with ReactJS and Tailwind CSS.",
    techStack: [
      <FaReact key="react" size={24}  />,
      <FaJsSquare key="js" size={24}  />,
      <SiTailwindcss key="tailwindcss" size={24}  />
    ],
    link: "https://github.com/FardinKhan5/currencyConverter"
  },
  {
    name: "PasswordGenerator",
    description: "A password generator app built with ReactJS and Tailwind CSS.",
    techStack: [
      <FaReact key="react" size={24}  />,
      <FaJsSquare key="js" size={24}  />,
      <SiTailwindcss key="tailwindcss" size={24}  />
    ],
    link: "https://github.com/FardinKhan5/passwordGenerator"
  },
  {
    name: "Microsoft-UI-Clone-Using-Tailwindcss",
    description: "A clone of the Microsoft UI using Tailwind CSS.",
    techStack: [
      <SiTailwindcss key="tailwind" size={24}  />
    ],
    link: "https://github.com/FardinKhan5/Microsoft-UI-Clone-Using-Tailwindcss"
  },
  {
    name: "Car-Rental-Management-System",
    description: "A car rental management system built with HTML, CSS, JS, PHP, Bootstrap, and MySQL.",
    techStack: [
      <FaHtml5 key="html" size={24}  />,
      <FaCss3 key="css" size={24}  />,
      <FaJsSquare key="js" size={24}  />,
      <FaPhp key="php" size={24}  />,
      <SiBootstrap key="bootstrap" size={24}  />,
      <FaDatabase key="mysql" size={24}  />
    ],
    link: "https://github.com/FardinKhan5/Car-Rental-Management-System"
  },
  {
    name: "Fnotes",
    description: "A note-taking app built with HTML, CSS, JS, PHP, and Bootstrap.",
    techStack: [
      <FaHtml5 key="html" size={24}  />,
      <FaCss3 key="css" size={24}  />,
      <FaJsSquare key="js" size={24}  />,
      <FaPhp key="php" size={24}  />,
      <SiBootstrap key="bootstrap" size={24}  />
    ],
    link: "https://github.com/FardinKhan5/Fnotes"
  },
];

export default function Projects() {
  const [seeMore,setSeeMore]=useState<boolean>(false)

  return (
    <div className="py-32 px-10 bg-neutral-100 dark:bg-slate-950 dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2]" id="Projects">
          <Heading>Projects</Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-3 gap-5 space-x-3 place-items-center ">
        {projectsData.map((p,index) => {
          if(seeMore || (!seeMore && index < 3)){
            return (
              <div className="w-80 h-80 " key={p.name}>
                <BackgroundGradient containerClassName="w-full h-full" className="w-full h-full space-y-5 rounded-[22px] max-w-sm p-4 sm:p-10 bg-neutral-100 dark:bg-zinc-900">
  
                  <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                    {p.name}
                  </p>
                  <div className="flex gap-2 items-center text-black dark:text-white">{p.techStack}</div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {p.description}
                  </p>
                  <Link target={"_blank"} href={p.link}>
                    <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                      <span>View Source </span>
                      <span className=" rounded-full text-[0.6rem] px-2 py-0 text-white">
                        <FaGithub />
                      </span>
                    </button>
                  </Link>
                </BackgroundGradient>
              </div>
            )
          }
        })}
      </div>
      <div className="w-full my-5 flex justify-center">
        <Button
        onClick={()=>setSeeMore((prev)=>!prev)}
        borderRadius="1.75rem"
        className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        {!seeMore?"See More":"See Less"}
      </Button>
      </div>
    </div>
  );
}
