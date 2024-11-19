"use client"

import Link from "next/link"
import { FaInstagram } from "react-icons/fa"
import { FaGithub, FaLinkedin } from "react-icons/fa6"

const Footer = ()=>{
    return (
        <footer className="bg-black text-gray-400 py-12 text-center">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2  gap-8 px-4 sm:px-6 lg:px-8">

        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul>
            <li>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#Skill"
                className="hover:text-white transition-colors duration-300"
              >
                Skill
              </a>
            </li>
            <li>
              <a
                href="#Projects"
                className="hover:text-white transition-colors duration-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#Education"
                className="hover:text-white transition-colors duration-300"
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="#Contact"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Me</h2>
          <div className="flex space-x-4 justify-center">
            <Link
              target={"_blank"}
              href="https://github.com/FardinKhan5"
              className="hover:text-white transition-colors duration-300"
            >
              <FaGithub size={32}/>
            </Link>
            <Link
              target={"_blank"}
              href="https://linkedin.com/in/fardin-khan-93a7a7229/"
              className="hover:text-white transition-colors duration-300"
            >
              <FaLinkedin size={32}/>
            </Link>
            <Link
              target={"_blank"}
              href="https://www.instagram.com/i_am_fardink5/"
              className="hover:text-white transition-colors duration-300"
            >
              <FaInstagram size={32}/>
            </Link>
          </div>
        </div>
        </div>
        <p className="text-center text-xs pt-8">© {new Date().getFullYear()} Fardin Khan Portfolio. All rights reserved.</p>
    </footer>
    )
}

export default Footer