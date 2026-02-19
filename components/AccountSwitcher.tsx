"use client"


import { Avatar, createListCollection, Flex, Icon, Portal, Select, Stack, Text } from "@chakra-ui/react"
import { ArrowDown2, ArrowUp2 } from "iconsax-reactjs"
import { useEffectEvent, useMemo, useState } from "react"
import { useSidebarStore } from "../stores/sidebar.store"

const AccountSwitcher = () => {
    const { isSidebarOpen } = useSidebarStore()
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
        <Flex
            mx="-4"
            p="4"
            bg="bg"
            pos="sticky"
            top="0"
            zIndex="docked"
            justify={"center"}
            align="center"
        >
            <Select.Root
                onSelect={(a) => handleAccountChange(a.value)} collection={accounts}
                size="sm"
                overflow="hidden"
                width={isSidebarOpen ? "full" : "64px"}>
                <Select.HiddenSelect />
                <Select.Control>
                    <Select.Trigger
                        cursor={"pointer"}
                        w={isSidebarOpen ? "full" : "64px"}
                        h="64px"
                        bg="gray.50"
                        border="gray.100"
                        p='12px'
                        rounded="lg">
                        <Flex
                            gap="2"
                            align="center"
                            justify={isSidebarOpen ? "space-between" : "center"}
                            w="full"
                        >
                            <Flex
                                gap="2"
                                align="center"
                                justify={isSidebarOpen ? "start" : "center"}
                            // w={isSidebarOpen ? "full" : "64px"}
                            >

                                <Avatar.Root size="xs" width="40px" h="40px" >
                                    <Avatar.Fallback name={selectedAccount.userName} />
                                    <Avatar.Image width="40px" h="40px" src={selectedAccount.avatarUrl} />
                                </Avatar.Root>
                                {isSidebarOpen && <Stack gap="0" justify={"center"} >
                                    <Text lineClamp={1}
                                        fontWeight={"medium"} color="gray.600"
                                        fontSize="xs">{selectedAccount.userName}</Text>
                                    <Text
                                        lineClamp={1}
                                        fontSize="xs" color="gray.400">{selectedAccount.walletName}</Text>
                                </Stack>}
                            </Flex>
                            {/* icon */}
                            {isSidebarOpen && <Stack gap="0" align="center" color="fg">
                                <Icon size="sm" >
                                    <ArrowUp2 />
                                </Icon>
                                <Icon size="sm" mt="-2">
                                    <ArrowDown2 />
                                </Icon>
                            </Stack>}
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
                                    <Flex w="full" gap={isSidebarOpen ? "2" : "0"} align="center" justify={isSidebarOpen ? "start" : "center"}>
                                        <Avatar.Root size="xs">
                                            <Avatar.Fallback name={account.userName} />
                                            <Avatar.Image src={account.avatarUrl} />
                                        </Avatar.Root>
                                        {isSidebarOpen && <Stack gap="0" justify={"center"} >
                                            <Text fontWeight={"semibold"} color="fg.muted" fontSize="xs">{account.userName}</Text>
                                            <Text fontSize="xs" color="fg.subtle">{account.walletName}</Text>
                                        </Stack>}
                                    </Flex>
                                    {isSidebarOpen && <Select.ItemIndicator />}
                                </Select.Item>
                            ))}
                        </Select.Content>
                    </Select.Positioner>
                </Portal>
            </Select.Root>
        </Flex>
    )
}

export default AccountSwitcher