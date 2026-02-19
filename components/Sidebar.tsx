"use client"

import { Box, Flex, Heading, Icon, IconButton, ScrollArea, Separator, Stack, Text } from "@chakra-ui/react"
import SiteLogo from "./SiteLogo";
import { SidebarLeft } from "iconsax-reactjs";
import AccountSwitcher from "./AccountSwitcher";
import { BottomSibarLinks, TopSidebarLinks } from "./SideberLinks";
import SidebarProfileCard from "./SidebarProfileCard";
import { useSidebarStore } from "../stores/sidebar.store";

const Sidebar = () => {
    const { isSidebarOpen, setSidebarOpen, toggleSidebar } = useSidebarStore()
    return (
        <Stack gap="0" w="full" h="full" overflow="hidden" justify="start">
            {/* site logo */}
            {/* <Box> */}
            <Flex
                borderBottom={"100"}
                h={"72px"}
                py="1.5em"
                pb="1.5em"
                pr="1em"
                pl="1.5em"
                gap="10px"
                justify="space-between"
                align="center"
            >
                <Flex
                    gap="11px"
                    w="172px"
                    py="1em"
                    px="1.5em"
                    align="center"
                    onClick={() => !isSidebarOpen && setSidebarOpen(true)}
                    cursor={!isSidebarOpen ? "pointer" : "default"}
                >
                    <Flex
                        gap="12px"
                        align={"center"}
                    >
                        <Icon color="acccent" boxSize={"20px"}>
                            <SiteLogo />
                        </Icon>
                        {isSidebarOpen && <Text color="gray.900" fontSize={"1em"} fontWeight={"medium"}>Canvas</Text>}
                    </Flex>
                </Flex>

                {isSidebarOpen && (
                    <Icon
                        color="gray.200"
                        cursor='pointer'
                        rounded="sm"
                        p="0.5"
                        boxSize={"24px"}
                        border='sm'
                        borderColor="gray.200"
                        _hover={{ bg: "gray.50" }}
                        onClick={toggleSidebar}
                    >
                        <SidebarLeft />
                    </Icon>
                )}
            </Flex>


            <ScrollArea.Root flex="2" size="xs">
                <ScrollArea.Viewport>
                    <ScrollArea.Content p="4" pt="0" pos="relative">
                        {/* <Stack> */}
                            <AccountSwitcher />
                            <TopSidebarLinks />
                        {/* </Stack> */}
                    </ScrollArea.Content>
                </ScrollArea.Viewport>
                <ScrollArea.Scrollbar>
                    <ScrollArea.Thumb />
                </ScrollArea.Scrollbar>
                <ScrollArea.Corner />
            </ScrollArea.Root>


            <BottomSibarLinks />
            <SidebarProfileCard />
            {/* <Stack bg="blue.300" gap="2" justifySelf={"end"} px="4" flex="0" justify={"end"}>
            </Stack> */}
        </Stack>
    )
}

export default Sidebar;