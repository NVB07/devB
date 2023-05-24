"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Nav from "../nav/Nav";

function Header() {
    const pathname = usePathname();
    useEffect(() => {
        const tabs = document.querySelectorAll('li[select="tab"]');
        const activeTab = document.querySelector(".active");

        if (pathname == "/") {
            activeTab.style.width = tabs[0].clientWidth + "px";
            activeTab.style.left = 0;
            tabs.forEach((item) => {
                item.style.color = "#fff";
            });
            tabs[0].style.color = "#31d2f2";
        } else if (pathname == "/projects") {
            activeTab.style.width = tabs[1].clientWidth + "px";
            activeTab.style.left = tabs[0].clientWidth + "px";
            tabs.forEach((item) => {
                item.style.color = "#fff";
            });
            tabs[1].style.color = "#31d2f2";
        } else {
            activeTab.style.width = tabs[2].clientWidth + "px";
            activeTab.style.left = tabs[0].clientWidth + tabs[1].clientWidth + "px";
            tabs.forEach((item) => {
                item.style.color = "#fff";
            });
            tabs[2].style.color = "#31d2f2";
        }
    });

    return (
        <header className=" w-full px-8 h-20 flex fixed top-0 z-10  justify-between  bg-[var(--primary-color)] max-w-screen-2xl ">
            <div className="flex items-center relative z-20 ">
                <Link className="relative z-30" href="/">
                    <h1 className="text-4xl text-white font-bold ">
                        <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#1cbff0] to-[#f0a]">
                            Dev
                        </span>
                        <span className="text-[#fff] text-5xl ">B</span>
                    </h1>
                </Link>
            </div>

            <Nav />
        </header>
    );
}

export default Header;
