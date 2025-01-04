import { ADMIN_ASIDE_OPTIONS } from "@/utils/constants/aside"
import clsx from "clsx"
import Link from "next/link"
// import { useParams, usePathname, useSearchParams } from "next/navigation"
import React from "react"

type props = {
    activeTab : string
}

const Aside : React.FC<props> = (props : props) => {
    // const {org} = useParams()
    // const sp = useSearchParams()
    // const pathname = usePathname()

    // const props.activeTab = pathname.split('/').at(3) || ''

    function getURL(key : string) {
        if (props.activeTab == key) {
            return ''
        } else {
            return `/admin/${key}`
        }
    }

    return (
        <aside className='w-60 pt-9 border-r border-major/30 h-full '>
            <div className='space-y-8 w-max min-w-48'>
            {
                ADMIN_ASIDE_OPTIONS.map(section => (
                    <div key={section.title} className='space-y-3'>
                        <p className='font-popsb text-[14px] text-[#808080] pl-9'>{section.title}</p>
                        <div className='space-y-0.5 '>
                            {
                                section.options.map(option => (
                                    option.disabled ?
                                    <div 
                                        key={option.title}
                                        className={clsx(
                                            'flex content-center text-[15px] gap-x-4 h-8',
                                            'font-popm text-[#707070] cursor-not-allowed',
                                            props.activeTab == option.urlKey && 'bg-major/20 rounded-r-full font-popb text-black'
                                        )}
                                    >
                                        {option.icon}
                                        <p className='my-auto'>{option.title}</p>
                                    </div> :
                                    <Link 
                                        key={option.title}
                                        className={clsx(
                                            'flex content-center text-[15px] gap-x-4 h-8', 
                                            props.activeTab == option.urlKey ? 
                                                'bg-major/20 rounded-r-full font-popb text-black cursor-pointer' : 
                                                'font-popm text-[#5F5F5F] cursor-pointer',
                                        )}
                                        href={getURL(option.urlKey)}
                                    >
                                        {option.icon}
                                        <p className='my-auto'>{option.title}</p>
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
            </div>
        </aside>
    )
}

export default Aside