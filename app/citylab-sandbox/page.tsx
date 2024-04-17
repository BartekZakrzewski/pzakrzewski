import Image from "next/image";
import { citylab_sandbox, circular_info } from "@/lib/data";

const Page = () => {
    return (
        <div className={`z-0 bg-[url('/images/Background4.png')] bg-fixed bg-cover bg-center space-y-20`}>
            <main className={`w-full grid place-content-center h-screen`}>
                <h1 className={`text-white font-bold text-xl md:text-3xl xl:text-6xl relative before:w-20 before:h-2 md:before:w-24 md:before:h-2 xl:before:w-32 xl:before:h-3 before:bg-red-700 before:absolute before:-top-5 before:left-[50%] before:-translate-x-[50%] text-center`}>
                    Łódzka Piaskownica CityLab -  Ekosystem Innowacji, Edukacji i Współpracy
                </h1>
            </main>

            <section className={`p-3 bg-white/80 rounded-xl flex flex-col gap-10 w-full md:flex-row`}>
                <ul className={`grid gap-10 font-bold w-full md:gap-2 md:w-3/4`}>
                    {
                        citylab_sandbox.map(({el}, index) => (
                            <li key={index}>
                                {el}
                            </li>
                        ))
                    }
                </ul>
                <div>
                    <div className={`text-white w-full rounded-t-xl bg-black p-3 font-bold text-xl`}>
                        Łódzka „Piaskownica” Citylab („ŁPC”)
                    </div>
                    <div>
                        <Image src={`/images/Graphic4.png`} alt="123" width={0} height={0} sizes="100vw" className={`w-full h-auto rounded-b-xl`} />
                    </div>
                </div>
            </section>
            
            <section className={`flex flex-col lg:flex-row items-center justify-center md:gap-64 md:pb-20 md:pt-20 bg-white/70 rounded-xl`}>
                <ul className={`w-full md:w-96 aspect-square md:border-2 md:border-red-500 rounded-full relative text-white space-y-5 lg:ml-64 md:space-y-0`}>
                    <li className={`md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-64 w-full text-center font-bold text-red-800 bg-white/70 p-3 text-xl rounded-xl`}>
                        Łódzka „Piaskownica” Citylab („ŁPC”)  - Propozycja testów  i innowacji
                    </li>
                    {
                        circular_info.map(({icon, text}, index) => (
                            <li key={index} className={`md:absolute 
                            ${index == 0 && 'md:-top-16 md:-translate-x-[50%] md:left-[50%]'} 
                            ${index == 1 && 'md:top-0 md:-right-[50%]'} 
                            ${index == 2 && 'md:top-[50%] md:-translate-y-[50%] md:-right-[60%]'} 
                            ${index == 3 && 'md:bottom-0 md:-right-[50%]'} 
                            ${index == 4 && 'md:-bottom-16 md:-translate-x-[50%] md:left-[50%]'} 
                            ${index == 5 && 'md:bottom-0 md:-left-[40%]'} 
                            ${index == 6 && 'md:bottom-[50%] md:translate-y-[50%] md:-left-[60%]'} 
                            ${index == 7 && 'md:top-0 md:-left-[30%]'} 
                            md:max-w-[60%] text-black w-full md:w-auto flex items-center md:justify-center gap-2 font-bold drop-shadow-2xl md:text-center`}>
                                <div className={`text-6xl`}>
                                    {icon}
                                </div>
                                <p>
                                    {text}
                                </p>
                            </li>
                        ))
                    }
                </ul>
                <Image src="/images/Graphic5.jpg"  alt="123" width={0} height={0} sizes="100vw" className={`w-[50%] lg:w-[25%] h-auto rounded-xl`} />
            </section>

            {/* <section>
                <h1 className={`text-white font-bold text-xl md:text-3xl xl:text-6xl relative before:w-20 before:h-2 md:before:w-24 md:before:h-2 xl:before:w-32 xl:before:h-3 before:bg-red-700 before:absolute before:-top-5 before:left-[50%] before:-translate-x-[50%] text-center mb-5`}>
                    Kalendarium ŁPC
                </h1>

                <div className={`hidden lg:grid grid-cols-4 bg-white/80 p-10 relative after:absolute after:w-full after:h-1 after:bg-black after:bottom-3 gap-3 rounded-xl`}>
                    <div className={`relative pb-2 after:absolute after:w-4 after:aspect-square after:rounded-full after:bg-black after:-bottom-8
                    before:absolute before:w-full before:h-6 before:content-['Marzec'] before:text-black/80 before:font-bold before:italic before:-bottom-4`}>
                        <p>
                            Zbiór doświadczeń zdobytych podczas wdrażania rozwiązań SmartCity
                        </p>
                        <Image src="/images/Graphic6.png"  alt="123" width={0} height={0} sizes="100vw" className={`w-1/2 h-auto rounded-xl`} />
                        <p>
                            Łódź 15-minutowe cyfrowe miasto
                        </p>
                    </div>

                    <div className={`relative pb-2 after:absolute after:w-4 after:aspect-square after:rounded-full after:bg-black after:-bottom-8
                    before:absolute before:w-full before:h-6 before:content-['Maj'] before:text-black/80 before:font-bold before:italic before:-bottom-4`}>
                        <p>
                            I tak jak z każdą nową technologią — ten, kto pierwszy ją pozna i zrozumie, ten szybciej wykorzysta tworzone przez nią szanse i ograniczy potencjalne zagrożenia —Magdalena Kotlarczyk, dyrektorka krajowa Google Poland. W Polsce działa wiele odnoszących sukcesy małych i średnich przedsiębiorstw. To one generują prawie połowę naszego PKB.
                        </p>
                        <Image src="/images/Graphic7.png"  alt="123" width={0} height={0} sizes="100vw" className={`w-1/2 h-auto rounded-xl`} />
                        <p>
                            AI i E-commerce podstawą gospodarki cyfrowej <br /> Google @ Łódź
                        </p>
                    </div>

                    <div className={`relative pb-2 after:absolute after:w-4 after:aspect-square after:rounded-full after:bg-black after:-bottom-8
                    before:absolute before:w-full before:h-6 before:content-['Czerwiec-Sierpień'] before:text-black/80 before:font-bold before:italic before:-bottom-4`}>
                        <p>
                             Zbadanie łódzkiego przemysłu
                            <ol className={`list-decimal ml-5`}>
                                <li>
                                    Czy firmy działają wystarczająco szybko dzięki inicjatywom Przemysłu 4.0.
                                </li>
                                <li>
                                    Zapoznanie się z różnicami między Przemysłem 4.0, inteligentną produkcją i transformacją cyfrową.
                                </li>
                                <li>
                                    Zrozumienie korzyści płynących z Przemysłu 4.0.
                                </li>
                            </ol>
                        </p>
                        <Image src="/images/Graphic8.png"  alt="123" width={0} height={0} sizes="100vw" className={`w-1/2 h-auto rounded-xl`} />
                        <p>
                            Przemysł 4.0 @ Łódź <br /> Badanie i rekomendacje Smart Industry Readiness Index (SIRI) by INCIT
                        </p>
                    </div>

                    <div className={`relative pb-2 after:absolute after:w-4 after:aspect-square after:rounded-full after:bg-black after:-bottom-8
                    before:absolute before:w-full before:h-6 before:content-['Wrzesień'] before:text-black/80 before:font-bold before:italic before:-bottom-4`}>
                        <p>
                            Future Mobility – miejska mobilność autonomiczna
                        </p>
                        <Image src="/images/Graphic9.png"  alt="123" width={0} height={0} sizes="100vw" className={`w-1/2 h-auto rounded-xl`} />
                    </div>
                </div>
                {/*==========MOBILE==========*/}
                {/* <div className={`lg:hidden grid grid-rows-4 p-10 pr-2 pl-10 bg-white/70 rounded-xl
                relative before:absolute before:w-1 before:h-full before:bg-black before:left-2`}>
                    <div className={`relative flex pb-2 items-start justify-between
                    before:absolute before:w-4 before:aspect-square before:bg-black before:rounded-full before:-left-9 before:top-1`}>
                        <p>
                            Zbiór doświadczeń zdobytych podczas wdrażania rozwiązań SmartCity
                            <br />
                            <span className={`text-red-600 font-semibold`}>Łódź 15-minutowe cyfrowe miasto</span>
                            <br />
                            <span className={`text-black/80 font-bold italic`}>
                                Marzec
                            </span>
                        </p>
                        <Image src="/images/Graphic6.png"  alt="123" width={0} height={0} sizes="100vw" className={`w-1/2 md:w-1/4 h-auto rounded-xl`} />
                    </div>
                    
                    <div className={`relative flex pb-2 items-start justify-between
                    before:absolute before:w-4 before:aspect-square before:bg-black before:rounded-full before:-left-9 before:top-1`}>
                        <p>
                            I tak jak z każdą nową technologią — ten, kto pierwszy ją pozna i zrozumie, ten szybciej wykorzysta tworzone przez nią szanse i ograniczy potencjalne zagrożenia —Magdalena Kotlarczyk, dyrektorka krajowa Google Poland. W Polsce działa wiele odnoszących sukcesy małych i średnich przedsiębiorstw. To one generują prawie połowę naszego PKB. <br />
                            <span className={`text-red-600 font-semibold`}>AI i E-commerce podstawą gospodarki cyfrowej <br /> Google @ Łódź </span>
                            <br />
                            <span className={`text-black/80 font-bold italic`}>
                                Maj
                            </span>
                        </p>
                        <Image src="/images/Graphic7.png"  alt="123" width={0} height={0} sizes="100vw" className={`w-1/2 md:w-1/4 h-auto rounded-xl`} />
                    </div>

                    <div className={`relative flex pb-2 items-start justify-between
                    before:absolute before:w-4 before:aspect-square before:bg-black before:rounded-full before:-left-9 before:top-1`}>
                        <p>
                             Zbadanie łódzkiego przemysłu
                            <ol className={`list-decimal ml-5`}>
                                <li>
                                    Czy firmy działają wystarczająco szybko dzięki inicjatywom Przemysłu 4.0.
                                </li>
                                <li>
                                    Zapoznanie się z różnicami między Przemysłem 4.0, inteligentną produkcją i transformacją cyfrową.
                                </li>
                                <li>
                                    Zrozumienie korzyści płynących z Przemysłu 4.0.
                                </li>
                            </ol>
                            <span className={`text-red-600 font-semibold`}>Przemysł 4.0 @ Łódź <br /> Badanie i rekomendacje Smart Industry Readiness Index (SIRI) by INCIT</span>
                            <br />
                            <span className={`text-black/80 font-bold italic`}>
                                Czerwiec - Sierpień
                            </span>
                        </p>
                        <Image src="/images/Graphic8.png"  alt="123" width={0} height={0} sizes="100vw" className={`w-1/2 md:w-1/4 h-auto rounded-xl`} />
                    </div>

                    <div className={`relative flex pb-2 items-start justify-between
                    before:absolute before:w-4 before:aspect-square before:bg-black before:rounded-full before:-left-9 before:top-1`}>
                        <p>
                            <span className={`text-red-600 font-semibold`}>Future Mobility – miejska mobilność autonomiczna</span>
                            <br />
                            <span className={`text-black/80 font-bold italic`}>
                                Wrzesień
                            </span>
                        </p>
                        <Image src="/images/Graphic9.png"  alt="123" width={0} height={0} sizes="100vw" className={`w-1/2 md:w-1/4 h-auto rounded-xl`} />
                    </div>
                </div> */}

            {/* </section> */}
        </div>
    )
}

export default Page;