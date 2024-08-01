'use client';

import { webRoutes } from "@/utils/constants"
import RoutesItems from "./routesItem";


const routers = webRoutes;

const Routers = () => {
    return (
        <div>
            <div className="hidden sm:flex items-center gap-5 w-[400px] md:w-[500px] overflow-x-auto border-x-[1px] dark:border-white-3 border-dark-3 px-2 rounded-md py-[2px]">
                {routers.map(router => (
                    <RoutesItems
                        key={router.label}
                        icon={router.icon}
                        label={router.label}
                        href={router.href}
                    />
                ))}
            </div>
            <div className="flex sm:hidden  flex-col gap-5 h-screen overflow-x-auto mt-10">
                {routers.map(router => (
                    <RoutesItems
                        key={router.label}
                        icon={router.icon}
                        label={router.label}
                        href={router.href}
                    />
                ))}
            </div>
        </div>
    )
}

export default Routers;