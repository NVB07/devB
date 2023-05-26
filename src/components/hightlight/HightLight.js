"use client";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
    vscDarkPlus,
    oneDark,
    a11yDark,
    cb,
    coldarkDark,
    duotoneDark,
    atomDark,
    coldarkCold,
} from "react-syntax-highlighter/dist/esm/styles/prism";
function HighrLight({ children = "Hello devB", language = "javascript" }) {
    return (
        <>
            <SyntaxHighlighter language={language} style={vscDarkPlus}>
                {children}
            </SyntaxHighlighter>
        </>
    );
}
export default HighrLight;
