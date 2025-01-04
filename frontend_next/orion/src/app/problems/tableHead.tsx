import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"
import { usePathname, useSearchParams, useRouter } from "next/navigation"
import React, { useState } from "react"
import { HiArrowLongDown, HiArrowLongUp } from "react-icons/hi2"
import { useDebouncedCallback } from "use-debounce"

const TableHead : React.FC = () => {

    const pathName = usePathname()
    const sp = useSearchParams()
    const { replace } : AppRouterInstance = useRouter()

    function renderColumnTitle(title : string, sort : boolean, sortKey ?: number) : React.JSX.Element {
        return sort && sortKey ?
            <th onClick={() => handleTitleClick(sortKey)} className="">
                <div className="flex">
                    <p className="mr-3">{title}</p>
                    {
                        sp.get('sortId') && String(sp.get('sortId'))[0] == String(sortKey) &&
                        (
                            String(sp.get('sortId'))[1] == '0' ?
                            <HiArrowLongDown className="my-auto stroke-major w-5 h-5"/> :
                            <HiArrowLongUp className="my-auto stroke-major w-5 h-5"/>
                        )
                    }
                </div>
            </th> :
            <th className="text-left">{title}</th>
    }
    
    function updateSearchParams(key : string, value ?: string) {
        const newparams = new URLSearchParams(sp)
        if (value) {
            newparams.set(key, value)
        } else {
            newparams.delete(key)
        }
        replace(`${pathName}?${newparams.toString()}`)
    }

    const [sortId, setSortId] = useState<string | null>(sp.has('sortId') ? sp.get('sortId') : null)
    const handleSortDebounce = useDebouncedCallback((sortId ?: string) => {
        updateSearchParams('sortId', sortId)
    })
    function handleTitleClick(sortKey : number) {
        if (sortId == null || sortId[0] != String(sortKey)) {
            setSortId(sortKey+'0')
            handleSortDebounce(sortKey+'0')
        } else {
            if (sortId)
            switch (sortId[1]) {
                case '0':
                    setSortId(sortKey+'1')
                    handleSortDebounce(sortKey+'1')
                    break
                case '1':
                    setSortId(null)
                    handleSortDebounce()
                    break
            }
        }
    }
    return (
        <thead className="h-10 border-b border-major/70 text-major text-sm font-popm">
            <tr className="">
                { renderColumnTitle('Sr.no', true, 1) }
                { renderColumnTitle('Title', true, 2) }
                { renderColumnTitle('Answer', false) }
                { renderColumnTitle('Tags', false) }
                { renderColumnTitle('Difficulty', true, 3) }
            </tr>
        </thead>
    )
}

export default TableHead