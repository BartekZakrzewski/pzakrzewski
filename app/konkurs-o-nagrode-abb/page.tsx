"use client";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

const Page = () => {
    return (
        <div className={`z-0`}>
            <main className={`w-full bg-[url('https://images.unsplash.com/photo-1636291764961-8087583150cc?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] gap-7 h-svh bg-cover bg-center grid place-content-center `}>
                <h1 className={`text-white font-bold text-xl md:text-3xl xl:text-5xl relative before:w-20 before:h-2 md:before:w-24 md:before:h-2 xl:before:w-32 xl:before:h-3 before:bg-red-700 before:absolute before:-top-5 before:left-[50%] before:-translate-x-[50%]`}>
                    Stwórzmy razem dobry klimat
                </h1>
                <div className={`flex flex-col items-center gap-2 text-slate-950 font-medium text-sm md:text-md lg:text-lg`}>
                    <span>
                        XXI edycja 2023/2024
                    </span>
                    <span>
                        Zgłoś się do Konkursu o Nagrodę ABB
                    </span>
                    <Link href={`/konkurs-o-nagrode-abb#`} className={buttonVariants({ variant: 'outline' })}>Wypełnij formularz</Link>
                </div>
            </main>
        </div>
    )
}

export default Page;