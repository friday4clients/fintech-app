import { Flex, IconButton, Separator } from "@chakra-ui/react";
import HeaderActiveLink from "./HeaderActiveLink";
import LayoutHeaderSearchbar from "./LayoutHeaderSearchbar";
import { BellIcon } from "./customIcons";
import Link from "next/link";
import PortalSwitcher from "./PortalSwitcher";

const LayoutHeader = () => {

    return (
        <Flex h="14" p="4" justify={"space-between"} w="full">
            <HeaderActiveLink />
            <Flex gap="4" align="center" justify={"end"}>
                <LayoutHeaderSearchbar />
                <Separator h="full" orientation="vertical" />
                <Link href="/">
                    <IconButton variant="ghost" size="sm">
                        <BellIcon />
                    </IconButton>
                </Link>
                <PortalSwitcher />
            </Flex>
        </Flex>
    )
}

export default LayoutHeader;