import Card from "@/components/card/Card";

function Page() {
    return (
        <div className="pt-6">
            <h1 className="text-3xl text-[var(--color-blue)] font-extrabold ">Some projects</h1>
            <div className="my-5">
                <h2 className="w-full px-5 text-xl">1. </h2>
                <div className="flex overflow-x-scroll h-fit">
                    <Card title="Random (HTML, CSS, JS-canvas)" srcImage="/projects/random.png" />
                    <Card title="Random (HTML, CSS, JS-canvas)" srcImage="/projects/music.png" />
                    <Card title="Random (HTML, CSS, JS-canvas)" srcImage="/projects/weather.png" />
                </div>
            </div>
            <div className="">
                <h2 className="w-full px-5 text-xl">2.</h2>
                <div className="flex overflow-x-scroll h-fit">
                    <Card title="Random (HTML, CSS, JS-canvas)" srcImage="/projects/random.png" />
                    <Card title="Random (HTML, CSS, JS-canvas)" srcImage="/projects/random.png" />
                    <Card title="Random (HTML, CSS, JS-canvas)" srcImage="/projects/random.png" />
                    <Card title="Random (HTML, CSS, JS-canvas)" srcImage="/projects/weather.png" />
                    <Card title="Random (HTML, CSS, JS-canvas)" srcImage="/projects/random.png" />
                    <Card title="Random (HTML, CSS, JS-canvas)" srcImage="/projects/music.png" />
                </div>
            </div>
        </div>
    );
}

export default Page;
