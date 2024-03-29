"use client";

import { Circle } from "../components/index";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { bulletpoints_one, bulletpoints_two } from "../lib/data";
import { FaTree, FaPeopleGroup } from "react-icons/fa6";

const Home = () => {
  const [isScrolled, setScrolled] = useState<boolean>(false);
  const scrolledRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const scrolledObserver = new IntersectionObserver(entries => {
      const entry = entries[0];
      setScrolled(entry.isIntersecting);
    })

    if(scrolledRef.current) scrolledObserver.observe(scrolledRef.current);
    return () => {
      if(scrolledRef.current) scrolledObserver.unobserve(scrolledRef.current);
    }
  }, [])

  return (
    <>
      <Image src={`https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`} alt="123" layout="fill" objectFit="cover" className={`-z-10 fixed top-0`}/>
      <main className={`w-full grid place-content-center p-56 z-10`}>
        <h1 className={`transition-all duration-100 text-white font-bold text-xl md:text-3xl xl:text-6xl relative before:h-2 md:before:h-2 xl:before:h-3 before:bg-red-700 before:absolute ${isScrolled ? 'before:w-10 md:before:w-12 xl:before:w-16 before:top-[50%] before:-left-24' : 'before:w-20 md:before:w-24 xl:before:w-32 before:-top-5 before:left-[50%] before:-translate-x-[50%]'}`}>
          Łódź „Ziemia Przemysłowego Ducha i Odważnych Pomysłów”
        </h1>
      </main>

      <section>
        <div className={`flex flex-col md:flex-row h-full p-2 md:p-10 lg:p-20 items-center`}>
          <Circle Icon={<FaTree />} text={'Spełnianie i wyprzedzanie oczekiwań i wymagań mieszkańców.'} />
          <div className={`bg-red-500 w-1 h-24 md:h-1 md:w-full`}></div>
          <Circle Icon={<FaPeopleGroup />} text={'W pełni połączone i zrównoważone systemy i usługi'} />
        </div>
      </section>

      <section ref={scrolledRef} className={`w-full p-3 flex flex-col space-y-10 md:space-y-0 md:flex-row md:space-x-10`}>
        <div className={`w-full bg-slate-300/70 rounded-md p-5`}>
          <ul className={`w-full flex flex-col space-y-3 list-disc pl-2`}>
            {
              bulletpoints_one.map((bp, index) => (
                <li className={``} key={index}>
                  {bp}
                </li>
              ))
            }
          </ul>
        </div>

        <div className={`w-full bg-slate-300/70 rounded-md p-5`}>
          <ul className={`w-full flex flex-col space-y-3 list-disc pl-2`}>
            {
              bulletpoints_two.map((bp, index) => (
                <li className={``} key={index}>
                  {bp}
                </li>
              ))
            }
          </ul>
        </div>
      </section>
      
    </>
  )
}

export default Home
