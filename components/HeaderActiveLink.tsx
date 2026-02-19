"use client"


import { Flex, Icon, Text } from "@chakra-ui/react"
import { useMemo } from "react"
import { AnalysisIcon, File1Icon, FolderLibraryIcon, SettingsIcon, LogoutIcon, PieIcon, UserSwitch, HomeIcon, UserMultipleIcon, MoneyReciveCircleIcon } from "./customIcons"
import { usePathname } from "next/navigation"

const HeaderActiveLink = () => {
    const path = usePathname();
    const links = useMemo(() => {
        return [
            { label: "Home", href: "/", Icon: HomeIcon },
            { label: "Capital", href: "/capital", Icon: MoneyReciveCircleIcon },
            { label: "Operations", href: "/operations", Icon: AnalysisIcon },
            { label: "Cap table", href: "/cap-table", Icon: PieIcon },
            { label: "Regulatory", href: "/regulatory", Icon: File1Icon },
            { label: "Data rooms", href: "/data-rooms", Icon: FolderLibraryIcon },
            { label: "Partner", href: "/partner", Icon: UserMultipleIcon },
            { label: "Collaboration", href: "/collaboration", Icon: UserSwitch },
            { label: "Settings", href: "/settings", Icon: SettingsIcon },
            { label: "Logout", href: "/logout", Icon: LogoutIcon },
        ]
    }, [])

    const activeLink = useMemo(() => {
        return links.find((link) => link.href === path) || { label: "Home", href: "/", Icon: HomeIcon }
    }, [path])

    return (
        <Flex gap="2" align="center">
            <activeLink.Icon size="sm" color="gray.500" />
            <Text color="gray.500" fontWeight="normal" fontSize="xs">{activeLink?.label}</Text>
        </Flex>
    )
}

export default HeaderActiveLink