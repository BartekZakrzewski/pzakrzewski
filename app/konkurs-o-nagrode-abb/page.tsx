import { social_capital } from "@/lib/data";

const Page = () => {
    return (
        <div className={`z-0`}>
            <main className={`w-full bg-[url('https://images.unsplash.com/photo-1636291764961-8087583150cc?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] gap-7  bg-cover bg-center flex flex-col pt-20 min-h-screen lg:pt-40`}>
                <h1 className={`text-white text-center font-bold text-xl md:text-3xl xl:text-5xl relative before:w-20 before:h-2 md:before:w-24 md:before:h-2 xl:before:w-32 xl:before:h-3 before:bg-red-700 before:absolute before:-top-5 before:left-[50%] before:-translate-x-[50%] px-2`}>
                    Kapitał Ludzki i Społeczny siłą napędową odważnego cyfrowego miasta
                </h1>

                <div className={`flex flex-col p-10 gap-5 lg:flex-row lg:space-x-5 lg:justify-center`}>
                    {
                        social_capital.map((el, index) => (
                            <div className={`flex gap-5 lg:max-w-60 lg:flex-col items-center lg:gap-10`} key={index}>
                                <div className={`hidden sm:flex bg-slate-300/85 text-2xl p-5 sm:text-6xl sm:p-10 rounded-full`}>
                                    {el.icon}
                                </div>
                                <div className={`flex flex-col gap-4 p-5 bg-slate-300/85 rounded-md lg:h-full`}>
                                    <h3 className={`font-bold text-xl flex items-center gap-1`}>
                                        {el.title}
                                        <div className={`flex bg-white/80 justify-center items-center p-2 rounded-full sm:hidden`}>
                                            {el.icon}
                                        </div>
                                    </h3>
                                    <p>
                                        {el.desc}
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </main>
        </div>
    )
}

export default Page;