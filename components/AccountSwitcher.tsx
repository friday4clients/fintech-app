"use client"


import { Avatar, createListCollection, Flex, Icon, Portal, Select, Stack, Text } from "@chakra-ui/react"
import { ArrowDown2, ArrowUp2 } from "iconsax-reactjs"
import { useEffectEvent, useMemo, useState } from "react"

const AccountSwitcher = () => {
    const accounts = useMemo(() => {
        return createListCollection({
            items: [
                { label: "Seed Fund 2026", value: "Seed Fund 2026", avatarUrl: "/profile.png", userName: "Seed Fund 2026", walletName: "GP/LP Fund" },
                { label: "Seed Fund 2022", value: "Seed Fund 2022", avatarUrl: "/profile2.png", userName: "Seed Fund 2022", walletName: "AH/LP Fund" },
                { label: "Seed Fund 2025", value: "Seed Fund 2025", avatarUrl: "/profile3.png", userName: "Seed Fund 2025", walletName: "CR/LP Fund" },
            ]
        })
    }, [])
    const [selectedAccount, setSelectedAccount] = useState<typeof accounts.items[0]>(() => accounts.items[0])
    const handleAccountChange = useEffectEvent((userName: typeof accounts.items[0]["userName"]) => {
        setSelectedAccount(accounts.items.find((account) => account.userName === userName)!!)
    })

    return (
        <Select.Root onSelect={(a) => handleAccountChange(a.value)} collection={accounts} size="sm" width="full">
            <Select.HiddenSelect />
            <Select.Control>
                <Select.Trigger cursor={"pointer"} w="full" bg="bg.subtle" border="xs" borderColor="border" p="2" rounded="md">
                    <Flex gap="2" align="center" justify={"space-between"} w="full">
                        <Flex gap="2" align="center">
                            <Avatar.Root size="xs">
                                <Avatar.Fallback name={selectedAccount.userName} />
                                <Avatar.Image src={selectedAccount.avatarUrl} />
                            </Avatar.Root>
                            <Stack gap="0" justify={"center"} >
                                <Text fontWeight={"semibold"} color="fg.muted" fontSize="xs">{selectedAccount.userName}</Text>
                                <Text fontSize="xs" color="fg.subtle">{selectedAccount.walletName}</Text>
                            </Stack>
                        </Flex>
                        {/* icon */}
                        <Stack gap="0" align="center" color="fg">
                            <Icon size="sm" >
                                <ArrowUp2 />
                            </Icon>
                            <Icon size="sm" mt="-2">
                                <ArrowDown2 />
                            </Icon>
                        </Stack>
                    </Flex>
                </Select.Trigger>
                {/* <Select.IndicatorGroup>
                    <Select.Indicator />
                </Select.IndicatorGroup> */}
            </Select.Control>
            <Portal>
                <Select.Positioner>
                    <Select.Content>
                        {accounts.items.map((account) => (
                            <Select.Item item={account} key={account.value}>

                                <Flex gap="2" align="center">
                                    <Avatar.Root size="xs">
                                        <Avatar.Fallback name={account.userName} />
                                        <Avatar.Image src={account.avatarUrl} />
                                    </Avatar.Root>
                                    <Stack gap="0" justify={"center"} >
                                        <Text fontWeight={"semibold"} color="fg.muted" fontSize="xs">{account.userName}</Text>
                                        <Text fontSize="xs" color="fg.subtle">{account.walletName}</Text>
                                    </Stack>
                                </Flex>
                                <Select.ItemIndicator />
                            </Select.Item>
                        ))}
                    </Select.Content>
                </Select.Positioner>
            </Portal>
        </Select.Root>
    )
}

export default AccountSwitcher