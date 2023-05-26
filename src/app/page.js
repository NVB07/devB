import Image from "next/image";
import TextSlider from "@/components/animation/TextSlide";

export default function Home() {
    return (
        <div className="w-full  md:flex justify-around pt-6">
            <div className="flex-1 flex flex-col  md:items-start justify-center ">
                <h1 className="w-full text-center md:text-start text-transparent bg-clip-text text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#7927b2] to-[#fb3182]">
                    Hi. I&apos;m NVB
                </h1>
                <div className=" whitespace-nowrap relative text-4xl ">
                    <p className=" text-4xl w-full text-center md:text-start pb-1 font-semibold">Front-End </p>
                    <div className="text-2xl min400:text-[28px] md:text-3xl md:absolute flex justify-center relative">
                        <TextSlider />
                    </div>
                </div>
            </div>
            <div className="pt-4 md:pb-0">
                <Image
                    className="w-[500px] h-auto mr-4"
                    priority
                    src="/Artboard3x.png"
                    width="0"
                    height="0"
                    sizes="100vw"
                    alt="deverlop"
                />
            </div>
        </div>
    );
}
