import { SimpleGrid, Stat, HStack, Icon, Text, Heading } from "@chakra-ui/react"
import { MoneyBagIcon, MoneyReceiveIcon, ChartBreakoutIcon, UserMultipleIcon2 } from "@customIcons/index"
import { useMemo } from "react"

export default function HeaderStats() {
    const data = useMemo(() => {
        return [
            { label: "Target fund size", value: "$100,000", Icon: MoneyBagIcon },
            { label: "Raised", value: "$100,000", Icon: MoneyReceiveIcon },
            { label: "Net Asset Value (NAV)", value: "$0M", Icon: ChartBreakoutIcon },
            { label: "LPs", value: "$0", Icon: UserMultipleIcon2 },
        ]
    }, [])

    return (
        <SimpleGrid columns={4} gap="3">
            {data.map((item, index) => (
                <Stat.Root justifyContent="space-between" h="160px" key={index} p="4" rounded="lg" bg="bg" >
                    <HStack justify="space-between" alignItems="start">
                        <Stat.Label color="fg.subtle">{item.label}</Stat.Label>
                        <item.Icon boxSize={"10"} bg="gray.50" color="gray.700" rounded="md" p="2" />
                    </HStack>
                    <Stat.ValueText>
                        <Heading fontWeight="bold" size="2xl" color='gray.900'>
                            {item.value}
                        </Heading>
                    </Stat.ValueText>
                </Stat.Root>
            ))}
        </SimpleGrid>
    )
}