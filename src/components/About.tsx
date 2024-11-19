import React from 'react'
import { TextGenerateEffect } from './ui/text-generate-effect'
import Heading from './Heading'
function About() {
    const para2: string = "My journey in tech is backed by a solid academic background and hands-on projects. I hold a Bachelor's degree in Computer Science from Dr. Babasaheb Ambedkar Marathwada University, where I graduated with a CGPA of 8.3, and I'm currently pursuing my Master's in Computer Applications at Government College of Engineering Aurangabad."
    const para1: string = "I’m a full stack developer dedicated to creating dynamic, user-friendly web applications that deliver seamless experiences. With a strong foundation in modern technologies, I craft responsive and efficient software solutions that push the boundaries of web development. newLine " + para2
    return (
        <div id='About' className='bg-neutral-100 dark:bg-slate-950 dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] py-36 px-10 min-h-screen '>
            <Heading>About Me</Heading>
            <TextGenerateEffect filter={false} duration={0.5} className='text-justify my-8 text-sm' words={para1} />
        </div>
    )
}

export default About