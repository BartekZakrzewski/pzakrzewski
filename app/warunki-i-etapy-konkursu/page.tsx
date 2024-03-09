"use client";

import { prizes, fields, schedule, badges } from "@/lib/data";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { Parallax } from "react-parallax";
import { Badge } from "@/components/ui/badge";

const Page = () => {
    return (
        <div className={`z-0`}>
            <main className={`w-full bg-[url('https://images.unsplash.com/photo-1508791290064-c27cc1ef7a9a?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] aspect-[4/3] md:aspect-video lg:aspect-[300/100] bg-cover bg-center grid place-content-center `}>
                <h1 className={`text-white font-bold text-xl md:text-3xl xl:text-6xl relative before:w-20 before:h-2 md:before:w-24 md:before:h-2 xl:before:w-32 xl:before:h-3 before:bg-red-700 before:absolute before:-top-5 before:left-[50%] before:-translate-x-[50%]`}>
                Wyjątkowa inicjatywa dla społeczności
                </h1>
            </main>

            <section className={`text-slate-200 w-[90%] md:w-[75%] lg:w-[50%] mx-auto grid place-items-center gap-10 py-3`}>
                <h2 className={`font-bold text-lg md:text-2xl lg:text-3xl`}>
                    Nagrody
                </h2>
                <p className={`font-light text-center`}>
                    Fundatorem nagrody jest Dyrektor Centrum Technologicznego ABB oraz Prezes Zarządu ABB Sp. z o.o. Nagrody przyznane będą za opracowanie indywidualne lub zbiorowe. Szczegółowe zasady przyznawania nagród zawarte są w Regulaminie Konkursu.
                </p>
                <h3 className={`font-bold text-md md:text-lg lg:text-xl md:mb-12 mb-0`}>
                    W Konkursie przewidziano następujące nagrody:
                </h3>
                <div className={`grid place-items-center gap-8 md:flex`}>
                    {
                        prizes.map((prize, index) => (
                            <div className={`${index == 1 && 'md:-translate-y-11'} grid place-items-center text-nowrap`} key={index}>
                                <span className={`text-red-600 ${index == 1 ? 'text-4xl font-bold' : 'text-3xl'}`}>
                                    {prize.prize}
                                </span>
                                <span className={`${index == 1 ? 'text-xl' : 'text-xl'}`}>
                                    {prize.title}
                                </span>
                                <div className={`${index == 1 ? 'text-8xl' : 'text-7xl'}`}>
                                    {prize.icon}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>

            <Parallax blur={5} strength={300} bgImage={`https://images.unsplash.com/photo-1581093806997-124204d9fa9d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`} bgStyle={{objectFit: "cover"}} bgClassName={`object-cover opacity-70`}>
                <div className={`md:w-[50%] w-full mx-auto`}>
                    <div className={`md:mx-auto lg:mx-0 w-full bg-white/50 h-full p-5`}>
                        <h3 className={`font-bold text-2xl mb-5`}>
                            Uwzględniane dziedziny
                        </h3>
                        <p className={`font-light text-lg`}>
                            Konkurs obejmuje obronione prace magisterskie, inżynierskie oraz doktorskie, napisane w języku polskim lub angielskim, z następujących dziedzin:
                        </p>
                        <ul className={`list-disc p-5`}>
                            {
                                fields.map((field, index) => (
                                    <li className={``} key={index}>
                                        {field}
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </Parallax>

            <section className={``}>
                <h2 className={`text-3xl text-white font-bold text-center p-10`}>
                    Etapy konkursu
                </h2>
                <div className={`w-full lg:w-[75%] md:mx-auto flex flex-col text-white`}>

                    <div className={`flex flex-col lg:flex-row lg:w-full md:w-[50%] w-full mx-auto px-4 md:px-0`}>
                        <div className={`bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] aspect-square w-full bg-center bg-cover flex justify-center font-bold text-3xl text-center text-white`}>
                            I etap – zgłoszenia do 10.12.2023
                        </div>
                        <div className={`w-full aspect-square h-full text-sm`}>
                            <h4 className={`font-bold text-2xl mb-2 p-2`}>01</h4>
                            <p className={`mb-2 p-2`}>
                                Etap ten polega na wypełnieniu formularza zgłoszeniowego (Załącznik nr 1) oraz klauzuli informacyjnej wraz z wyrażeniem zgody na przetwarzanie danych osobowych i przesłaniu ich wraz ze streszczeniem pracy, pocztą elektroniczną na adres: <a href="mailto:konkurs@pl.abb.com" className={`underline`}>konkurs@pl.abb.com</a>
                            </p>
                            <p className={`mb-5 p-2`}>
                                Do II etapu zostanie zakwalifikowanych maksymalnie 30 prac. Laureaci I Etapu zostaną powiadomieni za pośrednictwem poczty elektronicznej do dnia 31.01.2024 roku.
                            </p>
                            <Link href={`/warunki-i-etapu-konkursu#`} className={`m-2 ${buttonVariants({ variant: 'contest' })}`}>Wypełnij formularz</Link>
                        </div>
                    </div>

                    <div className={`flex flex-col-reverse lg:flex-row lg:w-full md:w-[50%] w-full mx-auto px-4 md:px-0`}>
                        <div className={`w-full aspect-square text-sm`}>
                            <h4 className={`font-bold text-2xl mb-2 p-2`}>02</h4>
                            <p className={`mb-5 p-2`}>
                                W tym etapie Konkursu wezmą udział tylko Laureaci I Etapu. 
                            </p>
                            <p className={`mb-2 p-2`}>
                                Etap ten polega na wypełnieniu formularza zgłoszeniowego (Załącznik nr 2) i przesłaniu go wraz z egzemplarzem pracy w formacie PDF pocztą elektroniczną na adres <a href="mailto:konkurs@pl.abb.com" className={`underline`}>konkurs@pl.abb.com</a>
                            </p>
                        </div>
                        <div className={`bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] aspect-square w-full bg-center bg-cover flex justify-center font-bold text-3xl text-center text-white`}>
                            II etap – zgłoszenia do 28.02.2024
                        </div>
                    </div>

                </div>

                <div className={`text-white w-full md:w-3/4 mx-auto space-y-10 mt-10 px-10 md:px-0`}>
                    <h3 className={`text-white font-bold text-2xl text-center`}>
                        Szczegółowy harmonogram konkursu
                    </h3>
                    
                    <div className={`text-white grid grid-cols-1 lg:grid-cols-3 gap-10 lg:place-items-start`}>
                        {
                            schedule.map((element, index) => (
                                <div key={index} className={`grid grid-cols-1 gap-4 place-items-center`}>
                                    <div className={`text-7xl opacity-90`}>
                                        {element.icon}
                                    </div>
                                    <h4 className={`text-2xl font-bold text-slate-300`}>
                                        {element.title}
                                    </h4>
                                    <ul className={`list-disc text-md font-light`}>
                                        {
                                            element.list.map((el, i) => (
                                                <li key={i} className={``}>
                                                    {el}
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                                
                            ))
                        }
                    </div>

                    <div className={`text-center font-light text-md`}>
                        <span className={`font-semibold`}>Kontakt:</span> Zapytania proszę wysyłać wyłącznie pocztą elektroniczną na adres: <a href="mailto:konkurs@pl.abb.com" className={`underline`}>konkurs@pl.abb.com</a>
                    </div>

                    <h4 className={`font-bold text-2xl text-center`}>
                        Załączniki do pobrania
                    </h4>

                    <div className={`pb-10 flex items-center justify-center space-x-2`}>
                        {
                            badges.map((badge, index) => (
                                <Badge variant={'link'} key={index}>
                                    <a href={badge.href}>
                                        {badge.text}
                                    </a>
                                </Badge>
                            ))
                        }
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Page;