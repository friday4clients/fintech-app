import { Metadata } from "next"
import { Box, Heading, Text } from "@chakra-ui/react"

export const metadata: Metadata = {
    title: "Capital",
    description: "Capital page",
}

export default function Capital() {
    return (
        <Box h="full" pos="relative">
            <Heading>Welcome, Tabitha</Heading>
            <Text fontSize="xs" color="fg.subtle">Here's an overview of your fund</Text>
        </Box>
    )
}