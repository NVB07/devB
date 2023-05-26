"use client";

import { usePathname, useParams, useSearchParams } from "next/navigation";

export default function ExampleClientComponent() {
    const pathname = usePathname();
    const param = useSearchParams();
    return (
        <>
            Current pathname:{pathname} {param}
        </>
    );
}
