"use client"

import { Box, Flex, Heading, Icon } from "@chakra-ui/react"
import { Stack, Text } from "@chakra-ui/react"
import { useMemo } from "react"
import Link from "next/link"
import { ArrowRight2 } from "iconsax-reactjs"
import { DocumentValidationIcon, UserMultipleIcon, BriefCaseIcon, CollaborationIcon } from "@components/customIcons"

export default function QuickAccess() {
    const links = useMemo(() => {
        return [
            { label: "Legal documents", desc: "View legal documents", href: "", Icon: DocumentValidationIcon, disabled: false },
            { label: "Invite LPs", desc: "Invite LPs to your fund", href: "", Icon: UserMultipleIcon, disabled: false },
            { label: "Capital call", desc: "Issue capital call", href: "", Icon: BriefCaseIcon, disabled: false },
            { label: "Collaborate", desc: "Work with the Fiduciary", href: "", Icon: CollaborationIcon, disabled: false },
        ]
    }, [])
    return (
        <Box spaceY={4} bg="bg" rounded="lg" p="4">
            <Heading size="sm" color="fg">Quick Access</Heading>


            {/* quick links */}
            <Stack gap="2">
                {links.map((link, index) => (
                    <Link href={link.href} key={index}
                        style={{ pointerEvents: link.disabled ? "none" : "auto" }}>
                        <Flex
                            rounded="lg"
                            align="center"
                            justify="space-between"
                            opacity={link.disabled ? 0.5 : 1}
                            bg={link.disabled ? "bg.muted" : "bg"}
                            gap="4"
                            p="4"
                            border="sm"
                            borderColor="border"
                            _hover={{ bg: "bg.subtle" }}
                        >
                            <Flex gap="2" align="center">
                                <link.Icon boxSize="48px" bg="bg.subtle" p="3" rounded="md" color="fg.muted" />
                                <Stack gap="0">
                                    <Heading size="sm" color="fg.muted">{link.label}</Heading>
                                    <Text fontSize="xs" color="fg.subtle">{link.desc}</Text>
                                </Stack>
                            </Flex>

                            <Icon size="sm" color="fg.muted">
                                <ArrowRight2 />
                            </Icon>
                        </Flex>
                    </Link>
                ))}
            </Stack>



        </Box >
    )
}


