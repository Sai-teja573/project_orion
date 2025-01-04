import Aside from "@/components/admin/aside"
import Link from "next/link"

const Page : React.FC = () => {
    return (
        <main className="pt-16 h-screen w-screen bg-white flex">
            <section className='justify-center flex w-full h-full'>
                <Aside 
                    activeTab='problems'
                />
                <div className='flex-1 p-5'>
                    <div id="title" className="flex justify-between">
                        <p className="flex-1 font-popsb text-3xl text-black">Problems</p>
                        <Link 
                            id="createButton"
                            className="flex w-40 h-10 content-center justify-center bg-major mx-auto rounded-full"
                            href={'problems/create'}
                        >
                            <p className="text-white font-popm text-xl text-center my-auto">Create</p>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Page
