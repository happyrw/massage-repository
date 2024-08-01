import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"

import { FaBars } from "react-icons/fa6"
import Routers from "./routers";



const MobileNavigation = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <FaBars className='w-7 h-7 cursor-pointer my-2' />
            </SheetTrigger>
            <SheetContent>
                <Routers />
            </SheetContent>
        </Sheet>


    )
}

export default MobileNavigation;