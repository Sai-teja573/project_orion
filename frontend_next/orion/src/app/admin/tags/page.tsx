import Aside from "@/components/admin/aside"

const Page : React.FC = () => {
    return (
        <main className="pt-16 h-screen w-screen bg-white">
            <section className='justify-center flex w-full h-full'>
                <Aside 
                    activeTab='tags'
                />
                <div className='flex-1'></div>
            </section>
        </main>
    )
}

export default Page
