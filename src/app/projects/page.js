import ListCard from "@/components/listCard/ListCard";

function Page() {
    return (
        <div className="pt-6">
            <h1 className="text-3xl text-[var(--color-blue)] font-extrabold ">Some projects</h1>
            <div className="my-5">
                <h2 className="w-full px-5 text-xl">1. </h2>
                <ListCard />
            </div>
            <div className="">
                <h2 className="w-full px-5 text-xl">2.</h2>
                <ListCard />
            </div>
        </div>
    );
}

export default Page;
