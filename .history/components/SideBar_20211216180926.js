import { useSession } from "next-auth/react";
import Image from "next/image";
function SideBar() {
    const { data: session } = useSession();
    return (
        <div>
            <Image />
            <h1>{session.user.name}</h1>
        </div>
    )
}

export default SideBar
