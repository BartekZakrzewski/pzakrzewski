import { FaGraduationCap, FaSchool, FaTrophy, FaFileImport } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
import { CiMedal, CiTrophy  } from "react-icons/ci";

export const prizes = [
    {
        title: "Wyróżnienie",
        prize: "15 000 PLN",
        icon: <CiMedal />,
    },
    {
        title: "Nagroda główna",
        prize: "30 000 PLN",
        icon: <CiTrophy  />,
    },
    {
        title: "Wyróżnienie",
        prize: "15 000 PLN",
        icon: <CiMedal />,
    }
];

export const fields = [
    "Automatyka i diagnostyka przemysłowa","Diagnostyka predykcyjna urządzeń i systemów przemysłowych","Energoelektronika i systemy sterowania w układach napędowych","Technologie wykorzystujące uczenie maszynowe i systemy sztucznej inteligencji","Analityka i analiza danych w zastosowaniach przemysłowych","Nanotechnologia i inżynieria materiałowa w zastosowaniach przemysłowych","Technologie i systemy autonomiczne","Infotronika, elektronika oraz zaawansowane technologie sensorowe","Obliczenia rozproszone (cloud computing)"
];

export const quotes = [
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
];

export const facts = [
    {
        icon: <FaGraduationCap />,
        num: 51,
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
];

export const schedule = [
    {
        title: "ETAP I",
        icon: <FaFileImport />,
        list: [
            "do 10.12.2023 - Termin nadsyłania zgłoszeń",
            "do 31.01.2024 - Ogłoszenie wyników I Etapu"
        ],
    },
    {
        title: "ETAP II",
        icon: <GrCertificate />,
        list: [
            "od 31.01.2024 do 28.02.2024 - Termin nadsyłania prac",
            "od 28.02.2024 - Przegląd i ocena prac"
        ],
    },
    {
        title: "WYNIKI",
        icon: <CiMedal />,
        list: [
            "do 30.04.2024 - Powiadomienie Laureatów Konkursu pocztą elektroniczną",
            "Czerwiec 2024 - Oficjalne ogłoszenie Laureatów Konkursu na stronach",
            "Czerwiec 2024 – Oficjalne wręczenie nagród – gala"
        ],
    },
];

export const badges = [
    {
        href: '/#',
        text: 'Regulamin konkursu'
    },
    {
        href: '/#',
        text: 'Klauzula informacyjna'
    },
    {
        href: '/#',
        text: 'Załącznik nr 1'
    },
    {
        href: '/#',
        text: 'Załącznik nr 2'
    },
    {
        href: '/#',
        text: 'Plakat konkursu'
    },
];

export const winners = [
    {
        name: "Mgr inż. Marita Pigłowska",
        prize: "15 000 PLN",
        title: "Wyróżnienie",
        icon: <CiMedal />,
        caption: "Politechnika Poznańska Wydział Technologii Chemicznej. Wyróżnienie za pracę magisterską, pt.: „Comparison of the electrochemical activity of thermally modified starches of various origins with graphene nanoplatelets and graphene in lithium-ion battery.” Promotor pracy: dr inż. Beata Kurc",
    },
    {
        name: "Dr inż. Maksym Figat",
        prize: "30 000 PLN",
        title: "Nagroda Główna",
        icon: <CiTrophy  />,
        caption: "Politechnika Warszawska Wydział Elektroniki i Technik Informacyjnych. Nagroda główna za pracę doktorską, pt.: „Automatic generation of robotic system controllers based on a specification.” Promotor pracy: prof. dr hab. Cezary Zieliński",
    },
    {
        name: "Dr inż. Julia Radwan-Pragłowska",
        prize: "15 000 PLN",
        title: "Wyróżnienie",
        icon: <CiMedal />,
        caption: "Politechnika Krakowska im. Tadeusza Kościuszki Wydział Inżynierii i Technologii Chemicznej. Wyróżnienie za pracę doktorską, pt.: „Mikrofalowa synteza i badanie właściwości nowych biomateriałów chitozanowych jako uniwersalnych wyrobów medycznych.” Promotor pracy: prof. dr hab. inż. Dariusz Bogdał",
    },
]