"use client";
import React from "react";
import { Navbar, Collapse, Typography, IconButton } from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavList({ setNav }) {
    const pathName = usePathname();
    const handleClick = () => {
        if (setNav) {
            setNav();
        }
    };
    return (
        <ul className="my-2 flex flex-col  gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                onClick={handleClick}
                as="li"
                variant="small"
                color="white"
                className={`p-1 h-10 flex items-center rounded-md font-medium ${
                    pathName == "/" ? "bg-blue-gray-900 text-blue-500" : ""
                }`}
            >
                <Link
                    href="/"
                    className="flex items-center text-lg w-full rounded hover:text-blue-500 transition-colors"
                >
                    Home
                </Link>
            </Typography>
            <Typography
                onClick={handleClick}
                as="li"
                variant="small"
                color="white"
                className={`p-1 h-10 flex items-center rounded-md font-medium ${
                    pathName == "/projects" ? "bg-blue-gray-900 text-blue-500" : ""
                }`}
            >
                <Link
                    href="/projects"
                    className="flex items-center text-lg w-full rounded hover:text-blue-500 transition-colors"
                >
                    Projects
                </Link>
            </Typography>
            <Typography
                onClick={handleClick}
                as="li"
                variant="small"
                color="white"
                className={`p-1 h-10 flex items-center rounded-md font-medium ${
                    pathName == "/about" ? "bg-blue-gray-900 text-blue-500" : ""
                }`}
            >
                <Link
                    href="/about"
                    className="flex items-center text-lg w-full rounded hover:text-blue-500 transition-colors"
                >
                    About
                </Link>
            </Typography>
        </ul>
    );
}

export default function Example() {
    const [openNav, setOpenNav] = React.useState(false);

    const handleWindowResize = () => window.innerWidth >= 960 && setOpenNav(false);

    React.useEffect(() => {
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    return (
        <Navbar className="mx-auto w-full px-6 py-3 bg-[var(--primary-color)] border-t-0 border-x-0 border-[#4b4b4b] !border-b lg:border-none shadow-none rounded-none fixed top-0 z-50 backdrop-saturate-0 backdrop-blur-0">
            <div className="flex items-center justify-between text-blue-gray-900">
                <Typography
                    onClick={() => setOpenNav(false)}
                    as={Link}
                    href="/"
                    variant="h6"
                    className="mr-4 cursor-pointer text-3xl py-1.5"
                >
                    Dev
                    <span className="text-white">B</span>
                </Typography>
                <div className="hidden lg:block">
                    <NavList />
                </div>
                <IconButton
                    variant="text"
                    className="ml-auto h-8 w-8  text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                    ripple={false}
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <XMarkIcon className="h-8 w-8 text-[#ffffffb6]" strokeWidth={2} />
                    ) : (
                        <Bars3Icon className="h-8 w-8 text-[#ffffffb6]" strokeWidth={2} />
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <NavList setNav={() => setOpenNav(!openNav)} />
            </Collapse>
        </Navbar>
    );
}
