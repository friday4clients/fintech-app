"use client"

import { AbsoluteCenter, Box, Flex, Heading, Image, Status, Span, For, Table } from "@chakra-ui/react"
import { Chart, useChart } from "@chakra-ui/charts"
import { HStack, Stack, Text } from "@chakra-ui/react"
import type { TooltipContentProps } from "recharts"
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts"
import { useRef } from "react"
import Link from "next/link"
import { ArrowRight2 } from "iconsax-reactjs"

export default function TotalLPs() {
    return (
        <Box spaceY={4} bg="bg" rounded="lg" p="4" h='full'>
            <Flex justify="space-between">
                <Heading size="sm" color="fg">Total LPs</Heading>
                <Link href="/">
                    <Flex align="center" gap="1" fontWeight={"medium"} color="accent">
                        <Text fontSize={"sm"}>View all</Text>
                        <ArrowRight2 size="14" />
                    </Flex>
                </Link>
            </Flex>

            {/* table */}
            <Table.Root size="md">
                <Table.Header>
                    <Table.Row>
                        <Table.ColumnHeader color="gray.500" bg="bg.subtle" border="none">LP</Table.ColumnHeader>
                        <Table.ColumnHeader color="gray.500" bg="bg.subtle" border="none">COMMITTED</Table.ColumnHeader>
                        <Table.ColumnHeader color="gray.500" bg="bg.subtle" border="none" textAlign="end">FUNDED</Table.ColumnHeader>
                        <Table.ColumnHeader color="gray.500" bg="bg.subtle" border="none" textAlign="end">OWNERSHIP</Table.ColumnHeader>
                        <Table.ColumnHeader color="gray.500" bg="bg.subtle" border="none" textAlign="end">STATUS</Table.ColumnHeader>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <For each={[]}
                        fallback={
                            <Table.Row>
                                <Table.Cell border="none" colSpan={5}>
                                    <Stack h="200px" align="center" justify="center">
                                        <Image h="57px" src="/no-data-available-fallback.png" alt="Empty state" />
                                        <Heading size="sm" color="fg.muted">No data available</Heading>
                                    </Stack>
                                </Table.Cell>
                            </Table.Row>
                        }>
                        {(variant) => (
                            items.map((item) => (
                                <Table.Row key={item.id}>
                                    <Table.Cell border="none">{item.name}</Table.Cell>
                                    <Table.Cell border="none">{item.category}</Table.Cell>
                                    <Table.Cell border="none" textAlign="end">{item.price}</Table.Cell>
                                </Table.Row>
                            ))
                        )}
                    </For>
                </Table.Body>
            </Table.Root>


        </Box >
    )
}


const items = [
    { id: 1, name: "Laptop", category: "Electronics", price: 999.99 },
    { id: 2, name: "Coffee Maker", category: "Home Appliances", price: 49.99 },
    { id: 3, name: "Desk Chair", category: "Furniture", price: 150.0 },
    { id: 4, name: "Smartphone", category: "Electronics", price: 799.99 },
    { id: 5, name: "Headphones", category: "Accessories", price: 199.99 },
]



