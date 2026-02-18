"use client"


import { Flex, Icon, Text } from "@chakra-ui/react"
import { Home, MoneyRecive, Profile2User } from "iconsax-reactjs"
import { useMemo } from "react"
import { AnalysisIcon, File1Icon, FolderLibraryIcon, PieIcon, UserSwitch } from "./customIcons"
import { usePathname } from "next/navigation"

const HeaderActiveLink = () => {
    const path = usePathname();
    const links = useMemo(() => {
        return [
            { label: "Home", href: "/", icon: <Home /> },
            { label: "Capital", href: "/transactions", icon: <MoneyRecive /> },
            { label: "Operations", href: "/operations", icon: <AnalysisIcon /> },
            { label: "Cap table", href: "/cap-table", icon: <PieIcon /> },
            { label: "Regulatory", href: "/settings", icon: <File1Icon /> },
            { label: "Data rooms", href: "/settings", icon: <FolderLibraryIcon /> },
            { label: "Partner", href: "/settings", icon: <Profile2User /> },
            { label: "Collaboration", href: "/settings", icon: <UserSwitch /> },
        ]
    }, [])

    const activeLink = useMemo(() => {
        return links.find((link) => link.href === path)
    }, [path])

    return (
        <Flex gap="2" align="center">
            <Icon size="sm" color="#6B7280">
                {activeLink?.icon}
            </Icon>
            <Text color="fg.subtle" fontWeight="regular" fontSize="sm">{activeLink?.label}</Text>
        </Flex>
    )
}

export default HeaderActiveLink