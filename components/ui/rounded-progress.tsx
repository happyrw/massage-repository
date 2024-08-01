"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const CircularProgress = React.forwardRef<
    SVGSVGElement,
    React.ComponentPropsWithoutRef<"svg"> & { value: number; size?: number }
>(({ className, value, size = 50, ...props }, ref) => {
    const radius = (size - 4) / 2;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (value / 100) * circumference;

    return (
        <svg
            ref={ref}
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            className={cn("rotate-[-90deg]", className)}
            {...props}
        >
            <circle
                className="text-black"
                strokeWidth="4"
                stroke="currentColor"
                fill="transparent"
                r={radius}
                cx={size / 2}
                cy={size / 2}
            />
            <circle
                className="text-green-400"
                strokeWidth="4"
                stroke="currentColor"
                fill="transparent"
                r={radius}
                cx={size / 2}
                cy={size / 2}
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                style={{ transition: "stroke-dashoffset 0.5s" }}
            />
            <text
                x="50%"
                y="50%"
                dy=".3em"
                textAnchor="middle"
                className="fill-current text-center text-black dark:text-white"
            >
                {value}%
            </text>
        </svg>
    );
});
CircularProgress.displayName = "CircularProgress";

export { CircularProgress };
