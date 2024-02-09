import Image from "next/image";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
    subsets: ["latin"],
    weight: ["400", "600"]
})

export const Logo = () => {
    return (
        <div className="hidden md:flex items-center gap-x-2">
            <Image
                alt="Logo"
                src="/logo.svg"
                width={40}
                height={40}
                className="dark:hidden"
            />
            <Image
                alt="Logo"
                src="/logo-dark.svg"
                width={40}
                height={40}
                className="dark:block hidden"
            />
            <p className={cn("font-semibold", font.className)}>Jotion</p>
        </div>
    )
}