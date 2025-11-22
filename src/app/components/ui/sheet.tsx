import React from "react";
import { IoMenuSharp } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { sheetClose } from "@/app/book/store";
interface sheet {
  home: string;
  about: any;
  contact: string;
  projects: string;
}
function sheet({ home, about, contact, projects }: sheet) {
  const sheetChack = useSelector((state: any) => state.sheetClose.close);
  const dispatch = useDispatch();
  const handelClose = () => {
    dispatch(sheetClose.close());
  };
  // dispatch(sheetClose.close());

  return (
    <Sheet>
      <SheetTrigger>
        <IoMenuSharp />
      </SheetTrigger>
      {sheetChack ? (
        <SheetContent
          className="  backdrop-blur-sm
  backdrop-saturate-150
  bg-white/15 dark:bg-black/25
  border-t border-white/20 dark:border-white/10
  shadow-[0_-8px_32px_rgba(0,0,0,0.45)]"
        >
          <SheetHeader>
            <SheetTitle> </SheetTitle>
            <SheetDescription>
              <div className=" flex flex-col gap-5 h-[200px] w-full mt-10 justify-center items-center   ">
                <Link
                  href={home}
                  className="bg-transparent border-none text-white hover:text-blue-400 transition-colors duration-200"
                >
                  Home
                </Link>
                <Link
                  href={about}
                  className="bg-transparent border-none text-white hover:text-blue-400 transition-colors duration-200"
                >
                  About
                </Link>
                <Link
                  href={projects}
                  className="bg-transparent border-none text-white hover:text-blue-400 transition-colors duration-200"
                >
                  Projects
                </Link>
                <Link
                  href={contact}
                  className="bg-transparent border-none text-white hover:text-blue-400 transition-colors duration-200"
                >
                  Contact
                </Link>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      ) : null}
    </Sheet>
  );
}

export default sheet;
