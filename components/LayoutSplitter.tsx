"use client"


import { Box, Center, ScrollArea, Splitter, Stack } from "@chakra-ui/react"
import Sidebar from "./Sidebar";
import LayoutHeader from "./LayoutHeader";
import { useSidebarStore } from "@stores/sidebar.store";

const LayoutSplitter = ({ children }: { children: React.ReactNode }) => {
    const { isSidebarOpen } = useSidebarStore(); 

    return (
        <Splitter.Root
            defaultSize={[10, 86]}
            size={isSidebarOpen ? [20, 80] : [6, 94]}
            panels={[
                { id: "sidebar", collapsible: true, collapsedSize: 5, minSize: 5 },
                { id: "main-page", minSize: 50 },
            ]}
            minH="vh"
            maxH="vh"
            overflow={"hidden"}
        >
            {/* Sidebar panel */}
            <Splitter.Panel id="sidebar" h="vh">
                <Sidebar />
            </Splitter.Panel>


            <Splitter.Panel id="main-page" h="vh" pb="4" pr="4" overflowY="hidden">
                <Stack h="full" overflowY="hidden">
                    <LayoutHeader />

                    <ScrollArea.Root size="xs" h="full" w="full" rounded="2xl">
                        <ScrollArea.Viewport>
                            <ScrollArea.Content p="6" flex="1" rounded="2xl" bg="bgGray">
                                {children}
                            </ScrollArea.Content>
                        </ScrollArea.Viewport>
                        <ScrollArea.Scrollbar>
                            <ScrollArea.Thumb />
                        </ScrollArea.Scrollbar>
                        <ScrollArea.Corner />
                    </ScrollArea.Root>

                </Stack>
            </Splitter.Panel>
        </Splitter.Root>
    )
}

export default LayoutSplitter;
