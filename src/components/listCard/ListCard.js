import Card from "./card/Card";

function ListCard() {
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
            demo: "",
            source: "",
        },
        {
            title: "Random (HTML, CSS, JS-canvas)",
            srcImage: "/projects/random.png",
            demo: "",
            source: "",
        },
        {
            title: "Random (HTML, CSS, JS-canvas)",
            srcImage: "/projects/random.png",
            demo: "",
            source: "",
        },
        {
            title: "Random (HTML, CSS, JS-canvas)",
            srcImage: "/projects/random.png",
            demo: "",
            source: "",
        },
    ];

    return (
        <div className="w-full flex overflow-x-scroll md:overflow-x-auto md:flex-wrap  h-fit">
            {array.map((item, index) => {
                return <Card title={item.title} srcImage={item.srcImage} demo={item.demo} key={index} />;
            })}
        </div>
    );
}

export default ListCard;
