import { useSession } from "next-auth/react";
import {
    ChevronDownIcon,
    ShoppingBagIcon,
    UserGroupIcon
} from "@heroicons/react/outline"
import {
    CalendarIcon,
    ClockIcon,
    DesktopComputerIcon,
    UsersIcon
} from "@heroicons/react/solid"

import SidebarRow from "./SidebarRow";

function SideBar() {
    const { data: session } = useSession();
    return (
        <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
            <SidebarRow Icon={UsersIcon} title="Friends" />
            <SidebarRow Icon={UserGroupIcon} title="Groups" />
            <SidebarRow Icon={ShoppingBagIcon} title="Marketplace" />
            <SidebarRow Icon={UserGroupIcon} title="Match" />
            <SidebarRow Icon={UserGroupIcon} title="Events" />
            <SidebarRow Icon={UserGroupIcon} title="Memories" />
            <SidebarRow Icon={UserGroupIcon} title="Groups" />
        </div>
    )
}

export default SideBar
