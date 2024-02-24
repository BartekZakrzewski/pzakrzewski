import { ImQuotesLeft } from "react-icons/im";

interface Props{
    quote: string,
    quoter: string,
    offset: number,
    key: number
}

const Quote = ({quote, quoter, offset, key}: Props) => {
    return (
        <div className={`flex flex-col items-start justify-start w-full h-full p-5 relative ${offset != 0 ? offset == 1 ? "md:-translate-y-10" : "md:translate-y-10" : "md:translate-x-0"}`} key={key}>
            <ImQuotesLeft className={`text-gray-300 text-2xl`} />
            <p className={`text-white font-medium text-md mt-2`}>
                <span className={`inline-block ml-4`} />{quote}
            </p>
            <span className={`text-gray-300 font-bold text-sm mt-2`}>
                {quoter}
            </span>
        </div>
    );
}

export default Quote