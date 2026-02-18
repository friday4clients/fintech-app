import { Box, Flex, Heading, Icon, IconButton, ScrollArea, Separator, Stack } from "@chakra-ui/react"
import SiteLogo from "./SiteLogo";
import { SidebarLeft } from "iconsax-reactjs";
import AccountSwitcher from "./AccountSwitcher";
import { BottomSibarLinks, TopSidebarLinks } from "./SideberLinks";
import SidebarProfileCard from "./SidebarProfileCard";

const Sidebar = () => {
    return (
        <Stack gap="0" w="full" h="full" overflow="hidden" justify="start">
            {/* site logo */}
            <Box>
                <Flex h={14} p="4" pl="6" justify="space-between" align="center">
                    <Flex gap="3" align="center">
                        <Icon color="acccent">
                            <SiteLogo />
                        </Icon>
                        <Heading size="sm">Canvas</Heading>
                    </Flex>

                    <Icon
                        color="gray.400"
                        cursor='pointer'
                        rounded="sm"
                        p="0.5"
                        size="lg"
                        border='sm'
                        borderColor="gray.200"
                        _hover={{ bg: "gray.50" }}
                    >
                        <SidebarLeft />
                    </Icon>
                </Flex>
                <Separator />

                {/* account switcher */}
                <Box p="4">
                    <AccountSwitcher />
                </Box>
            </Box>

            <ScrollArea.Root flex="2" size="xs">
                <ScrollArea.Viewport>
                    <ScrollArea.Content pl="4">
                        <TopSidebarLinks />
                    </ScrollArea.Content>
                </ScrollArea.Viewport>
                <ScrollArea.Scrollbar>
                    <ScrollArea.Thumb />
                </ScrollArea.Scrollbar>
                <ScrollArea.Corner />
            </ScrollArea.Root>


            <Stack gap="2" justifySelf={"end"} px="4" flex="1" justify={"end"}>
                <BottomSibarLinks />
                <Separator />
                <SidebarProfileCard />
            </Stack>
        </Stack>
    )
}

export default Sidebar;