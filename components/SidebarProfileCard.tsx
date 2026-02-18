import { Avatar, Flex, Icon, Stack, Text } from "@chakra-ui/react"
import { User } from "iconsax-reactjs"

const SidebarProfileCard = () => {
    return (
        <Flex gap="2" align="center" p="4">
            <Avatar.Root size="sm" bg="bg" border="md" borderColor="border" shadow={"md"}>
                <Avatar.Fallback name="John Doe" />
                {/* <Avatar.Image src="https://bit.ly/sage-adebayo" /> */}
            </Avatar.Root>
            <Stack gap="0">
                <Text fontSize="sm" color="fg.muted" fontWeight="medium">John Doe</Text>
                <Text fontSize="xs" color="gray.500">rashida.dauda@xyz.com</Text>
            </Stack>
        </Flex>
    )
}

export default SidebarProfileCard;