"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"

const Header = () => {
  return (
    <nav className={`absolute flex top-0 w-full py-2 px-4 space-x-4 h-20 bg-slate-950/50 backdrop-blur-lg items-center`}>
        <a href="/#">
            <Avatar>
                <AvatarImage src="/images/pzakrzewski-awatar.jpg" />
                <AvatarFallback>Przemysław Zakrzewski</AvatarFallback>
            </Avatar>    
        </a>
        <Separator orientation="vertical" />
    </nav>
  )
}

export default Header
