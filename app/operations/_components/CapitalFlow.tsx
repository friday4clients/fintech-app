"use client"

import { AbsoluteCenter, Box, Flex, Heading, Image, Status } from "@chakra-ui/react"
import { Chart, useChart } from "@chakra-ui/charts"
import { HStack, Stack, Text } from "@chakra-ui/react"
import type { TooltipContentProps } from "recharts"
import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts"
import { useRef } from "react"

export default function CapitalFlow() {
    return (
        <Box spaceY={4} bg="bg" rounded="lg" p="4">
            <Heading size="sm" color="fg.muted">Capital flow</Heading>

            {/* status */}
            <Flex gap="4">
                <Status.Root color="fg.muted" fontWeight={"medium"}>
                    <Status.Indicator bg="#005AE7" />
                    Inflows ($M)
                </Status.Root>
                <Status.Root color="fg.muted" fontWeight={"medium"}>
                    <Status.Indicator bg="fg" />
                    Outflows ($M)
                </Status.Root>
            </Flex>

            {/* chart */}
            <CapitalFlowChart />
        </Box>
    )
}


function CustomTooltip(props: Partial<TooltipContentProps<string, string>>) {
    const { active, payload, label } = props
    if (!active || !payload || payload.length === 0) return null
    return (
        <Stack pos="relative" textStyle="sm" color="fg.muted" w="fit" align="center" justify="center" rounded="xl" bg="bg" shadow={"md"} p="4">
            <Flex gap="4">
                <Status.Root color="fg.muted" fontWeight={"medium"}>
                    <Status.Indicator bg="fg" />
                    <Text>${payload[0].value}M</Text>
                </Status.Root>
                <Status.Root color="fg.muted" fontWeight={"medium"}>
                    <Status.Indicator bg="#005AE7" />
                    <Text>${payload[1].value}M</Text>
                </Status.Root>
            </Flex>
            <Text>{label}</Text>

            {/* tooltip arrow */}
            <Box rotate={"-45deg"} rounded="lg" pos="absolute" bottom="-0" zIndex={-1} shadow="md" left="50%" transform="translateX(-50%)" bg="bg" w="8" h="8" />
        </Stack>
    )
}


const CapitalFlowChart = () => {
    const hasData = useRef(false);
    const chart = useChart({
        data: [
            { y: 0, inflows: 7, outflows: 10, month: "Jan" },
            { y: 5, inflows: 15, outflows: 5, month: "Feb" },
            { y: 10, inflows: 10, outflows: 20, month: "Mar" },
            { y: 15, inflows: 17, outflows: 5, month: "Apr" },
            { y: 20, inflows: 20, outflows: 18, month: "May" },
            { y: 20, inflows: 17, outflows: 12, month: "Jun" },
        ],
        series: [
            { name: "outflows", color: "fg" },
            { name: "inflows", color: "#005AE7" },
        ],
    })


    return (
        <Box pos="relative">
            <Chart.Root maxH="sm" chart={chart}>
                <BarChart data={chart.data}>
                    <CartesianGrid stroke={chart.color("border.muted")} vertical={false} />
                    <XAxis
                        tickLine={false}
                        dataKey={chart.key("month")}
                        stroke={chart.color("border")}
                    />
                    <YAxis tickMargin={40} dataKey="y" tickLine={false} stroke={chart.color("border")} />
                    <Tooltip
                        cursor={{ fill: chart.color("bg.muted") }}
                        animationDuration={100}
                        content={<CustomTooltip />}
                    />
                    {/* <Legend
                        layout="vertical"
                        align="right"
                        verticalAlign="top"
                        wrapperStyle={{ paddingLeft: 30 }}
                        content={<Chart.Legend orientation="vertical" />}
                    /> */}
                    {chart.series.map((item) => (
                        <Bar
                            key={item.name}
                            dataKey={chart.key(item.name)}
                            fill={chart.color(item.color)}
                            radius={[10, 10, 0, 0]}
                        />
                    ))}
                </BarChart>
            </Chart.Root>
        </Box>

    )
}
