"use client"

import { AbsoluteCenter, Box, Flex, Heading, Image, Status } from "@chakra-ui/react"
import { Chart, useChart } from "@chakra-ui/charts"
import { HStack, Stack, Text } from "@chakra-ui/react"
import type { TooltipContentProps } from "recharts"
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts"
import { useRef } from "react"

export default function NavTrend() {
    return (
        <Stack gap={4} bg="bg" rounded="lg" p="6" h="310px">
            <Heading size="sm" fontWeight="semibold" color="fg.muted">NAV trend</Heading>

            {/* status */}
            <Flex gap="4">
                <Status.Root color="gray.600" fontWeight={"normal"}>
                    <Status.Indicator bg="#72C2FF" />
                    NAV ($M)
                </Status.Root>
                <Status.Root color="gray.600" fontWeight={"normal"}>
                    <Status.Indicator bg="#0048B9" />
                    Target ($M)
                </Status.Root>
            </Flex>

            {/* chart */}
            <NavTrendChart />
        </Stack>
    )
}


function CustomTooltip(props: Partial<TooltipContentProps<string, string>>) {
    const { active, payload, label } = props
    if (!active || !payload || payload.length === 0) return null
    return (
        <Box w="40" rounded="sm" bg="teal.subtle" p="3">
            <HStack>
                <span>{label} Customers</span>
            </HStack>
            <Stack>
                {payload.map((item) => (
                    <HStack key={item.name}>
                        <Box boxSize="2" bg={item.color} />
                        <Text textStyle="xl">{item.value}</Text>
                    </HStack>
                ))}
            </Stack>
        </Box>
    )
}


const NavTrendChart = () => {
    const hasData = useRef(false);

    const chart = useChart({
        data: [
            { NAV: 10, month: "Jan" },
            { NAV: 95, month: "Feb" },
            { NAV: 87, month: "Mar" },
            { NAV: 88, month: "Apr" },
            { NAV: 65, month: "May" },
            { NAV: 11, month: "Jun" },
        ],
        series: [{ name: "NAV", color: "blue.500" }],
    })

    return (
        <Box pos="relative" h="70%">
            <Chart.Root maxH="full" chart={chart}
                css={{
                    "& .recharts-cartesian-axis-tick-value": {
                        fill: "#999999 !important",
                    },
                }}>
                <LineChart data={chart.data}>
                    <XAxis
                        axisLine={false}
                        tickLine={false}
                        dataKey="month"
                        tickFormatter={(value) => value.slice(0, 3)}
                        // tickMargin={10}
                        stroke="currentColor"
                    />
                    <YAxis
                        axisLine={false}
                        tickLine={false}
                        tickMargin={42}
                        minTickGap={6}
                        stroke="currentColor"
                        dataKey="NAV"
                        height={"200px"}
                    />
                    {hasData?.current &&
                        <>
                            <Tooltip
                                animationDuration={100}
                                cursor={false}
                                content={<CustomTooltip />}
                            />
                            <Line
                                isAnimationActive={false}
                                dataKey="NAV"
                                stroke="var(--chakra-colors-blue-500)"
                                strokeWidth={2}
                                dot={false}
                            />
                        </>
                    }
                </LineChart>
            </Chart.Root>
            <AbsoluteCenter>
                <Stack align="center">
                    <Image h="57px" src="/no-data-available-fallback.png" alt="Empty state" />
                    <Heading size="sm" color="fg.muted">No data available</Heading>
                </Stack>
            </AbsoluteCenter>
        </Box>

    )
}
