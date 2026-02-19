"use client"

import { Box, Flex, ScrollArea, Stack } from "@chakra-ui/react"
import Sidebar from "./Sidebar";
import LayoutHeader from "./LayoutHeader";
import { useSidebarStore } from "@stores/sidebar.store";

// 246px / 16 = 15.375em (expanded)
// 105px / 16 = 6.5625em (collapsed)
const SIDEBAR_EXPANDED_WIDTH = "15.375em";
const SIDEBAR_COLLAPSED_WIDTH = "6.5625em";

const LayoutSplitter = ({ children }: { children: React.ReactNode }) => {
    const { isSidebarOpen, _hasHydrated } = useSidebarStore();

    if (!_hasHydrated) return null;

    const sidebarWidth = isSidebarOpen ? SIDEBAR_EXPANDED_WIDTH : SIDEBAR_COLLAPSED_WIDTH;

    return (
        <Flex h="100vh" overflow="hidden" gap="10px">
            {/* Sidebar */}
            <Box
                w={sidebarWidth}
                minW={sidebarWidth}
                h="full"
                overflow="hidden"
                transition="width 0.2s ease, min-width 0.2s ease"
            >
                <Sidebar />
            </Box>

            {/* Main content */}
            <Flex flex="1" direction="column" h="vh" overflow="hidden" pb="4" pr="4">
                <Stack h="full" overflowY="hidden">
                    <LayoutHeader />

                    <ScrollArea.Root size="xs" h="full" overflow={"hidden"} w="full" rounded="3xl">
                        <ScrollArea.Viewport>
                            <ScrollArea.Content p="6" flex="1" rounded="3xl" bg="gray.50">
                                {children}
                            </ScrollArea.Content>
                        </ScrollArea.Viewport>
                        <ScrollArea.Scrollbar>
                            <ScrollArea.Thumb />
                        </ScrollArea.Scrollbar>
                        <ScrollArea.Corner />
                    </ScrollArea.Root>
                </Stack>
            </Flex>
        </Flex>
    )
}

export default LayoutSplitter;
