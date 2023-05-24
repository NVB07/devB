import Image from "next/image";
function Footer() {
    return (
        <footer className="border-t border-[#2f2f45] h-24 p-2 text-center w-full bg-[var(--primary-color)]">
            <p>Copyright © 2023 - NVB</p>
            <div className="flex items-center justify-center">
                <a href="https://react.dev/" rel="noreferrer" target="_blank">
                    <Image
                        className="m-2 w-10 h-auto"
                        src="/react.svg"
                        alt="reactJs_framework_javascript"
                        width="0"
                        height="0"
                    />
                </a>
                <a href="https://nextjs.org/" rel="noreferrer" target="_blank">
                    <Image
                        className="m-2 w-10 h-auto"
                        src="/nextLogoWhite.svg"
                        alt="NextJs_framework_javascript"
                        width="0"
                        height="0"
                    />
                </a>
                <a href="https://tailwindcss.com/" rel="noreferrer" target="_blank">
                    <Image
                        className="m-2 w-10 h-auto"
                        src="/tailwindcss.svg"
                        alt="CSS_framework"
                        width="0"
                        height="0"
                    />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
