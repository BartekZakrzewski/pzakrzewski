import Link from 'next/link';
import { winners } from '../../lib/data';
import { buttonVariants } from '@/components/ui/button';

const Page = () => {
    return (
        <div className={`z-0`}>
            <main className={`landing__page w-full aspect-video bg-cover bg-center grid place-content-center `}>
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
                        winners.map((winner, index) => (
                            <div className={`${index == 1 && 'md:-translate-y-11'} grid items-start justify-items-center text-nowrap`} key={index}>
                                <span className={`italic opacity-95`}>
                                    {winner.name}
                                </span>
                                <span className={`text-red-600 ${index == 1 ? 'text-4xl font-bold' : 'text-3xl'}`}>
                                    {winner.prize}
                                </span>
                                <span className={`${index == 1 ? 'text-xl' : 'text-xl'}`}>
                                    {winner.title}
                                </span>
                                <div className={`${index == 1 ? 'text-8xl' : 'text-7xl'}`}>
                                    {winner.icon}
                                </div>
                                <p className={`text-wrap text-sm w-3/4 md:w-full`}>
                                    {winner.caption}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </section>

            <section>
                <h2 className={`text-2xl text-white font-bold text-center p-10`}>
                    Poznaj Laureatów edycji 2022/2023
                </h2>

                <div className={`w-full lg:w-[75%] md:mx-auto flex flex-col text-white`}>
                    <div className={`flex flex-col lg:flex-row lg:w-full md:w-[50%] w-full mx-auto px-4 md:px-0`}>
                        <div className={`bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] aspect-square w-full bg-center bg-cover flex justify-center font-bold text-3xl text-center text-white`}>
                            I etap – zgłoszenia do 10.12.2023
                        </div>
                        <div className={`w-full aspect-square h-full text-sm`}>
                            <h4 className={`font-bold text-2xl mb-2 p-2`}>Dr inż. Maksym Figat</h4>
                            <p className={`mb-2 p-2`}>
                                Zwycięzcą XX edycji konkursu został Dr Inż. Maksym Figat z Wydziału Elektroniki i Technik Informacyjnych Politechniki Warszawskiej. Promotorem nagrodzonej pracy doktorskiej pt: „Automatic generation of robotic system controllers based on a specification” był prof. dr hab. Cezary Zieliński.
                            </p>
                        </div>
                    </div>
                    <div className={`flex flex-col-reverse lg:flex-row lg:w-full md:w-[50%] w-full mx-auto px-4 md:px-0`}>
                        <div className={`w-full aspect-square text-sm`}>
                            <h4 className={`font-bold text-2xl mb-2 p-2`}>Mgr inż. Marita Pigłowska</h4>
                            <p className={`mb-2 p-2`}>
                                Jedno z wyróżnień trafiło do Mgr Inż. Marity Pigłowskiej z Wydziału Technologii Chemicznej Politechniki Poznańskiej za pracę magisterską pt: „Comparison of the electrochemical activity of thermally modified starches of various origins with graphene nanoplatelets and graphene in lithium-ion battery.” Promotorką pracy była dr inż. Beata Kurc.
                            </p>
                        </div>
                        <div className={`bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] aspect-square w-full bg-center bg-cover flex justify-center font-bold text-3xl text-center text-white`}>
                            II etap – zgłoszenia do 28.02.2024
                        </div>
                    </div>
                    <div className={`flex flex-col lg:flex-row lg:w-full md:w-[50%] w-full mx-auto px-4 md:px-0`}>
                        <div className={`bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] aspect-square w-full bg-center bg-cover flex justify-center font-bold text-3xl text-center text-white`}>
                            I etap – zgłoszenia do 10.12.2023
                        </div>
                        <div className={`w-full aspect-square h-full text-sm`}>
                            <h4 className={`font-bold text-2xl mb-2 p-2`}>Dr inż. Julia Radwan-Pragłowska</h4>
                            <p className={`mb-2 p-2`}>
                                Równolegle jury wyróżniło pracę Dr Inż. Julii Radwan-Pragłowskiej z Wydziału Inżynierii i Technologii Chemicznej Politechniki Krakowskiej im. Tadeusza Kościuszki, pt: „Mikrofalowa synteza i badanie właściwości nowych biomateriałów chitozanowych jako uniwersalnych wyrobów medycznych.” Promotorem pracy był prof. dr hab. inż. Dariusz Bogdał.
                            </p>
                        </div>
                    </div>

                </div>

                <p className={`text-white text-sm font-light text-center p-10`}>
                    Jury konkursu doceniło bardzo solidne podstawy teoretyczne wyróżnionych prac, jak i ich praktyczne zastosowanie. Zwrócono także uwagę na fakt, że przedstawione opracowania w znaczący sposób uzupełniają dotychczasową wiedzę w swoich dziedzinach.
                </p>
            </section>
        </div>
    )
}

export default Page;