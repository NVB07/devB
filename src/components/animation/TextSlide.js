"use client";
import { useState, useEffect } from "react";

const TextSlider = () => {
    const [content, setContent] = useState("HTML, CSS, JAVASCRIPT");
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const textSlider = document.querySelector(".text-slider");
        textSlider.addEventListener("animationiteration", handleAnimationIteration);

        return () => {
            textSlider.removeEventListener("animationiteration", handleAnimationIteration);
        };
    }, []);

    const handleAnimationIteration = () => {
        setCounter((prevCounter) => prevCounter + 1);
    };

    useEffect(() => {
        if (counter % 2 === 0) {
            setContent("HTML, CSS, JAVASCRIPT");
        } else {
            setContent("Tailwind, ReactJS, NextJS");
        }
    }, [counter]);

    return <div className="text-slider text-[#31d2f2] animate">{content}</div>;
};

export default TextSlider;
