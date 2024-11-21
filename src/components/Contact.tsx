"use client";
import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import {
  IconBrandGithub,
} from "@tabler/icons-react";
import Link from "next/link";
import Heading from "./Heading";


export function Contact() {
  const web3formsAccessKey=process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
  const [result, setResult] = useState<string>("")
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResult("Sending....");
    const target = e.target as typeof e.target & {
      email: { value: string },
      message: { value: string },
    }
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: web3formsAccessKey,
          email: target.email.value,
          message: target.message.value,
        }),
      });
      const result = await response.json();
      if (result.success) {
        setResult("Message sent successfully");
        console.log(result)
        target.email.value = ""
        target.message.value = ""
      }
    } catch (error) {
      console.log("Error", error);
      setResult("Message cannot sent");
    }
  }


  return (
    <div className="py-32 px-10 dark:bg-slate-950 dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] bg-neutral-100" id="Contact">
      <Heading>Get in Touch</Heading>
      <div className="max-w-md w-full mx-auto mt-8 rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          Contact Me
        </h2>
        <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Fill out the form below and I&apos;ll get back to you as soon as possible.
        </p>

        <form className="my-8" onSubmit={handleSubmit}>
          <input type="hidden" name="access_key" value={web3formsAccessKey} />
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" placeholder="name@gmail.com" type="email" required />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="message">Message</Label>
            <Input id="message" placeholder="Hi!" type="text" required />
          </LabelInputContainer>
          <span className="text-neutral-800 dark:text-neutral-200">{result}</span>
          <button
            className="mt-4 bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Send &rarr;
            <BottomGradient />
          </button>

        </form>
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

        <div className="flex flex-col space-y-4">
          <Link href={"https://github.com/FardinKhan5"} target={"_blank"} >
            <button
              className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            >
              <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                GitHub
              </span>
              <BottomGradient />
            </button>
          </Link>
          <Link href={"https://linkedin.com/in/fardin-khan-93a7a7229/"} target={"_blank"}>
            <button
              className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
              type="submit"
            >
              <FaLinkedin className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                Linkedin
              </span>
              <BottomGradient />
            </button>
          </Link>
          <Link href={"https://www.instagram.com/i_am_fardink5/"} target={"_blank"}>
            <button
              className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
            >
              <FaInstagram className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
              <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                Instagram
              </span>
              <BottomGradient />
            </button>
          </Link>
        </div>
      </div>
    </div>

  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};


export default Contact