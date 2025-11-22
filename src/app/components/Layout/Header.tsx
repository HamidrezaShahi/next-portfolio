"use client";
import React from "react";
import { RadioButton } from "../ui/RadioButton";
import { usePathname } from "next/navigation";
import Sheet from "../ui/sheet";
import Link from "next/link";
import { log } from "console";
interface Header {
  home: string;
  about: any;
  contact: string;
  projects: string;
}
function Header({ home, about, contact, projects }: Header) {
  const path = usePathname();
  if (path == "/book") {
    console.log("url is", path);
  }
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="w-full flex justify-between bg-black p-4 items-center h-[10%] shadow mt-0">
        <div className="flex-1/2">
          <RadioButton />
        </div>

        <div className="hidden flex-1/2 sm:flex gap-5 justify-end">
          <Link
            href="#home "
            className="bg-transparent border-none text-white hover:text-blue-400 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href={"#about"}
            className="bg-transparent border-none text-white hover:text-blue-400 transition-colors duration-200"
          >
            About
          </Link>
          <Link
            href={"#projects "}
            className="bg-transparent border-none text-white hover:text-blue-400 transition-colors duration-200"
          >
            Projects
          </Link>
          <Link
            href={"#Contact"}
            className="bg-transparent border-none text-white hover:text-blue-400 transition-colors duration-200"
          >
            Contact
          </Link>
        </div>
        <div className="sm:hidden">
          <Sheet
            home={home}
            about={about}
            projects={projects}
            contact={contact}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
