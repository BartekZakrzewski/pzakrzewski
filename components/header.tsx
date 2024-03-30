"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiMenu, HiOutlineX } from "react-icons/hi";

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const destinations = [
    {
      text: "15-minutowe cyfrowe miasto",
      slug: "/",
    },
    {
      text: "Kapitał Ludzki i Społeczny",
      slug: "/kapital-ludzki-i-spoleczny"
    },
    {
      text: "Dialog Sektorowy",
      slug: "/dialog-sektorowy",
    },
    {
      text: "CityLab Sandbox",
      slug: "/citylab-sandbox"
    }
  ];
  
  return (
    <nav className={`fixed w-full h-12 md:h-12 bg-slate-950/50 backdrop-blur-lg text-white z-50`}>
        <div className={`flex w-full h-full space-x-4 py-2 px-4 items-center justify-between md:justify-normal`}>
          <div className={`flex h-full space-x-4 items-center`}>
            <a href="/#">
              <Avatar>
                  <AvatarImage src="/images/Lodz-logo.jpg" />
                  <AvatarFallback>Przemysław Zakrzewski</AvatarFallback>
              </Avatar>    
            </a>
            <Separator orientation="vertical" />
          </div>

          <div className={`w-full h-full hidden md:flex items-center justify-around text-sm`}>
            {
              destinations.map((dest, index) => (
                <>
                  <Link href={`${dest.slug}`} key={index} className={`nav__link relative flex items-center justify-center h-full before:absolute before:w-full before:h-1 before:bg-red-700 before:bottom-0 before:origin-center before:duration-200 ease-linear ${pathname === dest.slug ? 'font-bold' : 'before:scale-x-0 hover:before:scale-x-100'}`}>
                    {dest.text}
                  </Link>
                  {index != 3 && 
                    <Separator orientation="vertical" className={`h-4 opacity-50`} key={index} />
                  }
                </>
                
              ))
            }
          </div>
          
          <button className={`menu__button md:hidden text-2xl`} onClick={() => setOpen(prev => !prev)}>
            <HiMenu />
          </button>
          
        </div>
        <div className={`mobile__menu absolute top-0 left-0 w-screen h-screen flex flex-col ${open ? 'translate-x-0' : 'translate-x-full'} p-8 bg-slate-950/95 backdrop-blur-sm md:hidden`}>
          <button className={`menu__button text-2xl w-full`} onClick={() => setOpen(prev => !prev)}>
            <HiOutlineX />
          </button>
          <div className={`flex flex-col h-full justify-normal py-5 gap-5 items-start`}>
            {
              destinations.map((dest, index) => (
                <div className={`w-full flex flex-col gap-4 duration-200 ease-linear hover:opacity-85  p-3 rounded-xl`} key={index}>
                  <Link href={`${dest.slug}`} className={`flex justify-start text-sm p-3 rounded-lg ${pathname === dest.slug ? 'bg-slate-800/70' : 'hover:bg-slate-800/50'}`} onClick={() => setOpen(prev => !prev)}>
                    {dest.text}
                  </Link>
                </div>
              ))
            }
          </div>
        </div>
    </nav>
  )
}

export default Header
