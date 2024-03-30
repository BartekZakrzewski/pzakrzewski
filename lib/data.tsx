import { FaCity, FaConnectdevelop, FaHandshake, FaBoxOpen } from "react-icons/fa";
import { FaGear, FaOilWell } from "react-icons/fa6";
import { GrTechnology } from "react-icons/gr";
import { CiTrophy  } from "react-icons/ci";
import { MdElectricBike, MdFactory, MdAir } from "react-icons/md";
import { TbBuildingFactory, TbBuildingFactory2, TbPick, TbEngine } from "react-icons/tb";


export const bulletpoints_one = [
    "Komfort życia i dobrostan ekonomiczny",
    "Bezpieczeństwo",
    "Edukacja",
    "Mobilność",
    "Estetyczny wygląd",
    "Zrównoważony rozwój",
    "Efektywność energetyczna"
];

export const bulletpoints_two = [
    "Dzielnice i sąsiedztwa w duchu ESG, gospodarki cyrkularnej i zeroemisyjnej",
    "Przemysł X.0 zintegrowany z globalnym łańcuchem wartości",
    "Inteligentna transport, zintegrowana infrastruktura gotowa na nowy paradygmat mobilności",
    "Cyfrowe e-usługi miejskie,  „na wyciągnięcie telefonu” z punktu widzenia mieszkańca",
    "Usługi miejskie efektywne kosztowo dzięki „state-of-the-art” technologii przyszłości"
];

export const social_capital = [
    {
        icon: <FaCity />,
        title: 'Compact City',
        desc: 'Promowanie mądrego i przemyślanego zagęszczenia zabudowy miejskiej, efektywnego wykorzystanie przestrzeni, zmniejszania zależności od transportu samochodowego oraz tworzenie bardziej zrównoważonych, przyjaznych środowisku i efektywniejszych przestrzeni miejskich.',
    }, {
        icon: <CiTrophy />,
        title: 'Inclusive City',
        desc: 'Miasto otwarte, dostępne i równe dla wszystkich mieszkańców, niezależnie od ich pochodzenia, statusu społecznego, zdolności czy orientacji. Zapewnienie uczestnictwa wszystkich grup społecznych w życiu miejskim oraz eliminowaniu barier i nierówności.',
    }, {
        icon: <GrTechnology />,
        title: 'Connected City',
        desc: 'Technologia odgrywa kluczową rolę w zintegrowaniu różnych aspektów życia miejskiego. Miasto, w którym inteligentne systemy, technologie informacyjne i komunikacyjne są wykorzystywane w celu usprawnienia funkcjonowania, zwiększenia efektywności i poprawy jakości życia mieszkańców.',
    }, {
        icon: <MdElectricBike />,
        title: 'Vibrant City',
        desc: 'Energią, życie, aktywności kulturalne i społeczne. Miasto, w którym panuje ożywiona atmosfera, a różnorodność działań, wydarzeń i inicjatyw przyczynia się do tworzenia dynamicznej społeczności.',
    },
];

export const sharing_values = [
    {
        icon: <FaConnectdevelop />,
        desc: <span>Nowoczesne inteligentne miasto wymaga inteligentnego <span className="bolden">połączenia danych, ludzi</span> i technologii w celu stworzenia zrównoważonych rozwiązań sprzyjających włączeniu społecznemu i generacji.</span>,
    },{
        icon: <FaHandshake />,
        desc: <span>Wymaga to nowych, <span className="bolden">opartych na współpracy partnerstw w całym ekosystemie</span>, w tym agencji publicznych i obywateli wraz ze specjalistami w dziedzinie cyfryzacji, technologii i inżynierii.</span>,
    },{
        icon: <FaGear />,
        desc: <span>Wymaga to <span className="bolden">lokalnej wiedzy i spostrzeżeń połączonych z globalnym myśleniem i doświadczeniem.</span></span>,
    },
];

export const citylab_sandbox = [
    <span>Inicjatywa - platforma mająca na celu stworzenie uproszczonych warunków dla firm zainteresowanych <span className="bolden">testowaniem w rzeczywistych miejskich warunkach innowacyjnych rozwiązań</span> dla przedsiębiorstw i mieszkańców.</span>,
    <span>Obejmuje rozległe lokalne <span className="bolden">partnerstwo</span> podmiotów publicznych  i prywatnych.</span>,
    <span>Jest <span className="bolden">"laboratorium innowacji" otwartym</span> i rozpowszechnionym w wybranych miejscach miasta.</span>,
    <span>Dla firm zapewni jeden <span className="bolden">miejski punktu kontaktowy</span> w celu uproszczenia procedur testowych.</span>,
    <span>Umożliwia <span className="bolden">uproszczony dostęp</span> do przestrzeni publicznej i aktywów, w tym niematerialnych (procesów, usług i danych).</span>,
    <span>Umożliwia <span className="bolden">"skalowanie rozwiązań"</span>, promując je w ramach sieci i projektów na skalę lokalną,  krajową i międzynarodową.</span>
];

export const circular_info = [
    {
        icon: <MdFactory />,
        text: "Fintech & Komputery kwantowe",
    },{
        icon: <FaOilWell />,
        text: "Station of the future (wodór, elektromobilność)",
    },{
        icon: <TbBuildingFactory />,
        text: "Bezdotykowe dostawy",
    },{
        icon: <FaBoxOpen />,
        text: "Autonomiczna logistyka / transport",
    },{
        icon: <TbBuildingFactory2 />,
        text: "Zero emisyjne miasto",
    },{
        icon: <TbPick />,
        text: "Miejski cyfrowy bliźniak",
    },{
        icon: <TbEngine />,
        text: "Pojazd-pojazd (V2V) i Pojazd-infrastruktura (V2I)",
    },{
        icon: <MdAir />,
        text: "Miejska mobilność powietrzna (UAM)",
    },
]