"use client";

interface Props {
    Icon: React.ReactNode,
    text: any
}

const Circle = ({Icon, text}: Props) => {
    return (
        <div className={`rounded-full border-4 h-full max-w-96 w-full aspect-[1/1] border-red-500 p-20 bg-white/40 flex flex-col items-center justify-around`}>
            <div className={`text-3xl md:text-5xl lg:text-6xl`}>
                {Icon}
            </div>
            {text}
        </div>
    );
}

export default Circle