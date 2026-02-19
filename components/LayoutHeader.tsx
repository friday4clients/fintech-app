import { Flex, IconButton, Separator } from "@chakra-ui/react";
import HeaderActiveLink from "./HeaderActiveLink";
import LayoutHeaderSearchbar from "./LayoutHeaderSearchbar";
import { BellIcon } from "./customIcons";
import Link from "next/link";
import PortalSwitcher from "./PortalSwitcher";

const LayoutHeader = () => {

    return (
        <Flex h="72px" p="4" justify={"space-between"} w="full">
            <HeaderActiveLink />
            <Flex gap="4" align="center" justify={"end"}>
                <LayoutHeaderSearchbar />
                <Separator h="70%" borderColor="gray.200" orientation="vertical" />
                <Link href="/">
                    <IconButton variant="ghost" boxSize="40px" rounded="full" bg="gray.50">
                        <BellIcon />
                    </IconButton>
                </Link>
                <PortalSwitcher />
            </Flex>
        </Flex>
    )
}

export default LayoutHeader;