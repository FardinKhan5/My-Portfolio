"use client"

import { useState } from "react"
import { FaGoogleDrive, FaInstagram, FaMoon, FaSun } from "react-icons/fa"
import { FaGithub, FaLinkedin } from "react-icons/fa6"
import Link from "next/link"

const Footer = () => {
  const [theme, setTheme] = useState<boolean>(true)
  const changeTheme = () => {
    setTheme((prev)=>!prev)
    document.getElementsByTagName("html")[0].classList.toggle("dark")
  }
  return (
    <footer className="bg-neutral-200 dark:bg-black dark:text-gray-400 text-black py-12 text-center">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">

        <div>
          <h2 className="dark:text-white text-black text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <Link
                href="/"
                className="hover:text-zinc-800W hover:dark:text-white transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#Skill"
                className="hover:text-zinc-800W hover:dark:text-white  transition-colors duration-300"
              >
                Skill
              </Link>
            </li>
            <li>
              <Link
                href="#Projects"
                className="hover:text-zinc-800W hover:dark:text-white  transition-colors duration-300"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#Education"
                className="hover:text-zinc-800W hover:dark:text-white  transition-colors duration-300"
              >
                Education
              </Link>
            </li>
            <li>
              <Link
                href="#Contact"
                className="hover:text-zinc-800W hover:dark:text-white  transition-colors duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        {/* https://shorturl.at/RG5rx */}
        <div>
          <h2 className="dark:text-white text-black text-lg font-semibold mb-4">My Resume</h2>
          <div className="flex space-x-4 justify-center">
            <Link
              target={"_blank"}
              href="https://shorturl.at/RG5rx"
              className="hover:text-white transition-colors duration-300"
            >
              <button className="w-full shadow-[0_4px_14px_0_rgb(0,118,255,39%)] hover:shadow-[0_6px_20px_rgba(0,118,255,23%)] hover:bg-[rgba(0,118,255,0.9)] px-8 py-2 bg-[#0070f3] rounded-md text-white font-light transition duration-200 ease-linear">
              <p className="flex justify-center items-center gap-2"><FaGoogleDrive /> View </p>
              </button>
             
            </Link>
          </div>
        </div>
        {/* https://drive.google.com/file/d/1XN3ThhhitVwcKYa054ZGw_qsrX2R2dny/view?usp=drive_link */}
        <div>
          <h2 className="dark:text-white text-black text-lg font-semibold mb-4">Follow Me</h2>
          <div className="flex space-x-4 justify-center">
            <Link
              target={"_blank"}
              href="https://github.com/FardinKhan5"
              className="hover:text-neutral-500 dark:hover:text-white transition-colors duration-300"
            >
              <FaGithub size={32} />
            </Link>
            <Link
              target={"_blank"}
              href="https://linkedin.com/in/fardin-khan-93a7a7229/"
              className="hover:text-neutral-500 dark:hover:text-white transition-colors duration-300"
            >
              <FaLinkedin size={32} />
            </Link>
            <Link
              target={"_blank"}
              href="https://www.instagram.com/i_am_fardink5/"
              className="hover:text-neutral-500 dark:hover:text-white transition-colors duration-300"
            >
              <FaInstagram size={32} />
            </Link>
          </div>
        </div>
        <div>
          <div className="flex space-x-4 justify-center">
            <button onClick={changeTheme} className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium dark:text-slate-400 text-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              {theme ? <p className="flex justify-center items-center gap-3"><FaSun /> Light</p>:<p className="flex justify-center items-center gap-3"><FaMoon /> Dark</p>}
            </button>
          </div>
        </div>
      </div>
      <p className="text-center text-xs pt-8">© {new Date().getFullYear()} Fardin Khan Portfolio. All rights reserved.</p>
    </footer>
  )
}

export default Footer