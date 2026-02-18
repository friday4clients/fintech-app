import { Center, Splitter } from "@chakra-ui/react"
import Sidebar from "./Sidebar";

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

            {/* <Splitter.ResizeTrigger id="sidebar:main-page" /> */}

            <Splitter.Panel id="main-page" h="vh">
                {children}
            </Splitter.Panel>
        </Splitter.Root>
    )
}

export default LayoutSplitter;
