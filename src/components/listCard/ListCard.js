import { FaPlay } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

function Card({ title = "", srcImage, demo = "#", path = "/projects", queryName = "", id = "" }) {
    return (
        <div className="bg-[#0d0d14e0] w-[280px] max-w-[280px] min-w-[280px] min-h-[300px] rounded-md m-2">
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
                    <Link
                        href={{
                            pathname: path,
                            query: { name: queryName, id: id },
                        }}
                        className="flex h-10 px-3 justify-center items-center border border-[#ccc] transition-all hover:text-[var(--color-blue)] hover:border-[var(--color-blue)] rounded-lg"
                    >
                        View Source
                    </Link>
                </div>
            </div>
        </div>
    );
}

function ListCard({ children = [] }) {
    const array = [
        {
            title: "Random (HTML, CSS, JS-canvas)",
            srcImage: "/projects/random.png",
            demo: "/",
            source: "",
        },
        {
            title: "Random (HTML, CSS, JS-canvas)",
            srcImage: "/projects/random.png",
            demo: "/",
            source: "",
        },
        {
            title: "Random (HTML, CSS, JS-canvas)",
            srcImage: "/projects/random.png",
            demo: "#",
            source: "",
        },
        {
            title: "Random (HTML, CSS, JS-canvas)",
            srcImage: "/projects/random.png",
            demo: "#",
            source: "",
        },
        {
            title: "Random (HTML, CSS, JS-canvas)",
            srcImage: "/projects/random.png",
            demo: "#",
            source: "",
        },
        {
            title: "Random (HTML, CSS, JS-canvas)",
            srcImage: "/projects/random.png",
            demo: "#",
            source: "",
        },
    ];

    return (
        <div className="w-full flex overflow-x-scroll md:overflow-x-auto md:flex-wrap  h-fit">
            {array.map((item, index) => {
                return (
                    <Card
                        title={item.title}
                        srcImage={item.srcImage}
                        demo={item.demo}
                        path="/projects/view-source"
                        queryName={item.title}
                        id={index}
                        key={index}
                    />
                );
            })}
        </div>
    );
}

export default ListCard;
