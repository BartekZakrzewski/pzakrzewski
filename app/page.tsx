import Image from "next/image"

const Home = () => {
  return (
    <div className={`z-0`}>
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
          <div className={`text-slate-950 font-bold text-xl py-3 px-10 bg-slate-300 flex flex-col items-center w-full md:max-w-96 md:min-h-full md:justify-center gap-2`}>
              <h3 className={`text-2xl text-center`}>
                Nagroda Główna
              </h3>
              <h2 className={`font-bold text-red-600 text-5xl text-center`}>
                30K
              </h2>
              <h3 className={`text-2xl mb-10 text-center`}>
                Wsparcie dla rozwoju naukowego
              </h3>
              <p className={`font-light text-slate-900 text-center`}>
                Wygrana stanowi dla laureatów i laureatek zarówno istotną motywację do kontynuowania kariery naukowej, jak również buduje prestiż wokół ich działalności i pozwala na sfinansowanie projektów.
              </p>
          </div>

          <div className={`flex flex-col items-center md:items-end p-10 md:pt-0 gap-10`}>
            <Image src={'/images/engineer1.jpg'} width={1920} height={1080} alt="engineer" className={`max-w-[90%]`} />
            <Image src={'/images/engineer2.jpg'} width={1920} height={1080} alt="engineer" className={`max-w-[90%]`} />
          </div>
        </div>
      </section>
      
    </div>
  )
}

export default Home
