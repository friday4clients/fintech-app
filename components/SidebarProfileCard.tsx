"use client"

import { Avatar, Flex, Icon, Stack, Text } from "@chakra-ui/react"
import { User } from "iconsax-reactjs"
import { useSidebarStore } from "@stores/sidebar.store"

const SidebarProfileCard = () => {
    const { isSidebarOpen } = useSidebarStore()
    return (
        <Flex
            gap="2"
            borderTop={"gray.100"}
            align="center"
            justify={isSidebarOpen ? "start" : "center"}
            p="4"
            >
            <Flex
                bg="gray.100"
                rounded="full"
                p="0.5"
                align={"center"}
                justify={"center"}
                boxSize="48px" >
                <Avatar.Root
                    boxShadow={"40px"}
                    bg="bg"
                    shadow="md"
                >
                    <Avatar.Fallback fontSize={"md"} color="gray.800" name="John Doe" />
                    {/* <Avatar.Image src="https://bit.ly/sage-adebayo" /> */}
                </Avatar.Root>
            </Flex>
            {isSidebarOpen && <Stack gap="0">
                <Text fontSize="sm" color="gray.800" fontWeight="regular">John Doe</Text>
                <Text fontSize="xs" color="gray.800" fontWeight="medium">rashida.dauda@xyz.com</Text>
            </Stack>}
        </Flex>
    )
}

export default SidebarProfileCard;