import { Box, Center, Splitter, Stack } from "@chakra-ui/react"
import Sidebar from "./Sidebar";
import LayoutHeader from "./LayoutHeader";

const LayoutSplitter = ({ children }: { children: React.ReactNode }) => {
    return (
        <Splitter.Root
            defaultSize={[20, 86]}
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
                <Stack h="full">
                    <LayoutHeader />

                    <Box p="6" flex="1" rounded="2xl" bg="bgGray">
                        {children}
                    </Box>
                </Stack>
            </Splitter.Panel>
        </Splitter.Root>
    )
}

export default LayoutSplitter;
