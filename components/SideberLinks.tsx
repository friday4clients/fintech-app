"use client"

import { Button, Icon, Stack } from "@chakra-ui/react"
import Link from "next/link"
import { useMemo } from "react"
import { AnalysisIcon, File1Icon, PieIcon, FolderLibraryIcon, MoneyReciveCircleIcon, SettingsIcon, UserSwitch, LogoutIcon, UserMultipleIcon, HomeIcon } from "./customIcons"
import { usePathname } from "next/navigation"
import { useSidebarStore } from "../stores/sidebar.store"

const TopSidebarLinks = () => {
    const { isSidebarOpen } = useSidebarStore()
    const path = usePathname();
    const links = useMemo(() => {
        return [
            { label: "Dashboard", href: "/", Icon: HomeIcon },
            { label: "Capital", href: "/capital", Icon: MoneyReciveCircleIcon },
            { label: "Operations", href: "/operations", Icon: AnalysisIcon },
            { label: "Cap table", href: "/cap-table", Icon: PieIcon },
            { label: "Regulatory", href: "/regulatory", Icon: File1Icon },
            { label: "Data rooms", href: "/data-rooms", Icon: FolderLibraryIcon },
            { label: "Partner", href: "/partner", Icon: UserMultipleIcon },
            { label: "Collaboration", href: "/collaboration", Icon: UserSwitch },
        ]
    }, [])

    const bottomLinks = useMemo(() => {
        return [
            { label: "Settings", href: "/settings", Icon: SettingsIcon },
            { label: "Logout", href: "/logout", Icon: LogoutIcon },
        ]
    }, [])

    return (
        <Stack gap="2">
            {links.map((link, i) => {
                const isActive = path === link.href || (path.endsWith(link.href) && path !== "/");
                return (
                    <Link href={link.href} key={i}>
                        <Button size="md"
                            px={isSidebarOpen ? "4" : "0"}
                            justifyContent={isSidebarOpen ? "start" : "center"}
                            bg={isActive ? "bg.subtle" : ""}
                            variant={"ghost"}
                            color={isActive ? "fg" : "#6B7280"}
                            w="full">
                            <link.Icon color={isActive ? isSidebarOpen ? "#6B7280" : "fg" : "#6B7280"} />
                            {isSidebarOpen && link.label}
                        </Button>
                    </Link>
                )
            })}
        </Stack>
    )
}

const BottomSibarLinks = () => {
    const { isSidebarOpen } = useSidebarStore()
    const path = usePathname();

    const bottomLinks = useMemo(() => {
        return [
            { label: "Settings", href: "/settings", Icon: SettingsIcon },
            { label: "Logout", href: "/logout", Icon: LogoutIcon },
        ]
    }, [])

    return (
        <Stack gap="2">
            {bottomLinks.map((link, i) => {
                const isActive = path === link.href || (path.endsWith(link.href) && path !== "/");
                return (
                    <Link href={link.href} key={i}>
                        <Button size="md"
                            px={isSidebarOpen ? "4" : "0"}
                            justifyContent={isSidebarOpen ? "start" : "center"}
                            bg={isActive ? "bg.subtle" : ""}
                            variant={"ghost"}
                            color={isActive ? "fg" : "#6B7280"}
                            w="full">
                            <link.Icon color={isActive ? isSidebarOpen ? "#6B7280" : "fg" : "#6B7280"} />
                            {isSidebarOpen && link.label}
                        </Button>
                    </Link>
                )
            })}
        </Stack>
    )
}

export { TopSidebarLinks, BottomSibarLinks }