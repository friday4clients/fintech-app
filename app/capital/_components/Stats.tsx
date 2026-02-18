import { SimpleGrid, Stat, HStack, Icon } from "@chakra-ui/react"
import { MoneyBagIcon, MoneyReceiveIcon, ChartBreakoutIcon, UserMultipleIcon } from "@customIcons/index"
import { useMemo } from "react"

export default function HeaderStats() {
    const data = useMemo(() => {
        return [
            { label: "Target fund size", value: "$100,000", icon: <MoneyBagIcon /> },
            { label: "Raised", value: "$100,000", icon: <MoneyReceiveIcon /> },
            { label: "Net Asset Value (NAV)", value: "$0M", icon: <ChartBreakoutIcon /> },
            { label: "LPs", value: "$0", icon: <UserMultipleIcon /> },
        ]
    }, [])

    return (
        <SimpleGrid columns={4} gap="4">
            {data.map((item, index) => (
                <Stat.Root justifyContent="space-between" h="160px" key={index}  p="4" rounded="lg" bg="bg" >
                    <HStack justify="space-between">
                        <Stat.Label color="fg.subtle">{item.label}</Stat.Label>
                        <Icon size="xl" color="fg.muted" bg="bg.subtle" rounded="md" p="1">
                            {item.icon}
                        </Icon>
                    </HStack>
                    <Stat.ValueText fontFamily={"heading"}>{item.value}</Stat.ValueText>
                </Stat.Root>
            ))}
        </SimpleGrid>
    )
}