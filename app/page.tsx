"use client";

import { Quote } from "../components/index";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useCountUp } from 'react-countup';
import { Parallax } from 'react-parallax';
import { FaGraduationCap, FaSchool, FaTrophy  } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";

const Home = () => {
  const [isVisible, setVisible] = useState<boolean>(false);
  const [staggerVisible, setStaggerVisible] = useState<boolean>(false);
  const [isFirstRender, setFirstRender] = useState<boolean>(true);
  const observerRef = useRef<null | HTMLHeadingElement>(null);
  const countUpRef = useRef<HTMLDivElement | null>(null);
  const staggerObserverRef = useRef<HTMLDivElement | null>(null);

  const { start } = useCountUp({
    ref: countUpRef,
    start: 7,
    end: 30,
    suffix: "K",
  });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      setVisible(entry.isIntersecting);
    })

    const staggerObserver = new IntersectionObserver(entries => {
      const entry = entries[0];
      setStaggerVisible(entry.isIntersecting);
    })

    if(staggerObserverRef.current) staggerObserver.observe(staggerObserverRef.current);
    if(observerRef.current) observer.observe(observerRef.current);
    return () => {
      if(observerRef.current) observer.unobserve(observerRef.current);
      if(staggerObserverRef.current) observer.unobserve(staggerObserverRef.current);
    }
  }, [])

  useEffect(() => {
    if(isVisible && isFirstRender) {
      start();
      if(isFirstRender) setFirstRender(false);
    }
  }, [isVisible])

  const quotes = [
    {
      quote: "Jeśli chodzi o wpływ konkursu na moją ścieżkę zawodową, to na pewno wyróżnienie w konkursie dało mi pewność siebie, wiarę w to, że jestem kompetentny do prowadzenia samodzielnej pracy badawczo-rozwojowej.",
      quoter: "MGR INŻ. PAWEŁ ZIELONKA, LAUREAT EDYCJI 2013/2014",
      offset: -1
    },
    {
      quote: "Poczułem się ogromnie doceniony, gdy okazało się, że Jury Konkursu doceniło właśnie moją pracę. Dla naukowca jest to ważny aspekt motywacyjny, pozwalający uwierzyć, że to, co robimy, ma jednak jakiś sens – a podczas pracy naukowej mamy niewątpliwie dużo momentów zwątpienia.",
      quoter: "DR HAB. INŻ. GRZEGORZ SOBOŃ, LAUREAT EDYCJI 2013/2014",
      offset: 0
    },
    {
      quote: "Od czasu zdobycia nagrody ABB udało mi się zdobyć finansowanie własnego projektu naukowego, poszerzyć międzynarodową sieć kontaktów i zdecydowanie zwiększyć dorobek naukowy.",
      quoter: "DR INŻ. MAREK WODZIŃSKI, LAUREAT EDYCJI 2021/2022",
      offset: 1
    }
  ]

  const facts = [
    {
      icon: <FaGraduationCap />,
      num: '51',
      delay: 0,
      desc: 'Liczba zaangażowanych uczelni',
    },
    {
      icon: <FaSchool />,
      num: '25',
      delay: 300,
      desc: 'Liczba miast biorących udział',
    },
    {
      icon: <FaTrophy />,
      num: '1,035,000',
      delay: 700,
      desc: 'Łączny koszt nagród',
    },
    {
      icon: <GrCertificate />,
      num: '2,283',
      delay: 1000,
      desc: 'Liczba nadesłanych prac',
    }
  ]

  return (
    <div className={`z-0 pt-12 md:pt-0`}>
      <main className={`landing__page w-full aspect-video bg-cover bg-center grid place-content-center `}>
        <h1 className={`text-white font-bold text-xl md:text-3xl xl:text-6xl relative before:w-20 before:h-2 md:before:w-24 md:before:h-2 xl:before:w-32 xl:before:h-3 before:bg-red-700 before:absolute before:-top-5 before:left-[50%] before:-translate-x-[50%]`}>
          Wyjątkowa inicjatywa dla społeczności
        </h1>
      </main>

      <section className={`h-full flex flex-col items-center`}>
        <div className={`text-white flex flex-col md:flex-row gap-10 w-full h-full py-5 px-8 md:px-32 lg:px-56`}>
          <p>
            Konkurs o nagrodę ABB organizowany jest przez Korporacyjne Centrum Technologiczne ABB już od 21 lat. Corocznie jury konkursu przyznaje nagrodę za najlepszą pracę inżynierską, magisterską lub doktorską, poruszającą tematykę jednej z dziedzin działalności Centrum.
          </p>
          <p>
            Jest on jednym z nielicznych przedsięwzięć, realizowanych przez podmiot niepubliczny na rzecz środowisk akademickich. Promując prace badawczo-rozwojowe, jest nie tylko rozpoznawalny, ale i ceniony w świecie naukowym.
          </p>
        </div>

        <div className={`w-full h-full flex flex-col md:flex-row md:items-stretch md:justify-between md:max-w-[75%]`}>
          <div className={`text-zinc-200 font-bold text-xl py-3 px-10 bg-black flex flex-col items-center w-full md:max-w-96 md:min-h-full md:justify-center gap-2`}>
              <h3 className={`text-2xl text-center`}>
                Nagroda Główna
              </h3>
              <h2 className={`font-bold text-red-600 text-5xl text-center`} ref={observerRef}>
                <div ref={countUpRef} />
              </h2>
              <h3 className={`text-2xl mb-10 text-center`}>
                Wsparcie dla rozwoju naukowego
              </h3>
              <p className={`font-light text-zinc-400 text-center`}>
                Wygrana stanowi dla laureatów i laureatek zarówno istotną motywację do kontynuowania kariery naukowej, jak również buduje prestiż wokół ich działalności i pozwala na sfinansowanie projektów.
              </p>
          </div>

          <div className={`flex flex-col items-center md:items-end p-10 md:pt-0 gap-10`}>
            <Image src={'/images/engineer1.jpg'} width={1920} height={1080} alt="engineer" className={`max-w-[90%]`} />
            <Image src={'/images/engineer2.jpg'} width={1920} height={1080} alt="engineer" className={`max-w-[90%]`} />
          </div>
        </div>
      </section>


      <Parallax blur={5} strength={300} bgImage={`https://images.unsplash.com/photo-1551135049-8a33b5883817?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`} bgStyle={{objectFit: "cover"}} bgClassName={`object-cover opacity-70`}>
        <div className={`h-screen relative quote sm:h-[75svh] grid grid-rows-3 md:grid-rows-none md:grid-cols-3 md:place-content-center w-full justify-items-start gap-2 p-2 `}>
          {quotes.map((q: {quote: string, quoter: string, offset: number}, index: number) => (
            <Quote quote={q.quote} quoter={q.quoter} offset={q.offset} key={index} />
          ))}
        </div>
      </Parallax>

      <section>
        <div className={`text-slate-300 flex flex-col items-center lg:items-start lg:flex-row justify-center gap-14 p-14`}>
          <h3 className={`text-white font-bold text-2xl`}>Budowanie wspólnej przyszłości</h3>
          <div className={`max-w-screen-sm flex flex-col gap-3`}>
            <p>
              Dla nas, jako globalnej firmy technologicznej, konkurs jest niepowtarzalną okazją do wsparcia nauki oraz manifestacją wartości, jakie reprezentujemy. 
            </p>
            <p>
              Dwudziestojednoletnie, aktywne zaangażowanie w rozwój przyszłych liderów inżynierii wyróżnia nas spośród innych firm i jest niewątpliwie powodem do dumy. Każda edycja jest świadectwem naszego zobowiązania do stworzenia lepszej przyszłości.
            </p>
            <p>
              Poznaj nas lepiej <a href="https://new.abb.com/pl" target="_blank" className={`underline`}>ABB Group. Leading digital technologies for industry — ABB Group (global.abb)</a>
            </p>
          </div>
        </div>

        <div ref={staggerObserverRef}>
          <h3 className={`text-white font-bold text-3xl text-center mb-10`}>
            Imponujące fakty o konkursie
          </h3>
          <div className={`flex flex-col lg:flex-row justify-around p-10 gap-10 lg:gap-0`}>
            {
              facts.map((fact, index) => (
                <div key={index} className={`text-white flex flex-col origin-bottom items-center delay-500 duration-500 ${staggerVisible ? 'scale-1 opacity-1' : 'scale-0 opacity-0'}`}>
                  <div className={`text-6xl mb-7 text-slate-200`}>{fact.icon}</div>
                  <span className={`text-red-600 font-bold text-3xl mb-1`}>{fact.num}</span>
                  <p className={`font-light text-slate-300`}>{fact.desc}</p>
                </div>
              ))
            }
          </div>
        </div>

      </section>
      
    </div>
  )
}

export default Home
