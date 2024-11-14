"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
        <MenuItem setActive={setActive} active={active} item="Home">
        </MenuItem>
        </Link>
        <Link href={"#About"}>
        <MenuItem setActive={setActive} active={active} item="About">
        </MenuItem>
        </Link>
        <Link href={"#Skills"}>
        <MenuItem setActive={setActive} active={active} item="Skills">
        </MenuItem>
        </Link>
        <Link href={"#Projects"}>
        <MenuItem setActive={setActive} active={active} item="Projects">
        </MenuItem>
        </Link>
        <Link href={"#Education"}>
        <MenuItem setActive={setActive} active={active} item="Education">
        </MenuItem>
        </Link>
        <Link href={"#Contact"}>
        <MenuItem setActive={setActive} active={active} item="Contact">
        </MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar
