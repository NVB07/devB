import Card from "./card/Card";

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
