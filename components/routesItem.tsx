'use client';

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { IconType } from "react-icons/lib";

type IconComponent = LucideIcon | IconType;

interface RouteItemsProps {
    icon: IconComponent;
    href: string;
    label: string;
}

const RoutesItems = ({
    icon: Icon,
    href,
    label
}: RouteItemsProps) => {

    const pathname = usePathname();
    const { push } = useRouter();

    const isActive = (pathname === "/" && href === "/") || pathname === href || pathname?.startsWith(`${href}/`);
    const onClick = () => {
        push(href);
    }

    return (
        <button
            onClick={onClick}
            className={cn("text-muted-foreground flex items-center gap-2 hover:underline underline-offset-4",
                isActive && "border-[1px] dark:border-white-2 border-dark-2 p-[5px] rounded-lg dark:text-white-2 text-dark-2")
            }>
            <Icon className="w-5 sm:w-3 h-5 sm:h-3" /><span className="text-nowrap text-sm">{label}</span>
        </button>
    )
}

export default RoutesItems;