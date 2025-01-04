'use client';

import { PROBLEMSDATA } from "@/utils/constants/tmp"
import { Difficulty, SortBy, SortOrder } from "@/utils/enums/question";
import { useFetch, UseFetchOptions } from "@/utils/hooks/fetch/useFetch"
import { GetQuestions, GetQuestionsError, QuestionFilters, QuestionPageNSort } from "@/utils/models/question"
import { AdminQuestions } from "@/utils/requests/questions"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import Link from "next/link"
import { ReadonlyURLSearchParams, usePathname, useRouter, useSearchParams } from "next/navigation"
import { Dispatch, SetStateAction, useState } from "react"
import { HiArrowLongDown, HiArrowLongUp } from "react-icons/hi2";
import { useDebouncedCallback } from "use-debounce";
import TableHead from "./tableHead";
import clsx from "clsx";

const Page = () => {
    const { getQuestions } = AdminQuestions()

    const sp = useSearchParams()
    
    const [filters, setFilters] = useState<QuestionFilters>({})
    const pageNSort : QuestionPageNSort = {
        pageNumber : sp.has('page') ? Number(sp.get('page')) : 0,
        pageSize : sp.has('pageSize') ? Number(sp.get('pageSize')) : 20,
        sortBy : sp.has('sortId') ? SortBy[Number(String(sp.get('sortId'))[0])] : SortBy[0],
        sortOrder : sp.has('sortId') ? SortOrder[Number(String(sp.get('sortId'))[1])] : SortOrder[0],
    }

    const fetchOptions : UseFetchOptions<GetQuestions> = {
        api : () => getQuestions(pageNSort, filters),
        backup : PROBLEMSDATA,
        dependencies : [sp]
    }

    const {data, loading, error} = useFetch<GetQuestions, GetQuestionsError>(fetchOptions)
    
    function renderDifficultyData(d : Difficulty) {
        switch(d) {
            case Difficulty.EASY:
                return <p className="text-easy">Easy</p>
            case Difficulty.MEDIUM:
                return <p className="text-medium">Medium</p>
            case Difficulty.HARD:
                return <p className="text-hard">Hard</p>
        }
    }

    return (
        <main className="pt-16 bg-white w-screen h-max min-h-screen">
            <section className='justify-center flex w-full h-max pt-8 px-5 gap-x-2'>
                {   
                    // loading ?
                    // <div 
                    //     id="loadingProblemTable"
                    //     className="flex-1 border-major/30 border-[0.5px] min-h-40 rounded-[10px]"
                    // ></div> :
                    // error ?
                    // <div 
                    //     id="loadingProblemTable"
                    //     className="flex-1 border-major/30 border-[0.5px] min-h-40 rounded-[10px]"
                    // >{'failed fetch'}</div> :
                    data ?
                    <div 
                        id="problemsTable"
                        className={clsx(
                            "flex-1 border-major/30 border-[0.5px] h-max rounded-[10px] px-4",
                            loading && "opacity-50 backdrop-blur-md"
                        )}
                    >
                        <div id="filtersSection" className="min-h-24 h-max">
                            <div id="filters" className="flex gap-x-"></div>
                            <div id="appliedFilters" className="flex gap-x-4"></div>
                        </div>
                        <table className="w-full">
                            <TableHead />
                            <tbody>
                                {
                                    data.content.map(p => (
                                        <tr key={p.questionId} className="w-full h-12 border-b border-major/30 py-1">
                                            <td className="text-sm font-popm text-black text-left">{p.questionId+'.'}</td>
                                            <td className="w-1/3 text-base font-popm text-black">{p.title}</td>
                                            <td><div className="h-6 w-6 bg-slate-300"/></td>
                                            <td className="w-1/3">
                                                <div className="flex max-h-11 overflow-y-auto flex-wrap content-center gap-1">
                                                {
                                                    p.tagList.slice(0,3).map(t => (
                                                        <div
                                                            key={t.tagId}
                                                            className="h-5 bg-major/20 px-3 max-w-[50%] space-x-1 rounded-full text-[13px] font-popm text-black capitalize"
                                                        >
                                                            {
                                                                t.text.split('_').map((w, idx) => <span key={idx} className="">{w}</span>)
                                                            }
                                                        </div>
                                                    ))
                                                }
                                                {
                                                    p.tagList.length > 3 &&
                                                    <div className="h-5 bg-major/20 px-3 max-w-[50%] space-x-1 rounded-full text-[13px] font-popm text-black ">{p.tagList.length - 3} more</div>
                                                }
                                                </div>
                                            </td>
                                            <td className="text-[#03AC13] text-sm font-popsb ">
                                                {renderDifficultyData(Difficulty[p.difficulty])}
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div> :
                    <div className="h-20 grid place-content-center flex-1">No Questions Found</div>
                }
                <div 
                    id="createProblem"
                    className="min-w-72 w-[30%] px-6 py-5 space-y-4 border-major/30 border-[0.5px] h-max rounded-[10px]"
                >
                    <p className="text-3xl font-popsb text-black">Create a new problem</p>
                    <p className="text-sm font-light text-black">create a new problem and verify it with a request and publish it to the public. You can also use this problem in the contests you will create in the future</p>
                    <Link 
                        id="createButton"
                        className="flex w-40 h-10 content-center justify-center bg-major mx-auto rounded-full"
                        href={'admin/problems/create'}
                    >
                        <p className="text-white font-popm text-xl text-center my-auto">Create</p>
                    </Link>
                </div>
            </section>
        </main>
    )
}

export default Page