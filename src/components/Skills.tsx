"use client"
import { ReactElement, useState } from 'react';
import { GlareCard } from './ui/glare-card';
import { Button } from "./ui/moving-border";
import { RiNextjsFill } from "react-icons/ri";
import {
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaNodeJs,
    FaReact,
    FaGitAlt,
    FaBootstrap,
    FaPhp,
    FaJava,
    FaDatabase,
  } from 'react-icons/fa';
  import {
    SiTailwindcss,
    SiTypescript,
    SiMongodb,
    SiExpress,
    SiAppwrite,
    SiC,
    SiCplusplus,
    SiMysql,
  } from 'react-icons/si';

  
  const skills = [
      { logo: <FaReact size={50} />, name: 'React' },
      { logo: <FaNodeJs size={50} />, name: 'Node.js' },
      { logo: <SiExpress size={50} />, name: 'Express.js' },
      { logo: <SiMongodb size={50} />, name: 'MongoDB' },
      {logo: <RiNextjsFill size={50} />, name:'Nextjs'},
    { logo: <FaHtml5 size={50} />, name: 'HTML' },
    { logo: <FaCss3Alt size={50} />, name: 'CSS' },
    { logo: <SiTailwindcss size={50} />, name: 'Tailwind CSS' },
    { logo: <FaJsSquare size={50} />, name: 'JavaScript' },
    { logo: <SiTypescript size={50} />, name: 'TypeScript' },
    { logo: <SiAppwrite size={50} />, name: 'Appwrite' },
    { logo: <FaGitAlt size={50} />, name: 'GitHub' },
    { logo: <SiC size={50} />, name: 'C' },
    { logo: <SiCplusplus size={50} />, name: 'C++' },
    { logo: <FaJava size={50} />, name: 'Java' },
    { logo: <SiMysql size={50} />, name: 'SQL' },
    { logo: <FaPhp size={50} />, name: 'PHP' },
    { logo: <FaBootstrap size={50} />, name: 'Bootstrap' },
    { logo: <FaJava size={50} />, name: 'DSA' }, // General placeholder for DSA
    { logo: <FaDatabase size={50} />, name: 'DBMS' } // General placeholder for DBMS
  ];



function Skills() {
    const [showMore,setShowMore]=useState<boolean>(false)
    const showAllSkills=()=>{
        setShowMore((prev)=>(!prev))
    }
    return (


        <div className="pb-4" id='Skills'>
            <h1 className='text-center text-4xl dark:text-white text-black font-bold'>My Skills</h1>
        <div className="grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 px-32 py-5 ">
            {skills.map((skill:{logo:ReactElement,name:string},index:number) => {
                if(showMore || (!showMore && index < 5)){
                    return (
                        <GlareCard key={skill.name} className="flex flex-col items-center justify-center bg-purple-600">
                            {skill.logo}
                            <p className="text-white font-bold text-sm mt-4">{skill.name}</p>
                        </GlareCard>
                    )
                }
            })}
        </div>
        <div className="w-full flex justify-center"><Button
        onClick={showAllSkills}
        borderRadius="1.75rem"
        className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
      >
        {!showMore?"See More":"See Less"}
      </Button>
      </div>
        </div>

    )
}

export default Skills