"use client"


import { Avatar, createListCollection, Flex, Icon, Portal, Select, Stack, Text } from "@chakra-ui/react"
import { ArrowDown2, ArrowUp2 } from "iconsax-reactjs"
import { useEffectEvent, useMemo, useState } from "react"
import SiteLogo from "./SiteLogo"

const PortalSwitcher = () => {
    const accounts = useMemo(() => {
        return createListCollection({
            items: [
                { label: "Portal 1", value: "Portal 1", logo: <SiteLogo />, },
                { label: "Poral 2", value: "Portal 2", logo: <SiteLogo />, },
                { label: "Portal 3", value: "Portal 3", logo: <SiteLogo />, },
            ]
        })
    }, [])
    const [selectedAccount, setSelectedAccount] = useState<typeof accounts.items[0]>(() => accounts.items[0])
    const handleAccountChange = useEffectEvent((value: typeof accounts.items[0]["value"]) => {
        setSelectedAccount(accounts.items.find((account) => account.value === value)!!)
    })

    return (
        <Select.Root size="xs" w="20" onSelect={(a) => handleAccountChange(a.value)} collection={accounts}>
            <Select.HiddenSelect />
            <Select.Control bg="gray.100" w="20" rounded="full">
                <Select.Trigger border="none" cursor={"pointer"} p="2" px="4" rounded="full">
                    <Icon boxSize={"10"} asChild>
                        {selectedAccount.logo}
                    </Icon>
                </Select.Trigger>
                <Select.IndicatorGroup>
                    {/* icon */}
                    <Stack gap="0" align="center" color="fg">
                        <Icon size="sm" >
                            <ArrowUp2 />
                        </Icon>
                        <Icon size="sm" mt="-2">
                            <ArrowDown2 />
                        </Icon>
                    </Stack>
                    {/* <Select.Indicator /> */}
                </Select.IndicatorGroup>
            </Select.Control>
            <Portal>
                <Select.Positioner>
                    <Select.Content>
                        {accounts.items.map((account) => (
                            <Select.Item item={account} key={account.value}>
                                <Icon size="xs">
                                    {account.logo}
                                </Icon>
                                <Select.ItemIndicator />
                            </Select.Item>
                        ))}
                    </Select.Content>
                </Select.Positioner>
            </Portal>
        </Select.Root>
    )
}

export default PortalSwitcher