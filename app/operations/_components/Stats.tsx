import { SimpleGrid, Stat, HStack, Icon } from "@chakra-ui/react"
import { MoneyBagIcon, MoneyReceiveIcon, ChartBreakoutIcon, UserMultipleIcon } from "@customIcons/index"
import { useMemo } from "react"

export default function HeaderStats() {
    const data = useMemo(() => {
        return [
            { label: "Target fund size", value: "$10M", Icon: MoneyBagIcon },
            { label: "Raised", value: "$2.5M", Icon: MoneyReceiveIcon },
            { label: "Net Asset Value (NAV)", value: "$12.5M", Icon: ChartBreakoutIcon },
            { label: "LPs", value: "24", Icon: UserMultipleIcon },
        ]
    }, [])

    return (
        <SimpleGrid columns={4} gap="4">
            {data.map((item, index) => (
                <Stat.Root justifyContent="space-between" h="160px" key={index}  p="4" rounded="lg" bg="bg" >
                    <HStack justify="space-between" alignItems={"start"}>
                        <Stat.Label color="fg.subtle">{item.label}</Stat.Label>
                        <item.Icon boxSize={"10"} bg="bg.muted" color="fg.muted" rounded="md" p="2" />
                    </HStack>
                    <Stat.ValueText fontFamily={"heading"}>{item.value}</Stat.ValueText>
                </Stat.Root>
            ))}
        </SimpleGrid>
    )
}