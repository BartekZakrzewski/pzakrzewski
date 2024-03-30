"use client";

import Image from "next/image";
import { FaArrowDown } from "react-icons/fa";
import { sharing_values } from "@/lib/data";

const Page = () => {
    return (
        <div className={`z-0 bg-[url('/images/Background3.png')] bg-fixed bg-cover bg-center`}>
            <main className={`w-full relative h-screen grid place-content-center p-2 md:px-10`}>
                <h1 className={`text-white font-bold text-xl md:text-3xl xl:text-6xl relative before:w-20 before:h-2 md:before:w-24 md:before:h-2 xl:before:w-32 xl:before:h-3 before:bg-red-700 before:absolute before:-top-5 before:left-[50%] before:-translate-x-[50%] text-center`}>
                    Dialog sektorowy, oparty na wspólnych wartościach zapewnia efekt synergii
                </h1>

                <div className={`absolute bottom-2 w-full flex justify-center items-center`}>
                    <a href="#description" className={`text-white text-4xl opacity-50 animate-bounce`}>
                        <FaArrowDown />
                    </a>
                </div>
                
            </main>

            <section id="description" className={`w-full grid grid-cols-1 md:grid-cols-3 p-3 pt-10 bg-white/70 rounded-t-2xl`}>
                <div className={`flex w-full flex-col p-3`}>
                    <h3 className={`p-3 underline text-lg font-bold`}>
                        Synergia społeczności
                    </h3>   
                    <Image src={`/images/Graphic1.png`} alt="123" width={0} height={0} sizes="100vw" className={`w-full rounded-xl`} />
                </div>
                <div className={`p-3 w-full flex flex-col`}>
                    <h3 className={`p-3 underline text-lg font-bold`}>
                        Wspólna priorytezacja
                    </h3>
                    <div className={`flex gap-2`}>
                        <Image src={`/images/Graphic2.png`} alt="123" width={0} height={0} sizes="100vw" className={`w-full h-auto rounded-xl`} />
                        <Image src={`/images/Graphic3.png`} alt="123" width={0} height={0} sizes="100vw" className={`w-[30%] h-auto rounded-xl`} />
                    </div>
                </div>
                <div className={`p-3`}>
                    <h3 className={`p-3 underline text-lg font-bold`}>
                        Współdzielenie wartości
                    </h3>
                    <ul className={`space-y-10`}>
                        {
                            sharing_values.map(({icon, desc}, index) => (
                                <li key={index} className={`flex items-center gap-2`}>
                                    <span className={`p-3 rounded-full text-red-600 text-2xl bg-slate-300/50`}>
                                        {icon}
                                    </span>
                                    <p>
                                        {desc}
                                    </p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </section>

        </div>
    )
}

export default Page;