import { FaPlay } from "react-icons/fa";
import Image from "next/image";
function Card({ title = "", srcImage, demo = "#", source = "#" }) {
    return (
        <div className="bg-[#0d0d14e0] w-[300px] max-w-[300px] min-w-[300px] rounded-md m-2">
            <div className="p-4">
                <Image
                    priority
                    src={srcImage}
                    width={400}
                    height={200}
                    alt="project"
                    className="object-cover rounded-lg mb-1 h-36 select-none"
                />
                <div className="w-full h-12 line-clamp-2">{title}</div>
                <div className="w-full flex justify-between pt-7 text-[#ccc] select-none">
                    <a
                        href={demo}
                        className=" flex h-10 px-3 justify-center items-center border border-[#ccc] transition-all hover:text-[var(--color-blue)] hover:border-[var(--color-blue)] rounded-lg"
                    >
                        <FaPlay />
                        <span className="mx-1">Demo</span>
                    </a>
                    <a
                        href={source}
                        className="flex h-10 px-3 justify-center items-center border border-[#ccc] transition-all hover:text-[var(--color-blue)] hover:border-[var(--color-blue)] rounded-lg"
                    >
                        View Source
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Card;
