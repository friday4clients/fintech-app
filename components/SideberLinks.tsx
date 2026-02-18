"use client"

import { Button, Icon, Stack } from "@chakra-ui/react"
import { Home, MoneyRecive, Profile2User } from "iconsax-reactjs"
import Link from "next/link"
import { useMemo } from "react"
import { AnalysisIcon, File1Icon, PieIcon,FolderLibraryIcon, SettingsIcon,UserSwitch, LogoutIcon } from "./customIcons"
import { usePathname } from "next/navigation"

const TopSidebarLinks = () => {
    const path = usePathname();
    const links = useMemo(() => {
        return [
            { label: "Dashboard", href: "/", icon: <Home /> },
            { label: "Capital", href: "/transactions", icon: <MoneyRecive /> },
            { label: "Operations", href: "/operations", icon: <AnalysisIcon /> },
            { label: "Cap table", href: "/cap-table", icon: <PieIcon /> },
            { label: "Regulatory", href: "/settings", icon: <File1Icon /> },
            { label: "Data rooms", href: "/settings", icon: <FolderLibraryIcon /> },
            { label: "Partner", href: "/settings", icon: <Profile2User /> },
            { label: "Collaboration", href: "/settings", icon: <UserSwitch /> },
        ]
    }, [])

    const bottomLinks = useMemo(() => {
        return [
            { label: "Settings", href: "/settings", icon: <SettingsIcon /> },
            { label: "Logout", href: "/logout", icon: <LogoutIcon /> },
        ]
    }, [])

    return (
        <Stack gap="2">
            {links.map((link) => {
                const isActive = path === link.href || (path.startsWith(link.href) && path !== "/");
                return (
                    <Link href={link.href}>
                        <Button size="md"
                            justifyContent="start"
                            bg={isActive ? "bg.subtle" : ""}
                            variant={"ghost"}
                            color={isActive ? "fg" : "#6B7280"}
                            w="full">
                            <Icon asChild color="#6B7280">
                                {link.icon}
                            </Icon>
                            {link.label}
                        </Button>
                    </Link>
                )
            })}
        </Stack>
    )
}

const BottomSibarLinks = () => {
    const path = usePathname();

    const bottomLinks = useMemo(() => {
        return [
            { label: "Settings", href: "/settings", icon: <SettingsIcon /> },
            { label: "Logout", href: "/logout", icon: <LogoutIcon /> },
        ]
    }, [])

    return (
        <Stack gap="2">
            {bottomLinks.map((link) => {
                const isActive = path === link.href || (path.startsWith(link.href) && path !== "/");
                return (
                    <Link href={link.href}>
                        <Button size="md"
                            justifyContent="start"
                            bg={isActive ? "#6B7280" : ""}
                            variant={"ghost"}
                            color={isActive ? "fg" : "#6B7280"}
                            w="full">
                            <Icon asChild color="fg.subtle">
                                {link.icon}
                            </Icon>
                            {link.label}
                        </Button>
                    </Link>
                )
            })}
        </Stack>
    )
}

export {TopSidebarLinks, BottomSibarLinks}