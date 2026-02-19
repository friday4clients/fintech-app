import { Metadata } from "next"
import { Badge, Box, Flex, Grid, GridItem, Group, Heading, Separator, SimpleGrid, Stack, Text } from "@chakra-ui/react"
import HeaderStats from "./_components/Stats"
import NavTrend from "./_components/NavTrend"
import CapitalFlow from "./_components/CapitalFlow"
import TotalLPs from "./_components/TotalLPs"
import QuickAccess from "./_components/QuickAccess"

export const metadata: Metadata = {
    title: "Capital",
    description: "Capital page",
}

export default function Capital() {
    const fundData = [
        { label: "Type", value: "GP/LP" },
        { label: "Jurisdiction", value: "Maritius" },
        { label: "Management fee", value: "2%" },
        { label: "Carry", value: "20%" },
        { label: "Created", value: "01-10-2026" },
    ]
    return (
        <Stack gap="4" h="full" pos="relative">
            <Box>
                <Heading size="2xl" fontWeight={"bold"} color="gray.900">Welcome, Tabitha</Heading>
                <Text fontSize="sm" color="gray.500">Here's an overview of your fund</Text>
            </Box>

            <HeaderStats />

            <Stack bg="bg" rounded="lg" p="6" gap="4">
                <Box>
                    <Group>
                        <Heading color='fg.muted' size="md" fontWeight='medium' fontFamily={"inter"} >Seed Fund 2026</Heading>
                        <Badge variant="subtle" fontSize="xs" rounded="full" bg="green.50" color="green">Active</Badge>
                    </Group>
                    <Text color="fg.subtle" fontSize="sm">Your LPA, PPM, and Subscription Agreement have been submitted and are under Fiduciary review. Expected status updates in 5-7 days.</Text>
                </Box>

                <SimpleGrid columns={5} gap="4">
                    {fundData.map((item, index) => (
                        <Flex gap="2" key={index} align="center">
                            {index !== 0 && <Separator orientation="vertical" borderX="sm" h="70%" borderColor="gray.200" />}
                            <Stack key={index}>
                                <Text fontSize="sm" color="fg.subtle">{item.label}</Text>
                                <Text fontSize="sm" fontWeight="medium" color="gray.700">{item.value}</Text>
                            </Stack>
                        </Flex>
                    ))}
                </SimpleGrid>
            </Stack>

            {/* trends */}
            <SimpleGrid columns={2} gap="4">
                <NavTrend />
                <CapitalFlow />
            </SimpleGrid>

            <Flex gap="4">
                <Box w="60%" h="424px">
                    <TotalLPs />
                </Box>
                <Box w="40%" h="424px">
                    <QuickAccess />
                </Box>
            </Flex>
        </Stack>
    )
}