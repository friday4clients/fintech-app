"use client"

import { AbsoluteCenter, Box, Flex, Heading, Image, Status } from "@chakra-ui/react"
import { Chart, useChart } from "@chakra-ui/charts"
import { HStack, Stack, Text } from "@chakra-ui/react"
import type { TooltipContentProps } from "recharts"
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts"
import { useRef } from "react"

export default function NavTrend() {
    return (
        <Box spaceY={4} bg="bg" rounded="lg" p="4">
            <Heading size="sm" color="fg.muted">NAV trend</Heading>

            {/* status */}
            <Flex gap="4">
                <Status.Root color="fg.muted" fontWeight={"medium"}>
                    <Status.Indicator bg="#005AE7" />
                    NAV ($M)
                </Status.Root>
                <Status.Root color="fg.muted" fontWeight={"medium"}>
                    <Status.Indicator bg="fg" />
                    Target ($M)
                </Status.Root>
            </Flex>

            {/* chart */}
            <NavTrendChart />
        </Box>
    )
}


function CustomTooltip(props: Partial<TooltipContentProps<string, string>>) {
    const { active, payload, label } = props
    if (!active || !payload || payload.length === 0) return null
    return (
        <Stack pos="relative" textStyle="sm" color="fg.muted" boxSize="20" align="center" justify="center" rounded="xl" bg="bg" shadow={"md"} p="2">
            <Text>${payload[0].value}M</Text>
            <Text>{label}</Text>

            {/* tooltip arrow */}
            <Box rotate={"-45deg"} rounded="lg" pos="absolute" bottom="-0" zIndex={-1} shadow="md" left="50%" transform="translateX(-70%)" bg="bg" w="6" h="6" />
        </Stack>
    )
}


const NavTrendChart = () => {
    const hasData = useRef(true);

    const chart = useChart({
        data: [
            { y: 0, NAV: 6, targets: 9, month: "Jan" },
            { y: 5, NAV: 8, targets: 6, month: "Feb" },
            { y: 10, NAV: 7, targets: 11, month: "Mar" },
            { y: 15, NAV: 6, targets: 10, month: "Apr" },
            { y: 20, NAV: 8, targets: 6, month: "May" },
            { y: null, NAV: 4, targets: 9, month: "Jun" },
        ],
        series: [{ name: "NAV", color: "#005AE7" }, { name: "targets", color: "fg" }],
    })

    return (
        <Box>

            <Chart.Root maxH="sm" chart={chart}>
                <LineChart data={chart.data}>
                    <CartesianGrid stroke={chart.color("border")} vertical={false} />
                    <XAxis
                        axisLine={false}
                        tickLine={false}
                        dataKey="month"
                        tickFormatter={(value) => value.slice(0, 3)}
                        tickMargin={10}
                        stroke="currentColor"
                    />
                    <YAxis
                        axisLine={false}
                        tickLine={false}
                        tickMargin={40}
                        stroke={chart.color("border")}
                        dataKey={"y"}
                    />
                    {hasData?.current &&
                        <>
                            <Tooltip
                                animationDuration={100}
                                cursor={false}
                                content={<CustomTooltip />}
                            />
                            {chart.series.map((item) => (
                                <Line
                                    dot={false}
                                    activeDot={true}
                                    type="bump"
                                    key={item.name}
                                    dataKey={chart.key(item.name)}
                                    fill={chart.color(item.color)}
                                    stroke={chart.color(item.color)}
                                    strokeWidth={2}
                                />
                            ))}
                        </>
                    }
                </LineChart>
            </Chart.Root>
        </Box>

    )
}
