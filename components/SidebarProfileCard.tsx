"use client"

import { Avatar, Flex, Icon, Stack, Text } from "@chakra-ui/react"
import { User } from "iconsax-reactjs"
import { useSidebarStore } from "@stores/sidebar.store"

const SidebarProfileCard = () => {
    const {isSidebarOpen} = useSidebarStore()
    return (
        <Flex gap="2" align="center" p="4" pl={isSidebarOpen ? "4" : "1"}>
            <Avatar.Root size="sm" bg="bg" border="md" borderColor="border" shadow={"md"}>
                <Avatar.Fallback name="John Doe" />
                {/* <Avatar.Image src="https://bit.ly/sage-adebayo" /> */}
            </Avatar.Root>
            {isSidebarOpen && <Stack gap="0">
                <Text fontSize="sm" color="fg.muted" fontWeight="medium">John Doe</Text>
                <Text fontSize="xs" color="gray.500">rashida.dauda@xyz.com</Text>
            </Stack>}
        </Flex>
    )
}

export default SidebarProfileCard;