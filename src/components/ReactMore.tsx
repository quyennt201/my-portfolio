import clsx from "clsx";
import type { ReactNode } from "react";
import { useState } from "react";

interface ReadMoreProps {
    children: ReactNode;
    maxLines?: number;
}

export default function ReadMore({ children, maxLines = 3 }: ReadMoreProps) {
    const [expanded, setExpanded] = useState(true);

    return (
        <div>
            <div className={clsx("w-full", expanded ? "" : `line-clamp-${maxLines}`)}>
                {children}
            </div>

            <button
                onClick={() => setExpanded(!expanded)}
                className="text-blue-400 mt-1 cursor-pointer hover:underline"
            >
                {/* {expanded ? "Read less" : "Read more"} */}
            </button>
        </div>
    );
}