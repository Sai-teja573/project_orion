'use client';

import clsx from "clsx"
import Link from "next/link";
import { usePathname } from "next/navigation"

const Header : React.FC = () => {
    const pathName = usePathname()
    const currentMainPage = pathName.split('/')[1]

    return (
        <div
            id="header"
            className="fixed h-16 w-screen px-4 py-2 flex bg-white border-b border-major/30 shadow-sm shadow-major/10"
        >
            <div
                id="headerLogo"
                className="w-44 h-12 bg-black/30"
            >

            </div>
            <Link 
                href={'/problems'}
                className={clsx(
                    "mt-auto pb-1 ml-8 mr-4 cursor-pointer",
                    currentMainPage == 'problems' ?
                    "font-popb text-major text-base underline decoration-2 underline-offset-2" :
                    "font-popr text-major text-base"
                )}
            >
                Problems
            </Link>
            <Link 
                href={'/contests'}
                className={clsx(
                    "mt-auto pb-1 ml-8 mr-4 cursor-pointer",
                    currentMainPage == 'contests' ?
                    "font-popb text-major text-base underline decoration-2 underline-offset-2" :
                    "font-popr text-major text-base"
                )}
            >
                Contests
            </Link>
            <Link 
                href={'/admin/problems'}
                className={clsx(
                    "mt-auto pb-1 ml-8 mr-4 cursor-pointer",
                    currentMainPage == 'admin' ?
                    "font-popb text-major text-base underline decoration-2 underline-offset-2" :
                    "font-popr text-major text-base"
                )}
            >
                Admin
            </Link>
        </div>
    )
}

export default Header